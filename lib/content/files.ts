import type { ClassifiedFile } from "./types";

export const realFiles: ClassifiedFile[] = [
  {
    id: "cia-ufo-reading-room",
    category: "real",
    title: "CIA UFO Reading Room Collection",
    classification: "PUBLIC RECORD",
    type: "PDF",
    source: "Central Intelligence Agency",
    href: "https://www.cia.gov/readingroom/collection/ufos-fact-or-fiction",
    summary: "Declassified CIA documents on UFO investigations from the 1940s-1990s, including Project Blue Book materials and international sighting reports."
  },
  {
    id: "fbi-vault-ufo",
    category: "real",
    title: "FBI Records: The Vault - UFO",
    classification: "PUBLIC RECORD",
    type: "PDF",
    source: "Federal Bureau of Investigation",
    href: "https://vault.fbi.gov/UFO",
    summary: "FBI investigative files on UFO phenomena, including the famous Roswell memo and civilian witness reports from across the United States."
  },
  {
    id: "project-blue-book",
    category: "real",
    title: "Project Blue Book Archive",
    classification: "DECLASSIFIED",
    type: "PDF",
    source: "U.S. Air Force",
    href: "https://www.archives.gov/research/military/air-force/ufos",
    summary: "U.S. Air Force systematic study of UFOs from 1952 to 1969, documenting over 12,000 sightings and encounters."
  }
];

export const fictionFiles: ClassifiedFile[] = [
  {
    id: "varginha-incident-report",
    category: "fiction",
    title: "Incident Report: Varginha Entity Recovery",
    redactedTitle: "INCIDENT REPORT: ████████ ██████ ████████",
    classification: "TOP SECRET",
    type: "TEXT",
    source: "███████ Intelligence Division",
    href: "/files/varginha-incident",
    summary: "Classified report detailing the alleged recovery of non-human entities in Varginha, Brazil, January 1996.",
    fictionNotice: "This is a fictional document created for Terminal Varginha. It is not a real government record."
  },
  {
    id: "operation-saucer-files",
    category: "fiction",
    title: "Operation Saucer: Brazil UFO Investigation",
    redactedTitle: "OPERATION ██████: ██████ UFO INVESTIGATION",
    classification: "EYES ONLY",
    type: "PDF",
    source: "Brazilian Air Force [FICTIONAL]",
    href: "/files/operation-saucer",
    summary: "Fictionalized expansion of real Operation Saucer (Operação Prato), Brazil's official UFO investigation in the Amazon, 1977.",
    fictionNotice: "While Operation Saucer was real, this document contains fictionalized details for gameplay purposes."
  }
];
