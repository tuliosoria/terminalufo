import type { ClassifiedFile } from "./types";

export const realFiles: ClassifiedFile[] = [];

const fictionDisclaimer = "Fictional file created for Terminal Varginha. Not a real government record.";

export const fictionFiles: ClassifiedFile[] = [
  {
    id: "varginha-001",
    category: "fiction",
    title: "Recording of ET autopsy — Varginha, January 1996",
    classification: "LEAKED",
    type: "AUDIO",
    source: "Anonymous upload, regional hospital basement archive",
    date: "1996-01-23",
    summary: "Forty-seven minute audio capture attributed to a procedural examination of a non-human subject conducted at an undisclosed regional medical facility. Voices identify two attending physicians, a third unidentified observer, and intermittent equipment alarms. Subject vocalizations recorded in final eleven minutes have not been classified.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-002",
    category: "fiction",
    title: "Nurse describes 3 fingers and a smell she has never forgotten",
    classification: "ANONYMOUS SOURCE",
    type: "TRANSCRIPT",
    source: "Witness intake transcript, identity sealed",
    date: "1996-02-04",
    summary: "Statement provided by a former trauma-ward nurse, age 31 at time of incident, who reports brief physical contact with a captive subject during transfer. Witness consistently describes three elongated digits, no opposable thumb, and an organic odor she compares to ozone mixed with wet copper. Witness has refused subsequent contact.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-003",
    category: "fiction",
    title: "Foreign navy visited Varginha 47 times between 1996 and 2003",
    classification: "DECLASSIFIED",
    type: "REPORT",
    source: "Foreign Travel Logs, Office of Foreign Liaison [FICTIONAL]",
    date: "2009-08-12",
    summary: "Compiled travel records indicate forty-seven distinct entries by foreign naval personnel into the Minas Gerais region across a seven year window. Visits cluster around a regional airfield with no documented strategic value. Cover stories cite agricultural and meteorological exchange programs that have no corresponding records at host institutions.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-004",
    category: "fiction",
    title: "Doctor claims the being communicated with him in dreams for 11 years",
    classification: "ANONYMOUS SOURCE",
    type: "TRANSCRIPT",
    source: "Self-recorded testimony, deposited with private notary",
    date: "2007-06-19",
    summary: "Sealed testimony from a regional surgeon, since deceased, describing recurring dream-state communication with a subject he examined briefly in 1996. Witness reports the contact escalated from impressions to structured language over a decade. Notary released the recording in accordance with the witness's standing instructions.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-005",
    category: "fiction",
    title: "Satellite images of the capture site scrubbed from Google Maps",
    classification: "LEAKED",
    type: "PHOTOGRAPH",
    source: "Imagery archivist, name withheld",
    date: "2014-03-22",
    summary: "Side-by-side comparison of two commercial satellite passes over the same Varginha city block, captured eleven months apart. The earlier pass shows a fenced enclosure with three vehicles and a covered structure. The later pass renders the same parcel as low-resolution vegetation tile inconsistent with the rest of the image.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-006",
    category: "fiction",
    title: "Military officer's deathbed confession — full transcript",
    classification: "LEAKED",
    type: "TRANSCRIPT",
    source: "Family-released hospice recording",
    date: "2019-11-04",
    summary: "Two hour recording from a retired sergeant in palliative care, dictated to an attending priest and an adult relative. Subject describes participation in a January 1996 transfer operation involving two living non-human specimens and one deceased. Recording was withheld from press for four years per family request.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-007",
    category: "fiction",
    title: "Biopsy slides labeled 'V-1' surface in private auction catalog",
    classification: "LEAKED",
    type: "PHOTOGRAPH",
    source: "European pathology auction listing, since withdrawn",
    date: "2017-10-08",
    summary: "Set of nine glass microscope slides offered as part of a closed pathology estate sale. Slides bear the handwritten label V-1 and a date string corresponding to the Varginha event window. Listing was withdrawn within four hours of publication. Catalog screenshots are the only surviving record.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-008",
    category: "fiction",
    title: "Field report: unmarked refrigerated trailer escorted by federal vehicles",
    classification: "ANONYMOUS SOURCE",
    type: "REPORT",
    source: "Independent journalist field notes",
    date: "1996-01-22",
    summary: "Eyewitness account from a long-haul driver describing a refrigerated semi-trailer with no carrier markings exiting Varginha at 04:40 local time. Trailer was preceded and followed by two unmarked sedans bearing federal plates. Driver reports being signaled to maintain distance and was followed for nineteen kilometers.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-009",
    category: "fiction",
    title: "Intercepted radio chatter references 'cargo two, vital signs stable'",
    classification: "INTERCEPTED",
    type: "AUDIO",
    source: "Amateur radio operator capture, archived",
    date: "1996-01-21",
    summary: "Eighty-three second segment captured on a regional military band by a hobbyist operator. Two voices coordinate transport logistics referencing cargo one and cargo two, with one party confirming vital signs stable and request for additional sedation. No matching official record of the transmission exists.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-010",
    category: "fiction",
    title: "Pediatrician's incident log: 'patient described creature exactly'",
    classification: "DECLASSIFIED",
    type: "DOCUMENT",
    source: "Released under regional public records request, 2011",
    date: "1996-02-11",
    summary: "Single page from a pediatrician's daily intake log noting an eight year old patient who described, unprompted, a small bipedal figure with red eyes observed near her schoolyard fence. Notation in the margin reads matches three other accounts this week. The associated patient file is not included in the release.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-011",
    category: "fiction",
    title: "REDACTED — capture site biohazard incident report",
    redactedTitle: "REDACTED — █████ ████ ████████ ████████ ██████",
    classification: "REDACTED",
    type: "REPORT",
    source: "Civil defense archive [redacted on release]",
    date: "1996-01-24",
    summary: "Four page incident report covering a contamination event at a perimeter staging area. Approximately sixty percent of body text is blacked out. Visible fragments include the phrases level three exposure, two personnel quarantined, and recommend extension of cordon. Signatory blocks are fully redacted.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-012",
    category: "fiction",
    title: "DNA sequencing memo: 'no match in any reference database'",
    classification: "LEAKED",
    type: "DOCUMENT",
    source: "Unattributed biotech laboratory memo",
    date: "2002-09-17",
    summary: "Internal memo on lab letterhead with masthead removed, summarizing sequencing results from sample VRG-A. Memo states the sample is biological, structurally intact, and produces no significant alignment against any reference genome available to the analyst. Memo recommends external review and immediate sample isolation.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-013",
    category: "fiction",
    title: "Federal agent's resignation letter cites 'what we did with the bodies'",
    classification: "LEAKED",
    type: "DOCUMENT",
    source: "Personal correspondence, provenance disputed",
    date: "1998-05-30",
    summary: "Two page resignation letter signed only with initials, addressed to an unnamed regional director. Author cites loss of conscience over the disposition of biological remains recovered during a January 1996 operation in the southern Brazilian highlands. Letter references three remains and a coastal incineration site.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-014",
    category: "fiction",
    title: "Unmarked C-130 logged at regional airfield with no flight plan",
    classification: "DECLASSIFIED",
    type: "REPORT",
    source: "Civil aviation incident filing [FICTIONAL]",
    date: "1996-01-23",
    summary: "Tower log entry recording a four-engine military transport landing at a regional airfield without a filed flight plan or registered call sign. Aircraft remained on ground for ninety-two minutes. Cargo handlers were instructed to remain inside the terminal until the aircraft departed. No customs filings were submitted.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-015",
    category: "fiction",
    title: "Photograph: gloved hand holding object the size of a child's skull",
    classification: "ANONYMOUS SOURCE",
    type: "PHOTOGRAPH",
    source: "Print mailed anonymously to regional newspaper, 1997",
    date: "1997-04-14",
    summary: "Single underexposed photograph of a gloved hand holding an oblong cranial-shape object on a stainless surface. Object exhibits non-symmetric ocular sockets and three dorsal protrusions consistent with persistent witness descriptions. Original print and envelope are held by the receiving newsroom and have not been independently authenticated.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-016",
    category: "fiction",
    title: "Veterinarian's ledger: 18 livestock 'drained, no predator marks'",
    classification: "DECLASSIFIED",
    type: "DOCUMENT",
    source: "Rural veterinary practice records, regional archive",
    date: "1996-02-02",
    summary: "Pages from a rural veterinary ledger covering the two weeks following the Varginha event. Eighteen separate cattle deaths logged across four properties within a fifteen kilometer radius. Each entry notes complete exsanguination through small circular incisions and absence of predator activity at the scene.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-017",
    category: "fiction",
    title: "Surveillance still: figure in NBC suit exiting Hospital ████",
    redactedTitle: "Surveillance still: figure in NBC suit exiting Hospital ████",
    classification: "REDACTED",
    type: "PHOTOGRAPH",
    source: "Hospital CCTV archive, leaked to civic transparency group",
    date: "1996-01-22",
    summary: "Single closed circuit frame timestamped 02:14, depicting a figure in full nuclear-biological-chemical protective gear exiting a service door. Hospital identifier in the frame has been blacked out by the source prior to release. Source claims the frame is one of seventeen depicting similar figures across the night.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-018",
    category: "fiction",
    title: "Foreign embassy cable: 'Brazilian counterpart requesting NBC support'",
    classification: "DECLASSIFIED",
    type: "DOCUMENT",
    source: "Released under freedom of information request, 2015 [FICTIONAL]",
    date: "1996-01-21",
    summary: "One page diplomatic cable summarizing a request from a Brazilian liaison officer for nuclear, biological, and chemical containment expertise on short notice. Cable notes the request is unusual in scope and explicitly outside scheduled cooperation programs. Subject line and recipient block are fully visible.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-019",
    category: "fiction",
    title: "Hospital ventilation logs show pressure inversions only on capture nights",
    classification: "ANONYMOUS SOURCE",
    type: "REPORT",
    source: "Maintenance contractor disclosure",
    date: "2005-07-08",
    summary: "Compiled HVAC pressure data from a regional hospital across the period of January through March 1996. Two distinct pressure inversion events match the dates reported by witnesses for the alleged transfers. Inversions are inconsistent with normal operation and would be required for biological containment.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-020",
    category: "fiction",
    title: "Vatican envoy quietly visited regional bishop one week after incident",
    classification: "ANONYMOUS SOURCE",
    type: "REPORT",
    source: "Diocesan staff testimony, name withheld",
    date: "1996-01-29",
    summary: "Statement from a former diocesan secretary describing an unannounced visit by a senior envoy to the regional bishop on the morning of 27 January 1996. Visitor was admitted without appointment and remained four hours. Witness reports the bishop subsequently asked all staff to refrain from speaking publicly on recent events.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-021",
    category: "fiction",
    title: "Children at Escola ████ describe identical figure in coordinated drawings",
    redactedTitle: "Children at Escola ████ describe identical figure in coordinated drawings",
    classification: "REDACTED",
    type: "PHOTOGRAPH",
    source: "School counsellor archive [FICTIONAL]",
    date: "1996-03-11",
    summary: "Photographs of twenty-three drawings produced by primary school students aged six to nine across two separate classrooms. Each depicts a brown bipedal figure of consistent proportion, with three dorsal protrusions and red ocular features. School identifier and student names have been redacted prior to release.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-022",
    category: "fiction",
    title: "Intercepted phone call: 'tell them it was a coati, do not deviate'",
    classification: "INTERCEPTED",
    type: "AUDIO",
    source: "Domestic intelligence intercept summary [FICTIONAL]",
    date: "1996-01-25",
    summary: "Twenty-six second recording attributed to a senior civil affairs official and an unidentified subordinate. Senior party instructs the subordinate to advise local media that the captured creature was a misidentified coati and to refuse follow up questions. Authenticity of the intercept has not been independently verified.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-023",
    category: "fiction",
    title: "Geiger readings remain elevated at capture site three decades later",
    classification: "DECLASSIFIED",
    type: "REPORT",
    source: "Independent radiological survey [FICTIONAL]",
    date: "2024-02-15",
    summary: "Walking survey of the alleged primary capture site conducted in February 2024 records persistent low-level gamma readings two to four times regional background. Anomaly is confined to a sixteen square meter area and has not migrated. No municipal or industrial use of the parcel is recorded for the period.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-024",
    category: "fiction",
    title: "Recurring sky anomaly returns to Varginha every January 20",
    classification: "ANONYMOUS SOURCE",
    type: "VIDEO",
    source: "Civilian observer compilation, ongoing submission",
    date: "2023-01-20",
    summary: "Four minute compilation video aggregating handheld phone footage from the same date across nine consecutive years. Each clip depicts a low slow-moving point of light tracing a near-identical path over the city. Compiler maintains an open call for additional submissions and continues to collect new footage annually.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-025",
    category: "fiction",
    title: "Forensic odontologist: 'this jaw is not from any known primate'",
    classification: "LEAKED",
    type: "REPORT",
    source: "Independent forensic consultant, identity withheld",
    date: "2011-08-30",
    summary: "Three page consultant report on a partial mandibular specimen presented as recovered from the Varginha containment chain. Analyst describes dental architecture inconsistent with any extant or fossil primate, including absence of canine differentiation and a posterior chamber of unknown function. Specimen chain of custody cannot be reconstructed.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-026",
    category: "fiction",
    title: "Local police radio log goes silent for 41 minutes during transfer window",
    classification: "DECLASSIFIED",
    type: "DOCUMENT",
    source: "Municipal police records release, 2008",
    date: "1996-01-22",
    summary: "Excerpt from the municipal police dispatch log covering 02:01 to 02:42 on 22 January 1996. Forty one consecutive minutes contain no entries, dispatch acknowledgements, or unit check-ins, against a baseline of three to five entries per minute on adjacent shifts. Log resumes mid-call without a continuity note.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-027",
    category: "fiction",
    title: "Insurance claim filed for 'biohazard cleanup, undisclosed substance'",
    classification: "LEAKED",
    type: "DOCUMENT",
    source: "Insurance broker disclosure, names redacted",
    date: "1996-04-09",
    summary: "Commercial insurance claim filed by a private cleaning contractor seeking reimbursement for specialized biohazard remediation at a municipal facility in Varginha. Substance is described as unidentified organic residue and the worksite is named only by parcel number. Claim was settled without the standard inspection.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-028",
    category: "fiction",
    title: "Joint foreign-Brazil exercise 'CRESCENT FIELD' began 36 hours after capture",
    classification: "DECLASSIFIED",
    type: "DOCUMENT",
    source: "Bilateral exercise schedule [FICTIONAL]",
    date: "1996-01-22",
    summary: "Single page schedule for an unannounced bilateral training exercise hosted at a base within ground-transport range of Varginha. Exercise commenced thirty-six hours after the alleged primary capture and concluded four days later with no public after-action statement. Exercise is not listed in either country's published calendar.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-029",
    category: "fiction",
    title: "Witness ledger: 12 named witnesses dead within 4 years, none over 50",
    classification: "ANONYMOUS SOURCE",
    type: "REPORT",
    source: "Independent investigator compilation, ongoing",
    date: "2021-09-04",
    summary: "Cross referenced obituary and civil registry compilation tracking twelve named witnesses to the Varginha events who died within four years of January 1996. None of the twelve had reached fifty years of age. Causes of death cluster around acute infection, single vehicle accident, and undiagnosed cardiac failure.",
    fictionNotice: fictionDisclaimer
  },
  {
    id: "varginha-030",
    category: "fiction",
    title: "Subject V-3 reportedly still alive — facility location unknown",
    classification: "ANONYMOUS SOURCE",
    type: "REPORT",
    source: "Continuing source with internal access, identity sealed",
    date: "2024-04-18",
    summary: "Brief statement from a source claiming intermittent visual access to a containment facility maintained jointly by Brazilian and allied personnel. Source asserts that one specimen designated V-3 remains alive and biologically active, and that observation protocols have not changed since 2008. No supporting imagery has been provided.",
    fictionNotice: fictionDisclaimer
  }
];
