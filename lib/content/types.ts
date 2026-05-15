export type NavItem = {
  label: string;
  href: string;
};

export type TerminalLine = {
  prefix?: string;
  text: string;
  tone?: "green" | "amber" | "red" | "muted";
};

export type FileCategory = "real" | "fiction";

export type ClassifiedFile = {
  id: string;
  category: FileCategory;
  title: string;
  redactedTitle?: string;
  classification: "PUBLIC RECORD" | "DECLASSIFIED" | "FOR OFFICIAL USE ONLY" | "EYES ONLY" | "TOP SECRET";
  type: "PDF" | "IMAGE" | "VIDEO" | "AUDIO" | "TEXT";
  source: string;
  href: string;
  summary: string;
  fictionNotice?: string;
};

export type SourceNote = {
  id: string;
  title: string;
  publisher: string;
  url: string;
  summary: string;
  use: string;
};

export type TimelineEntry = {
  date: string;
  title: string;
  body: string;
  sourceIds: string[];
};
