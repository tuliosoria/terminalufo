import type { TerminalLine, Mechanic, CommandReference } from "./types";

export const gameTitle = "Terminal Varginha";

export const heroLogs: TerminalLine[] = [
  { prefix: "SYS", text: "connection accepted from unknown relay", tone: "green" },
  { prefix: "ARCHIVE", text: "case index: varginha / january 1996", tone: "amber" },
  { prefix: "UFO74", text: "do not trust the clean files", tone: "muted" }
];

export const ufo74Lines: TerminalLine[] = [
  { prefix: "$", text: "access ufo-74-archive" },
  { text: "ACCESSING CLASSIFIED NETWORK...", tone: "amber" },
  { text: "CLEARANCE VERIFIED", tone: "green" },
  { text: "Loading incident reports...", tone: "muted" }
];

export const mechanics: Mechanic[] = [
  {
    title: "The Terminal Interface",
    body: "Navigate classified UFO files through an authentic command-line interface. Each decision shapes your understanding of the truth."
  },
  {
    title: "The Risk System",
    body: "Every file you access increases your exposure. Push too far and the system will detect you. Choose carefully what to investigate."
  },
  {
    title: "The File Leak Mechanic",
    body: "Uncover documents that were never meant to be public. Each leak reveals more about the Varginha incident, but at what cost?"
  }
];

export const commands: CommandReference[] = [
  { command: "note", description: "Record observations about files and incidents" },
  { command: "save", description: "Preserve your progress in the investigation" },
  { command: "wait", description: "Let time pass to reduce detection risk" },
  { command: "override", description: "Force access to restricted files at high risk" }
];
