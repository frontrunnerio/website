export const inquiryTopics = {
  drift: "Abweichende Umgebungen",
  changes: "Riskante Änderungen",
  recovery: "Manuelle Wiederherstellung",
  overview: "Überblick gewinnen",
} as const;

export type InquiryTopic = keyof typeof inquiryTopics;

export function buildInquiry(topic: InquiryTopic, situation: string) {
  return {
    subject: "Erstgespräch: " + inquiryTopics[topic],
    body: [
      "Hallo Andreas,",
      "",
      "ich möchte ein unverbindliches Erstgespräch zum Thema „" +
        inquiryTopics[topic] +
        "“ anfragen.",
      ...(situation.trim()
        ? ["", "Unsere Situation:", situation.trim().slice(0, 600)]
        : []),
      "",
      "Wann würde es für ein Gespräch passen?",
      "",
      "Viele Grüße",
    ].join("\n"),
  };
}

export function inquiryMailto(inquiry: ReturnType<typeof buildInquiry>) {
  return (
    "mailto:info@frontrunner.io?subject=" +
    encodeURIComponent(inquiry.subject) +
    "&body=" +
    encodeURIComponent(inquiry.body)
  );
}
