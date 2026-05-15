import type { SourceNote, TimelineEntry } from "./types";
import sourceNotesData from "../../content/varginha/source-notes.json";

export const varginhaSourceNotes: SourceNote[] = sourceNotesData;

export const varginhaSeoKeywords = [
  "Varginha UFO incident",
  "Brazil UFO 1996",
  "alien creature sighting",
  "Varginha alien",
  "UFO Brazil",
  "extraterrestrial encounter",
  "classified UFO files",
  "government UFO cover-up",
  "Varginha creature",
  "Brazilian UFO case"
];

export const varginhaTimeline: TimelineEntry[] = [
  {
    date: "1996-01-20",
    title: "Initial Sighting",
    body: "Multiple witnesses in Varginha, Brazil report seeing a strange craft flying low over the city during daylight hours. Witnesses describe erratic flight patterns and unusual appearance.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Creature Encounter",
    body: "Three young women encounter a strange creature in a vacant lot. They describe a bipedal being with brown oily skin, large red eyes, and three protruding lumps on its head. The creature appeared injured or distressed.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Military Response",
    body: "Local fire department and military personnel reportedly arrive at the scene. Witnesses report seeing military trucks and an organized recovery operation.",
    sourceIds: ["openminds-varginha"]
  },
  {
    date: "1996-01-22",
    title: "Second Creature Capture",
    body: "Reports emerge of a second creature captured by military personnel near the Varginha Zoo. Multiple independent witnesses describe seeing military operations in the area.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-02-15",
    title: "Military Officer Death",
    body: "Military police officer Marco Eli Chereze dies under mysterious circumstances after allegedly participating in the creature capture operation. Official cause listed as bacterial infection.",
    sourceIds: ["openminds-varginha"]
  },
  {
    date: "1996-04-21",
    title: "Official Denial",
    body: "Brazilian military issues official denial of any UFO or creature recovery operations in Varginha. However, witnesses stand by their accounts and several refuse to retract their statements.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  }
];
