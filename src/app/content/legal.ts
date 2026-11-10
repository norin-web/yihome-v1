// PLACEHOLDER — the owner's Google Docs (Privacy Policy, Terms of Use) were empty on
// 2026-11-10. When the texts arrive, paste them here VERBATIM. Only markup may change:
// section numbers become "## " headings (the page numbers them itself), "* " bullets
// become "- " lists. Never paraphrase.

// PLACEHOLDER: effective date from the owner's documents.
export const legalUpdated = "Date from client text";

const PRIVACY: string | null = null;
const TERMS: string | null = null;

// "At a glance" cards are a site summary, not part of the documents.
export const privacy = {
  title: "Privacy Policy",
  current: "privacy",
  body: PRIVACY,
  glance: [
    ["What we collect", "Summary from client text."],
    ["How we use it", "Summary from client text."],
    ["Your choices", "Summary from client text."],
  ] as [string, string][],
  other: { to: "/terms", label: "Terms of Use" },
};

export const terms = {
  title: "Terms of Use",
  current: "terms",
  body: TERMS,
  glance: [
    ["Using the app", "Summary from client text."],
    ["Subscriptions", "Summary from client text."],
    ["Your responsibilities", "Summary from client text."],
  ] as [string, string][],
  other: { to: "/privacy", label: "Privacy Policy" },
};
