import type { TerminalLine } from "./types";

export const gameTitle = "Terminal Varginha";

export const heroLogs: TerminalLine[] = [
  { text: "INITIALIZING SECURE TERMINAL...", tone: "green" },
  { text: "connection accepted from unknown relay", tone: "amber" },
  { text: "CLEARANCE LEVEL: OBSERVER", tone: "muted" },
  { text: "WARNING: do not trust the clean files", tone: "red" }
];

export const ufo74Lines: TerminalLine[] = [
  { prefix: "$", text: "access ufo-74-archive" },
  { text: "ACCESSING CLASSIFIED NETWORK...", tone: "amber" },
  { text: "CLEARANCE VERIFIED", tone: "green" },
  { text: "Loading incident reports...", tone: "muted" }
];

export const mechanics = [
  {
    title: "The Terminal Interface",
    description: "Navigate classified UFO files through an authentic command-line interface. Each decision shapes your understanding of the truth."
  },
  {
    title: "The Risk System",
    description: "Every file you access increases your exposure. Push too far and the system will detect you. Choose carefully what to investigate."
  },
  {
    title: "The File Leak Mechanic",
    description: "Uncover documents that were never meant to be public. Each leak reveals more about the Varginha incident, but at what cost?"
  }
];

export const commands = [
  { name: "note", description: "Record observations about files and incidents" },
  { name: "save", description: "Preserve your progress in the investigation" },
  { name: "wait", description: "Let time pass to reduce detection risk" },
  { name: "override", description: "Force access to restricted files at high risk" }
];
