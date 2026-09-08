import assert from "node:assert/strict";

const { chromium } = await import(
  process.env.PLAYWRIGHT_MODULE || "playwright"
);
const base = process.env.BASE_URL || "http://127.0.0.1:4322";
const browser = await chromium.launch({ channel: "chrome", headless: true });
const errors = [];

try {
  const context = await browser.newContext({
    permissions: ["clipboard-read", "clipboard-write"],
  });
  const page = await context.newPage();
  page.on("pageerror", (error) => errors.push(error.message));
  for (const width of [320, 390, 768, 1024, 1440, 1920]) {
    await page.setViewportSize({ width, height: width < 640 ? 844 : 1000 });
    for (const path of ["/", "/about", "/contact", "/imprint", "/privacy"]) {
      await page.goto(base + path, { waitUntil: "networkidle" });
      assert.equal(
        await page.locator("main h1").count(),
        1,
        path + ": one page heading",
      );
      const overflowing = await page.evaluate(() =>
        [...document.querySelectorAll("main *")]
          .filter((el) => el.getBoundingClientRect().right > innerWidth + 1)
          .map((el) => el.tagName + "." + el.className),
      );
      assert.equal(
        await page.evaluate(
          () => document.documentElement.scrollWidth > innerWidth,
        ),
        false,
        path + ": overflow at " + width + ": " + overflowing.join(", "),
      );
      if (path === "/") {
        await page.locator(".hero-photo").evaluate((img) => img.decode());
        const nextSectionTop = await page
          .locator(".benefits-strip")
          .evaluate((el) => el.getBoundingClientRect().top);
        assert.ok(
          nextSectionTop < (width < 640 ? 844 : 1000),
          "Next section visible at " + width,
        );
      }
      if (["/", "/contact", "/about"].includes(path)) {
        await page.screenshot({
          path:
            "/tmp/frontrunner-v2-" +
            (path.slice(1) || "home") +
            "-" +
            width +
            ".png",
          fullPage: false,
        });
      }
    }
  }
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.goto(base + "/");
  await page.getByRole("link", { name: "Leistungen ansehen" }).click();
  await page.waitForURL("**/#leistungen");
  assert.ok(
    await page
      .locator("#leistungen")
      .evaluate((el) => el.getBoundingClientRect().top >= 0),
  );
  const faq = page
    .locator("summary")
    .filter({ hasText: "Müssen wir unsere Tools" });
  await faq.click();
  assert.equal(await faq.evaluate((el) => el.parentElement.open), true);
  await faq.click();
  assert.equal(await faq.evaluate((el) => el.parentElement.open), false);
  await page.locator(".hero-photo").evaluate((img) => img.decode());
  await page.evaluate(() => scrollTo(0, 0));
  await page.screenshot({
    path: "/tmp/frontrunner-v2-full.png",
    fullPage: true,
  });

  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto(base + "/");
  await page.getByLabel("Menü öffnen oder schließen").click();
  assert.equal(
    await page.locator(".mobile-navigation").evaluate((el) => el.open),
    true,
  );
  await page.keyboard.press("Escape");
  assert.equal(
    await page.locator(".mobile-navigation").evaluate((el) => el.open),
    false,
  );
  await page.getByLabel("Menü öffnen oder schließen").click();
  await page
    .getByRole("navigation", { name: "Mobile Navigation", exact: true })
    .getByRole("link", { name: "Über uns" })
    .click();
  await page.waitForURL("**/about");
  await page.goto(base + "/");
  await page
    .getByRole("link", { name: "Umgebungen in Einklang bringen" })
    .click();
  await page.waitForURL("**/contact?thema=drift");
  assert.equal(
    await page
      .getByRole("radio", { name: "Abweichende Umgebungen" })
      .isChecked(),
    true,
  );
  const message = "Test: Umlaute äöü, & = ? # und Zeilen\nZweite Zeile";
  await page.getByLabel("Ihre Situation").fill(message);
  const email = page.getByRole("link", { name: "E-Mail-Anfrage öffnen" });
  let mailto = new URL(await email.getAttribute("href"));
  assert.equal(mailto.pathname, "info@frontrunner.io");
  assert.equal(
    mailto.searchParams.get("subject"),
    "Erstgespräch: Abweichende Umgebungen",
  );
  assert.ok(mailto.searchParams.get("body").includes(message));
  await page.getByRole("radio", { name: "Riskante Änderungen" }).check();
  mailto = new URL(await email.getAttribute("href"));
  assert.equal(
    mailto.searchParams.get("subject"),
    "Erstgespräch: Riskante Änderungen",
  );
  await page.evaluate(() => {
    window.testEvents = [];
    window.va = (name, value) => window.testEvents.push({ name, value });
    document.addEventListener(
      "click",
      (event) => {
        if (event.target.closest('a[href^="mailto:"]')) event.preventDefault();
      },
      true,
    );
  });
  await email.click();
  await page
    .getByRole("status")
    .filter({ hasText: "keine Nachricht versendet" })
    .waitFor();
  await page.getByRole("button", { name: "Anfragetext kopieren" }).click();
  await page
    .getByRole("status")
    .filter({ hasText: "Anfrage kopiert" })
    .waitFor();
  assert.ok(
    (await page.evaluate(() => navigator.clipboard.readText())).includes(
      message,
    ),
  );
  const events = await page.evaluate(() => window.testEvents);
  assert.equal(
    JSON.stringify(events).includes(message),
    false,
    "No free text in analytics",
  );
  assert.ok(
    events.some((event) => event.value?.name === "consultation_email_open"),
  );
  assert.ok(events.some((event) => event.value?.name === "consultation_copy"));

  await page.goto(base + "/contact?thema=not-a-topic");
  assert.equal(
    await page.getByRole("radio", { name: "Überblick gewinnen" }).isChecked(),
    true,
  );
  await page.goto(base + "/en");
  assert.match(await page.locator("main h1").innerText(), /Ship faster/);
  await page.setViewportSize({ width: 1440, height: 1000 });
  await page.getByRole("link", { name: "DE", exact: true }).click();
  await page.waitForURL(base + "/");
  assert.equal(
    await page.locator("body").getAttribute("class"),
    "consulting-site",
  );
  await page.emulateMedia({ reducedMotion: "reduce", colorScheme: "dark" });
  await page.reload();
  assert.equal(
    await page.locator("main h1").innerText(),
    "Mehr verlässliche IT.",
  );
  const noJs = await browser.newContext({ javaScriptEnabled: false });
  const fallback = await noJs.newPage();
  await fallback.goto(base + "/contact");
  assert.match(
    await fallback
      .getByRole("link", { name: "E-Mail-Anfrage öffnen" })
      .getAttribute("href"),
    /^mailto:info@frontrunner.io/,
  );
  assert.ok(await fallback.locator("noscript").isVisible());
  assert.deepEqual(errors, []);
  console.log(
    "PASS: 30 responsive page checks, loaded hero, mobile menu, FAQs, section links, topic routing, encoded email drafts, copy, analytics privacy, English, no-JS fallback. No email sent.",
  );
} finally {
  await browser.close();
}
