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
    title: "Fire Department Response",
    body: "Varginha Fire Department receives calls about a 'strange animal' in the area. Firefighters reportedly arrive at the scene and participate in a capture operation, though official records deny any such deployment.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-20",
    title: "Military Response",
    body: "Local fire department and military personnel reportedly arrive at the scene. Witnesses report seeing military trucks and an organized recovery operation.",
    sourceIds: ["openminds-varginha", "ufo-com-br"]
  },
  {
    date: "1996-01-20",
    title: "Hospital Transfer Allegations",
    body: "Witnesses report seeing military vehicles transporting covered cargo to Hospital Regional and Hospital Humanitas. Hospital administrators deny receiving any unusual patients or materials, but multiple independent witnesses describe unusual security presence at both facilities.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-22",
    title: "Second Creature Capture",
    body: "Reports emerge of a second creature captured by military personnel near the Varginha Zoo. Multiple independent witnesses describe seeing military operations in the area.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "1996-01-23",
    title: "Witness Interrogations Begin",
    body: "Reports surface of military personnel interviewing witnesses and requesting they sign non-disclosure statements. Several witnesses claim they were pressured to alter or retract their accounts of the creature encounters.",
    sourceIds: ["openminds-varginha", "ufo-com-br"]
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
  },
  {
    date: "1996-05-12",
    title: "Media Coverage Intensifies",
    body: "National Brazilian media outlets begin extensive coverage of the Varginha incident. Television interviews with primary witnesses, including the three young women, bring the case to nationwide attention and spark public debate.",
    sourceIds: ["ufo-com-br", "openminds-varginha"]
  },
  {
    date: "2004-09-01",
    title: "U.S. Intelligence Historical Context",
    body: "Declassification of Cold War-era CIA documents reveals historical U.S. intelligence interest in South American UFO phenomena, establishing precedent for inter-agency cooperation on extraordinary incidents.",
    sourceIds: ["cia-ufo-reading-room", "cia-brazil-document-search"]
  },
  {
    date: "2020-01-20",
    title: "Terminal Varginha Development",
    body: "Fictional narrative begins development, using the historical Varginha incident as inspiration for an interactive fiction experience exploring government secrecy, witness credibility, and the construction of truth from competing narratives.",
    sourceIds: ["ufo-com-br", "openminds-varginha", "fbi-vault-ufo", "cia-ufo-reading-room"]
  }
];
