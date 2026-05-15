import type { FileDetail } from "./types";

export const fileDetails: Record<string, FileDetail> = {
  "varginha-001": {
    excerpt:
      "Forty-seven minutes of audio. Two physicians named on tape. The third voice — the one giving instructions — is never identified.",
    artifacts: [
      { label: "Runtime", value: "00:47:13" },
      { label: "Format", value: "MP3, 128 kbps, stereo" },
      { label: "Provenance", value: "Anonymous upload, regional hospital basement archive" },
      { label: "Chain of custody", value: "Broken — first appearance is the upload itself" }
    ],
    sections: [
      {
        heading: "Provenance",
        body: [
          "The file surfaced on a regional file-sharing board in 2018, posted by an account that was created and abandoned the same day. Metadata embedded in the original upload places the recording device inside a closed, hard-walled room of approximately twelve square meters. Background reverb is consistent with tile and stainless steel.",
          "An audio engineer commissioned by an independent investigator concluded that the recording was made on a single low-cost dictaphone, almost certainly concealed. There are no edits in the first thirty-six minutes. The final eleven minutes contain three separate gaps that have been digitally clipped rather than re-recorded over."
        ]
      },
      {
        heading: "Voices on tape",
        body: [
          "Two adult male voices identify themselves to one another by surname during the first six minutes. Both names correspond to physicians known to have been on staff at a regional hospital in January 1996. Neither has spoken publicly about the night in question. One died in 2004; the other has refused all approaches.",
          "A third voice is heard intermittently from minute nine onward. This voice never identifies itself, gives only short instructions, and speaks in a register and cadence that the engineer described as \"calm to the point of being inappropriate to the procedure being narrated.\" The voice is the only one that addresses the subject directly."
        ]
      },
      {
        heading: "Subject vocalizations",
        body: [
          "Beginning at 36:14 the recording captures sounds attributed to the subject of the procedure. These are not human, not feline, and do not match any wildlife species that the engineer was able to source for comparison. The sounds are tonal, narrow-band, and arrive in patterned clusters of three.",
          "At 41:02 one of the physicians is heard to say, in Portuguese, \"it knows we are here.\" The third voice answers immediately and the recording is clipped one-quarter of a second later. The remaining audio is procedural to the end."
        ]
      }
    ],
    handlerNote:
      "We are not publishing the audio file from this archive. The transcript above is composed from notes taken by listeners who claim to have heard the original.",
    related: ["varginha-002", "varginha-006", "varginha-019"]
  },

  "varginha-002": {
    excerpt:
      "She was thirty-one. She washed her hands seven times. She has not spoken to her sister since the morning shift ended.",
    artifacts: [
      { label: "Witness age (1996)", value: "31" },
      { label: "Role", value: "Trauma-ward nurse, regional hospital" },
      { label: "Interview length", value: "1 hour 12 minutes" },
      { label: "Identity status", value: "Sealed at witness request" }
    ],
    sections: [
      {
        heading: "Conditions of disclosure",
        body: [
          "The witness agreed to a single recorded interview in 1996, on the explicit condition that her name and place of employment never be associated with the transcript. Both conditions have been honored. She has not granted any subsequent interview to any party in the twenty-eight years since.",
          "She agreed to the original recording only after the interviewer arrived alone and presented no recording equipment beyond a single audio cassette. The cassette is held in a sealed envelope by a third party."
        ]
      },
      {
        heading: "What she remembers",
        body: [
          "She describes being asked, without explanation, to assist with the transfer of \"a patient under restraint\" from a service entrance to an interior room she had never been authorized to enter. She was told the patient was contaminated and was given gloves but no other protective equipment.",
          "Brief contact occurred when the patient's right limb fell from the gurney as she helped reposition it. She describes three elongated digits without an opposable thumb, a wrist that articulated in two planes she found difficult to describe, and a skin temperature noticeably below her own.",
          "The smell, she says, is the part she cannot put away. She compares it to ozone after a thunderstorm, mixed with the wet copper smell of arterial bleeding. She washed her hands repeatedly during the remainder of her shift and again at home."
        ]
      },
      {
        heading: "After the night",
        body: [
          "She left the hospital within four months. She has never worked in a clinical setting again. The intake transcript notes that during the interview she paused twice for periods longer than ninety seconds and that the interviewer did not prompt her during these pauses."
        ]
      }
    ],
    related: ["varginha-001", "varginha-017", "varginha-019"]
  },

  "varginha-003": {
    excerpt:
      "Forty-seven entries in seven years. The town does not have a port. The town does not have a base. The town does have a small hospital with a basement.",
    artifacts: [
      { label: "Window covered", value: "Jan 1996 – Dec 2003" },
      { label: "Distinct visits logged", value: "47" },
      { label: "Cover programs cited", value: "3 (agricultural, meteorological, cultural)" },
      { label: "Corresponding host records", value: "0" }
    ],
    sections: [
      {
        heading: "Pattern of travel",
        body: [
          "The compiled record draws on travel vouchers, per-diem reimbursement filings, and rental car invoices that were released as part of an unrelated audit response. Forty-seven distinct trips were taken by uniformed personnel from the same foreign naval office to the Minas Gerais region across the seven year window covered by the audit.",
          "All forty-seven trips depart and return through the same regional airfield, which has no routine military traffic. Thirty-one of the trips are scheduled to begin or end on a date within seven days of January 20."
        ]
      },
      {
        heading: "Cover stories",
        body: [
          "Three cover programs are cited across the forty-seven trips: an agricultural exchange, a meteorological cooperation initiative, and a cultural liaison program. None of the three programs has any corresponding record at the named Brazilian host institution. Two of the three programs have no record of existing in any foreign agency database.",
          "The third program — the meteorological one — is real, but its published travel calendar for the same period does not include any of the trips listed in the audit response."
        ]
      },
      {
        heading: "Open questions",
        body: [
          "The audit covers only the seven years 1996 through 2003 because the requesting auditor did not extend the window. We do not know whether the visits stopped in 2003 or whether the recordkeeping changed. The personnel named in the vouchers have either retired or transferred out of the office; only one is reachable. He does not return correspondence."
        ]
      }
    ],
    related: ["varginha-018", "varginha-028", "varginha-014"]
  },

  "varginha-004": {
    excerpt:
      "He examined the subject for nineteen minutes in 1996. He says it spoke to him every night for eleven years after.",
    artifacts: [
      { label: "Witness", value: "Regional surgeon (deceased 2009)" },
      { label: "Recording date", value: "2007-06-19" },
      { label: "Runtime", value: "1 hour 47 minutes" },
      { label: "Held by", value: "Notary office, southern Minas Gerais" }
    ],
    sections: [
      {
        heading: "The deposit",
        body: [
          "The witness recorded the testimony alone, in a single sitting, in his home study in June 2007. He delivered the cassette personally to a notary the following week along with written instructions that it was not to be released until two years after his death. He died in 2009. The instructions were honored.",
          "The notary's release statement notes that the witness appeared lucid, gave clear oral confirmation of the contents on the day of deposit, and declined an offer to revise or shorten the recording before sealing it."
        ]
      },
      {
        heading: "What the recording contains",
        body: [
          "The witness describes a brief 1996 examination, ordered by a senior officer he did not recognize, of a subject he was permitted to see only above the waist. He notes pulse, respiration rate, and surface temperature, all of which he found impossible to reconcile with any human or known mammalian physiology.",
          "He then describes the dreams. They began the same week and continued every night without exception until the year 2007. He says the early dreams were impressions only — pressure, attention, a sense of being read. He says the later dreams were structured: questions, answers, instructions he was repeatedly asked to remember.",
          "He recites approximately forty minutes of material that he says was given to him in dream. He is careful to note, twice, that he does not understand most of what he is reciting, only that he was told to repeat it accurately."
        ]
      },
      {
        heading: "What the recording does not contain",
        body: [
          "The witness does not name the patient, the facility, the senior officer, or any other person present at the examination. He gives no location more specific than \"the southern highlands.\" He does not speculate on the origin of the subject or the meaning of the dream material. He ends the recording with the phrase, \"I have done what was asked.\""
        ]
      }
    ],
    related: ["varginha-001", "varginha-006", "varginha-029"]
  },

  "varginha-005": {
    excerpt:
      "Eleven months apart. Same coordinates. Same season. Same sun angle. The buildings are gone and the trees are wrong.",
    artifacts: [
      { label: "Earlier pass", value: "April 2013" },
      { label: "Later pass", value: "March 2014" },
      { label: "Tile resolution (later)", value: "Inconsistent with surrounding tiles" },
      { label: "Provider", value: "Commercial imagery aggregator (declined to comment)" }
    ],
    sections: [
      {
        heading: "What the earlier image shows",
        body: [
          "A fenced lot of approximately two thousand square meters. Three vehicles are parked along the western edge. A covered structure occupies the eastern third of the parcel. The fence is consistent with a perimeter of recent installation; vegetation around the fence base has not yet recovered from clearing."
        ]
      },
      {
        heading: "What the later image shows",
        body: [
          "The same parcel rendered as a low-resolution canopy tile inconsistent with the surrounding imagery, which is high resolution and seasonally appropriate. The fence is gone. The vehicles are gone. The covered structure is gone. The tile has been resampled in a way that an imagery analyst commissioned for the comparison described as \"cosmetic substitution, not redaction.\"",
          "The substitution is bounded almost exactly by the fence line of the earlier image. It does not extend to neighboring parcels."
        ]
      },
      {
        heading: "What the provider says",
        body: [
          "The commercial imagery aggregator declined to comment on the comparison and removed both images from public access within seventy-two hours of the comparison being published. The earlier image remains in private archives. The later image has not been reproduced anywhere we have been able to locate."
        ]
      }
    ],
    related: ["varginha-008", "varginha-014", "varginha-023"]
  },

  "varginha-006": {
    excerpt:
      "He waited until the morphine was working. He asked for the priest first. Then he asked for the recorder.",
    artifacts: [
      { label: "Witness", value: "Retired sergeant, Brazilian Army" },
      { label: "Recording date", value: "2019-11-04" },
      { label: "Runtime", value: "2 hours 03 minutes" },
      { label: "Released by", value: "Adult relative, 2023" }
    ],
    sections: [
      {
        heading: "Setting",
        body: [
          "The recording was made in a hospice room in southeastern Brazil. The witness was three days from death and aware of it. The room contained the witness, an attending priest he had requested specifically, and one adult relative operating a small consumer recorder. No other personnel were present."
        ]
      },
      {
        heading: "What he says he did",
        body: [
          "He describes participating, as part of a transfer team of seven enlisted personnel and two officers, in the movement of three subjects from a holding location to a waiting refrigerated trailer in the early hours of January 22, 1996. He is careful to specify that two of the subjects were alive at the time of transfer and one was not.",
          "He describes the live subjects as restrained, sedated, and breathing. He describes the deceased subject as already in a sealed container that had been delivered separately. He says he was instructed not to look at any of the three for longer than was necessary to complete his portion of the move and that he obeyed this instruction except for one moment, which he describes."
        ]
      },
      {
        heading: "What he asks for",
        body: [
          "Twice during the recording the witness asks the priest to confirm that the act of recording counts as confession. The priest answers each time that the witness should not concern himself with that distinction at this stage.",
          "Near the end the witness asks the relative not to release the recording for at least four years, so that no person who was present that night can be made to answer questions while he is still alive to corroborate. The relative honored that request."
        ]
      }
    ],
    related: ["varginha-008", "varginha-013", "varginha-022"]
  },

  "varginha-007": {
    excerpt:
      "Nine glass slides. One handwritten label. The auction lot was online for less than four hours.",
    artifacts: [
      { label: "Lot count", value: "9 microscope slides" },
      { label: "Label", value: "V-1 (handwritten)" },
      { label: "Date string on slides", value: "Within Varginha event window" },
      { label: "Listing duration", value: "Under 4 hours before withdrawal" }
    ],
    sections: [
      {
        heading: "How the listing was found",
        body: [
          "A pathology hobbyist in northern Europe set a saved search for estate auction listings containing the phrase \"unidentified specimen.\" The search returned the listing within two minutes of its publication on a small regional auction platform that handled medical estate sales.",
          "The hobbyist photographed the listing page and the catalog images and saved both before placing a bid. Forty minutes after his bid the listing was withdrawn by the seller and replaced with a generic glassware lot at the same lot number."
        ]
      },
      {
        heading: "What the catalog shows",
        body: [
          "Nine glass microscope slides arranged in a wooden carrier. Each slide bears a small adhesive label with the handwritten designation \"V-1\" and a six-character date string corresponding to a date within the documented Varginha event window. The slides appear to contain prepared tissue sections; resolution is too low to identify the tissue.",
          "The estate to which the slides were attributed belonged to a pathologist who had retired in the late 1990s and who had no public connection to Brazil or to the events. The pathologist's surviving family, contacted later, said they had been told the slides were \"reference materials\" and had instructed the auction house to liquidate them along with the rest of the estate."
        ]
      },
      {
        heading: "Where the slides are now",
        body: [
          "The auction house refuses to discuss the lot. The seller of the estate sale lot list does not appear to exist as named. The pathologist's family has stopped responding to inquiries. The slides themselves have not surfaced in any subsequent listing."
        ]
      }
    ],
    related: ["varginha-012", "varginha-025", "varginha-027"]
  },

  "varginha-008": {
    excerpt:
      "He flashed his lights twice. The lead sedan flashed back. He was followed for nineteen kilometers without a word said over CB.",
    artifacts: [
      { label: "Date observed", value: "1996-01-22, 04:40 local" },
      { label: "Vehicle", value: "Refrigerated semi-trailer, no markings" },
      { label: "Escort", value: "Two unmarked sedans, federal plates" },
      { label: "Distance followed", value: "19 km" }
    ],
    sections: [
      {
        heading: "The driver",
        body: [
          "An independent journalist conducted three interviews with a long-haul driver who declined to be identified and who has since stopped responding. The driver was familiar with the route and stated that he had never previously seen federal-plate escort vehicles operating without lights or markings on that stretch of highway at any hour."
        ]
      },
      {
        heading: "What he saw",
        body: [
          "He approached the convoy from behind at approximately 04:40 local time. The trailer carried no carrier name, no tractor logo, no DOT number. The two sedans, one ahead and one behind the trailer, carried federal plates and were operating without rotating beacons, without standard escort markings, and without communication on the trucker frequencies he was monitoring.",
          "When he closed the gap to the rear sedan it slowed to match his speed, the driver of that sedan signaled him with a flat hand to drop back, and he complied. He continued to follow the convoy from a distance of approximately three hundred meters for the next nineteen kilometers, at which point the convoy turned off the highway onto an unmarked service road and he continued on his route."
        ]
      },
      {
        heading: "What he could not establish",
        body: [
          "He could not see the driver of the trailer. He could not read the trailer's serial plate from his distance. He did not photograph the convoy. The convoy's destination is not known."
        ]
      }
    ],
    related: ["varginha-014", "varginha-006", "varginha-026"]
  },

  "varginha-009": {
    excerpt:
      "Eighty-three seconds on a hobbyist scanner. Two voices, one number, one phrase that has not gone away: vital signs stable.",
    artifacts: [
      { label: "Capture date", value: "1996-01-21" },
      { label: "Length", value: "00:01:23" },
      { label: "Band", value: "Regional military allocation" },
      { label: "Operator", value: "Hobbyist, identified by callsign only" }
    ],
    sections: [
      {
        heading: "How the capture happened",
        body: [
          "The hobbyist operator routinely recorded sweeps of regional military allocations as part of a personal listening log. The eighty-three second segment is part of a longer recording that contains nothing else of interest. The operator did not realize the segment was unusual until a colleague flagged it the following week."
        ]
      },
      {
        heading: "What is said",
        body: [
          "The first voice, identified internally as Speaker A, gives a clipped logistics update in standardized military phrasing. He references \"cargo one\" and \"cargo two\" as separate but linked items moving on the same route. He requests confirmation that \"vital signs\" on cargo two remain \"stable\" and asks for \"additional sedation on standby for both.\"",
          "The second voice, Speaker B, acknowledges, confirms vital signs, and says, \"sedation is staged, will advise on intervals.\" The exchange ends without sign-off."
        ]
      },
      {
        heading: "What we cannot do with it",
        body: [
          "The capture has not been independently authenticated. No corresponding entry exists in any official record of military communications for the date and band, which is itself notable but inconclusive. The operator declined to release the original tape and we are working from a digitized copy of a copy."
        ]
      }
    ],
    related: ["varginha-006", "varginha-008", "varginha-022"]
  },

  "varginha-010": {
    excerpt:
      "An eight year old patient described, unprompted, a creature she said she had seen behind the schoolyard fence. The doctor wrote in the margin: matches three other accounts this week.",
    artifacts: [
      { label: "Document", value: "Single page from intake log" },
      { label: "Patient age", value: "8" },
      { label: "Margin note", value: "matches 3 other accounts this week" },
      { label: "Patient file", value: "Not included in release" }
    ],
    sections: [
      {
        heading: "The release",
        body: [
          "The page was released in 2011 in response to a regional public records request seeking pediatric mental health intake records from January and February 1996. The page is the only one of approximately one hundred eighty pages in the release that contains any reference to the events. The associated patient file was not included in the release and has not been made available since."
        ]
      },
      {
        heading: "What the entry says",
        body: [
          "The intake note, in the pediatrician's handwriting, records that the patient described, without prompting, a small bipedal figure with red eyes that she had seen near her schoolyard fence on her walk home from school. The patient stated that the figure did not move when she stopped to look at it and that she had not told her parents because she did not want them to think she was lying.",
          "The margin note, in the same handwriting, reads: \"matches 3 other accounts this week.\" There is no further annotation."
        ]
      },
      {
        heading: "What we are still trying to find",
        body: [
          "The other three accounts the pediatrician references are not included in the release. The pediatrician retired in 2003 and has not responded to requests for clarification. The school is identifiable from the patient's address but the school's records from the period are no longer held."
        ]
      }
    ],
    related: ["varginha-021", "varginha-024", "varginha-002"]
  },

  "varginha-011": {
    excerpt:
      "Four pages. Sixty percent black. The visible fragments are enough to make a hospital exposure officer leave the room.",
    artifacts: [
      { label: "Page count", value: "4" },
      { label: "Redacted percentage (estimated)", value: "≈60%" },
      { label: "Visible phrases", value: "level three exposure; two personnel quarantined; recommend extension of cordon" },
      { label: "Signatories", value: "Fully redacted" }
    ],
    sections: [
      {
        heading: "What is visible",
        body: [
          "The header bar identifies the report as a civil defense incident filing covering a perimeter staging area. The date is 24 January 1996. The location field has been blacked out. The reporting officer's signature block at the foot of page four has been blacked out. The countersignatory block on page one has been blacked out.",
          "The visible body text is fragmentary. Three phrases recur: \"level three exposure,\" \"two personnel quarantined,\" and \"recommend extension of cordon.\" The phrase \"chemical only\" appears once and has been struck through in pen by hand before redaction."
        ]
      },
      {
        heading: "What the redactions imply",
        body: [
          "An archivist consulted on the document noted that the redaction pattern is not consistent with civil defense practice in 1996, which typically blacked out names and locations only. The redaction in this document removes verbs, modifiers, and entire incident descriptors. The archivist's view is that the document was redacted by a different agency before release."
        ]
      },
      {
        heading: "What we are not doing",
        body: [
          "We are not publishing the original document image. The fragments that are visible are sufficient to identify the staging area to anyone who was present, and we have committed to the source not to make that identification possible."
        ]
      }
    ],
    related: ["varginha-017", "varginha-027", "varginha-018"]
  },

  "varginha-012": {
    excerpt:
      "The lab letterhead was clipped before scanning. The conclusion was not. No significant alignment against any reference genome available to the analyst.",
    artifacts: [
      { label: "Sample designation", value: "VRG-A" },
      { label: "Conclusion", value: "No significant alignment to any reference genome" },
      { label: "Memo length", value: "1 page" },
      { label: "Letterhead status", value: "Removed prior to leak" }
    ],
    sections: [
      {
        heading: "Provenance of the memo",
        body: [
          "The memo was passed to an independent researcher in 2003 by a former contractor at a biotech laboratory who had been asked to perform a sequencing run on a numbered sample without being told its origin. The contractor stated that the sample had been delivered in person, in a sealed cooler, by a courier who waited for the run to complete and then left with the original material."
        ]
      },
      {
        heading: "Findings recorded in the memo",
        body: [
          "The memo confirms that the sample was biological and structurally intact, that the extraction yielded usable nucleic acid, and that the sequence reads passed standard quality controls. The alignment step against the reference databases available to the analyst at the time produced no significant matches in either nuclear or mitochondrial sequence space.",
          "The memo recommends \"external review by an institution with access to reference panels beyond ours\" and \"immediate isolation of remaining sample volume pending such review.\" The recommendation block is the only part of the memo with the analyst's initials."
        ]
      },
      {
        heading: "What happened next",
        body: [
          "The contractor states that he never received any communication about external review and that the sample was not returned to the lab. The lab itself has since changed names twice and the original analyst has moved out of the field. We have not been able to locate the original sample."
        ]
      }
    ],
    related: ["varginha-007", "varginha-025", "varginha-013"]
  },

  "varginha-013": {
    excerpt:
      "Two pages. Signed only with initials. Addressed to a director he never names. He calls them, twice, \"the bodies.\"",
    artifacts: [
      { label: "Document", value: "Resignation letter, 2 pages" },
      { label: "Signature", value: "Initials only" },
      { label: "Recipient", value: "Unnamed regional director" },
      { label: "Provenance", value: "Disputed — letter has appeared in two separate archives" }
    ],
    sections: [
      {
        heading: "Authentication status",
        body: [
          "The letter has appeared in at least two unrelated private archives, with slightly different accompanying envelopes. We have not been able to authenticate either copy. Two separate handwriting analysts asked to compare the initials against known samples have declined to make a determination on the basis that the initials alone are insufficient evidence."
        ]
      },
      {
        heading: "What the letter says",
        body: [
          "The author writes that he can no longer continue in his role because of \"what we did with the bodies\" recovered during a January 1996 operation in the southern Brazilian highlands. He references three remains. He references a coastal incineration site, which he says was selected because it would leave no recoverable trace. He does not name the site.",
          "He writes that he believed at the time that the deceased were a national security matter. He writes that he no longer believes that the deceased were the property of any nation. He writes that the families, if there are families, will never be told."
        ]
      },
      {
        heading: "What it does not establish",
        body: [
          "Even if the letter is authentic, it tells us only that one author believed three subjects had died and that their remains had been disposed of in a manner intended to be irreversible. It does not establish what the subjects were, where they came from, or who else knew."
        ]
      }
    ],
    related: ["varginha-006", "varginha-027", "varginha-022"]
  },

  "varginha-014": {
    excerpt:
      "Four engines. No flight plan. Ninety-two minutes on the ground. The terminal staff was told to stay inside.",
    artifacts: [
      { label: "Aircraft type", value: "C-130 Hercules" },
      { label: "Filed flight plan", value: "None" },
      { label: "Time on ground", value: "01:32" },
      { label: "Customs filings", value: "None" }
    ],
    sections: [
      {
        heading: "The tower log",
        body: [
          "The tower log entry is brief. It records the landing of a four-engine military transport at a regional airfield in the early evening of 23 January 1996. The aircraft did not file a flight plan, did not register a call sign, and did not respond to standard ground frequency queries. Tower staff logged it because they were required to log it."
        ]
      },
      {
        heading: "What ground crew were told",
        body: [
          "Cargo handlers and refueling staff were instructed by the airfield manager, in person, to remain inside the terminal building until the aircraft had departed. The instruction was given without explanation. The manager has since died. The handlers we have been able to contact say they obeyed the instruction without asking why and that none of them saw the cargo loaded or unloaded."
        ]
      },
      {
        heading: "What did not happen",
        body: [
          "No customs filing was submitted for the aircraft, in either direction. No fuel invoice was raised for the airfield. No noise complaint was logged with the local authority despite the late hour, which a former tower controller noted as unusual for that aircraft type. The departure direction was not recorded."
        ]
      }
    ],
    related: ["varginha-003", "varginha-008", "varginha-028"]
  },

  "varginha-015": {
    excerpt:
      "The print was mailed in 1997. The envelope had no return address. The newsroom has kept both for twenty-seven years.",
    artifacts: [
      { label: "Format", value: "Color print, 4×6 inch" },
      { label: "Postmark", value: "Regional, smudged date" },
      { label: "Return address", value: "None" },
      { label: "Independent authentication", value: "Not attempted to date" }
    ],
    sections: [
      {
        heading: "The mailing",
        body: [
          "A small regional newspaper received an unmarked envelope in April 1997 containing a single underexposed color photograph and no other contents. The envelope had no return address. The postmark indicated a regional origin but the date was smudged on receipt. The newsroom retained both the print and the envelope and has kept them in a sealed file since."
        ]
      },
      {
        heading: "What the print shows",
        body: [
          "A gloved hand, photographed at close range against a stainless steel surface, holding an oblong object approximately the size of a child's skull. The object is dark in color and bears two non-symmetric depressions that an attending photo editor described as \"ocular sockets in roughly the right places, but wrong.\" Three small protrusions arranged dorsally complete the resemblance to descriptions given by other witnesses.",
          "The glove is a standard surgical glove. The surface beneath the object is consistent with a hospital pathology table. There is no scale bar in the image and the edges of the print show consistent grain."
        ]
      },
      {
        heading: "Why it has not been authenticated",
        body: [
          "Independent authentication would require destructive sampling of the print and exposure of the original to commercial labs that the newsroom does not trust to return the material. The newsroom has stated, on the record, that it will permit authentication only by an institution that agrees in writing to retain custody of the original under sealed conditions. No institution has yet agreed to those conditions."
        ]
      }
    ],
    related: ["varginha-007", "varginha-025", "varginha-017"]
  },

  "varginha-016": {
    excerpt:
      "Eighteen cattle in two weeks. Each one drained through small circular incisions. None of them touched by anything that left a footprint.",
    artifacts: [
      { label: "Animals affected", value: "18 cattle" },
      { label: "Window", value: "21 Jan – 02 Feb 1996" },
      { label: "Properties affected", value: "4" },
      { label: "Predator activity logged", value: "None at any scene" }
    ],
    sections: [
      {
        heading: "The ledger",
        body: [
          "The ledger covers the routine veterinary practice of a single rural veterinarian serving four properties within a fifteen kilometer radius of central Varginha. The pages covering the two weeks following the events of January 20 record eighteen cattle deaths, an unusually high number for a single practice in a single fortnight."
        ]
      },
      {
        heading: "Pattern of the deaths",
        body: [
          "Each animal was found exsanguinated. The veterinarian recorded the same finding for all eighteen: complete exsanguination through small circular incisions of consistent diameter, located on the underside of the neck or, in three cases, at the inguinal fold. He noted that the incisions appeared to have been made post-mortem in five cases and ante-mortem in the remaining thirteen.",
          "He recorded the absence of predator marks on every carcass. He recorded the absence of any tracks of any species at every scene, including his own footprints when he arrived at one site within an hour of the death. The ground was wet from recent rain at three of the scenes."
        ]
      },
      {
        heading: "After the fortnight",
        body: [
          "The pattern stopped on 2 February 1996. The veterinarian's ledger continues for another sixteen years, with no comparable cluster ever occurring again on the same circuit. He retired in 2012 and the ledger was archived as part of a regional veterinary records preservation project."
        ]
      }
    ],
    related: ["varginha-024", "varginha-023", "varginha-019"]
  },

  "varginha-017": {
    excerpt:
      "02:14 in the morning. Service door. Full NBC suit. The hospital identifier in the frame has been blacked out by the source — not by us.",
    artifacts: [
      { label: "Frame timestamp", value: "02:14:07" },
      { label: "Subject", value: "Single figure, full NBC protective gear" },
      { label: "Frames in source set", value: "17 (claimed)" },
      { label: "Released to", value: "Civic transparency group, sealed conditions" }
    ],
    sections: [
      {
        heading: "Source conditions",
        body: [
          "A civic transparency group received seventeen still frames from a single source in 2009 along with written conditions limiting how the frames could be reproduced. The hospital identifier visible in the original feed was blacked out by the source before delivery; the group has honored that redaction in every reproduction."
        ]
      },
      {
        heading: "What the frame shows",
        body: [
          "A single figure in full nuclear-biological-chemical protective gear, exiting through a service door labeled with a numbered identifier. The figure carries no visible cargo and no visible identification on the suit. The timestamp matches the night that other witnesses have independently identified as the night of one of the transfers.",
          "The remaining sixteen frames in the set, which we have not seen, are described by the source as showing similar figures entering and exiting the same door across the same night. The source has not released the rest of the set."
        ]
      },
      {
        heading: "What we cannot tell you",
        body: [
          "We cannot tell you which hospital. The group that holds the frames will not tell us, and the source will not tell them. We can tell you that the door identifier visible in the frame is consistent with a hospital service entry, that the suit is consistent with civilian biocontainment equipment available in 1996, and that the frame is internally consistent with the timestamp it carries."
        ]
      }
    ],
    related: ["varginha-002", "varginha-019", "varginha-011"]
  },

  "varginha-018": {
    excerpt:
      "Single page. Subject line intact. Recipient block intact. The body asks for nuclear, biological, and chemical containment expertise on twelve hours' notice.",
    artifacts: [
      { label: "Document type", value: "Diplomatic cable" },
      { label: "Pages", value: "1" },
      { label: "Subject line", value: "Visible (verbatim withheld)" },
      { label: "Released under FOIA", value: "2015" }
    ],
    sections: [
      {
        heading: "What is on the page",
        body: [
          "The cable is a single page on standard diplomatic letterhead. The header is intact. The subject line is visible. The recipient block is visible. The body of the cable summarizes a request received from a Brazilian liaison officer, in person and outside any standing program, for short-notice access to foreign specialists in nuclear, biological, and chemical containment.",
          "The cable's drafting officer notes that the request \"is unusual in scope, is not associated with any scheduled exercise or exchange, and was conveyed orally with a request that no written record be created on either side.\" The cable itself is the written record that was created in spite of that request."
        ]
      },
      {
        heading: "What the cable does not say",
        body: [
          "The cable does not name the incident giving rise to the request. It does not name the requesting officer. It does not state whether the request was granted, declined, or transferred. It does not reference Varginha by name or by region.",
          "It does, however, carry a date stamp from within the documented Varginha event window and a routing slip indicating it was forwarded to two recipients whose offices have responsibilities consistent with NBC response."
        ]
      },
      {
        heading: "What happened on the foreign side",
        body: [
          "Subsequent FOIA filings seeking response cables, internal coordination memoranda, or after-action reports related to this request have produced no responsive records. The agency's standard response to such filings is that no responsive records were located. We have refiled three times under different scopes."
        ]
      }
    ],
    related: ["varginha-003", "varginha-014", "varginha-028"]
  },

  "varginha-019": {
    excerpt:
      "The hospital ran negative pressure on two nights only. Both nights match the dates witnesses give for the transfers. There is no procedural explanation in the maintenance log.",
    artifacts: [
      { label: "System", value: "Hospital HVAC, regional facility" },
      { label: "Window analyzed", value: "January – March 1996" },
      { label: "Pressure inversion events", value: "2" },
      { label: "Witness-stated transfer dates", value: "Both inversions match" }
    ],
    sections: [
      {
        heading: "Source of the data",
        body: [
          "The data was provided in 2005 by a maintenance contractor who had retained service records from his work at a regional hospital across the relevant period. The contractor passed away in 2014. His estate released the records on the condition that the hospital not be named publicly."
        ]
      },
      {
        heading: "What the readings show",
        body: [
          "The HVAC log shows two distinct pressure inversion events during the analysis window. In each event, a wing of the hospital was placed under negative pressure relative to the adjacent corridors for a period of between two and four hours. The two events occur on dates that match independently obtained witness statements regarding the transfer of subjects through the hospital.",
          "The contractor's working notes for both events read \"per request, not for log,\" which the contractor described in interview as a phrase he used when he was instructed to perform work without recording the reason."
        ]
      },
      {
        heading: "Why this matters",
        body: [
          "Negative pressure isolation is the standard environmental control for handling biologically hazardous material, and it is not used in routine hospital operation outside of designated isolation rooms. The two events recorded here were not in a designated isolation room. They were in a service corridor adjacent to a basement loading bay."
        ]
      }
    ],
    related: ["varginha-002", "varginha-017", "varginha-001"]
  },

  "varginha-020": {
    excerpt:
      "He arrived without an appointment. He stayed four hours. The bishop did not speak from the pulpit about anything that month.",
    artifacts: [
      { label: "Visit date", value: "1996-01-27" },
      { label: "Visitor", value: "Senior envoy (institutional affiliation withheld)" },
      { label: "Duration", value: "≈4 hours" },
      { label: "Source", value: "Diocesan secretary, identity withheld" }
    ],
    sections: [
      {
        heading: "The arrival",
        body: [
          "A former diocesan secretary, who served the regional bishopric for fifteen years and retired in 2002, gave a single recorded interview in 2014 describing an unannounced visit that took place on the morning of 27 January 1996. The visitor was identifiable by uniform and credential as a senior envoy from outside the country. He was admitted without prior appointment on the bishop's standing instruction."
        ]
      },
      {
        heading: "What the witness observed",
        body: [
          "The envoy and the bishop met in the bishop's private office for approximately four hours. The witness was instructed to hold all calls and to admit no one. She was not present for the meeting and does not know what was discussed. She does know that the envoy arrived with a single locked case and departed with the same case still locked.",
          "Following the meeting the bishop summoned his senior staff and instructed them to refrain from any public commentary on \"recent events in the region\" until further notice. The instruction was not lifted in the witness's remaining time at the diocese."
        ]
      },
      {
        heading: "What we cannot establish",
        body: [
          "We cannot establish what was discussed. We cannot establish what was in the case. We cannot establish whether the envoy's institution maintained any continuing relationship with the diocese. The bishop has died. The envoy, as named in the witness's account, cannot be reliably located in any directory we have searched."
        ]
      }
    ],
    related: ["varginha-013", "varginha-018", "varginha-029"]
  },

  "varginha-021": {
    excerpt:
      "Twenty-three drawings. Two classrooms. Same brown figure. Same three protrusions. Same red eyes.",
    artifacts: [
      { label: "Drawing count", value: "23" },
      { label: "Classrooms", value: "2 (separate)" },
      { label: "Student age range", value: "6 – 9" },
      { label: "School identifier", value: "Redacted" }
    ],
    sections: [
      {
        heading: "How the drawings were collected",
        body: [
          "A school counsellor at a primary school in the Varginha region asked two unrelated classes to draw \"something you saw or dreamed about this week\" in early March 1996, as part of a routine wellbeing exercise. She had given the same prompt for years without notable results. The drawings she received that week were, in her words, \"the only ones that ever stopped me at my desk.\""
        ]
      },
      {
        heading: "What the drawings show",
        body: [
          "Twenty-three of the drawings depict a brown bipedal figure of consistent proportion, with three protrusions on its dorsal surface and red ocular features. The proportions are sufficiently consistent across the two classes that an art teacher consulted for analysis described it as \"a single figure drawn from a single shared memory, not a copied figure.\" The classes had not seen each other's work.",
          "The remaining drawings in the two classes depict family members, pets, and weather, in the proportions one would expect from the prompt."
        ]
      },
      {
        heading: "What was done with them",
        body: [
          "The counsellor photographed each drawing before returning the originals to the children. The photographs were placed in her personal archive, where they remained until her retirement in 2008. The school identifier and the children's names were redacted by the counsellor herself before the photographs were released to a regional researcher in 2010."
        ]
      }
    ],
    related: ["varginha-010", "varginha-024", "varginha-002"]
  },

  "varginha-022": {
    excerpt:
      "Tell them it was a coati. Do not deviate. The line was open for twenty-six seconds and the order was given twice.",
    artifacts: [
      { label: "Length", value: "00:00:26" },
      { label: "Speakers", value: "Senior civil affairs official; subordinate" },
      { label: "Cover story directed", value: "Captured creature was a misidentified coati" },
      { label: "Authentication status", value: "Not independently verified" }
    ],
    sections: [
      {
        heading: "The intercept",
        body: [
          "The recording is a twenty-six second segment that surfaced as part of an unrelated leak in 2011. Its provenance is described in the accompanying summary as a domestic intelligence intercept, captured on a fixed line during the week following the events. We have not been able to confirm or rule out that provenance."
        ]
      },
      {
        heading: "What is said",
        body: [
          "The senior speaker tells the subordinate, in Portuguese, to advise local press that the captured creature was a misidentified coati that had escaped from a nearby holding facility, and to refuse all follow-up questions on the basis that the matter is closed. He repeats the instruction once. The subordinate acknowledges and the call ends.",
          "The cover story described in the call is, in fact, the cover story that subsequently appeared in regional press in the days that followed. The coati explanation has been publicly disputed by witnesses since 1996."
        ]
      },
      {
        heading: "Authentication notes",
        body: [
          "An audio engineer commissioned for review concluded that the recording is consistent with a fixed-line capture of the period and that there are no edits. The engineer was unable to authenticate the speakers' voices because no public reference recordings are available for either party."
        ]
      }
    ],
    related: ["varginha-009", "varginha-006", "varginha-026"]
  },

  "varginha-023": {
    excerpt:
      "Twenty-eight years later, the meter still climbs when you cross the same sixteen square meters.",
    artifacts: [
      { label: "Survey date", value: "2024-02-15" },
      { label: "Method", value: "Walking gamma survey, calibrated handheld" },
      { label: "Anomaly footprint", value: "≈16 m²" },
      { label: "Reading vs. background", value: "2× – 4× regional baseline" }
    ],
    sections: [
      {
        heading: "Methodology",
        body: [
          "The survey was conducted by an independent radiological consultant using a calibrated handheld gamma counter and a GPS-tagged grid pattern over the alleged primary capture site. The consultant ran two passes on the same day, four hours apart, and obtained consistent readings on both. A third pass two weeks later by a different operator with a different instrument reproduced the result within tolerance."
        ]
      },
      {
        heading: "What was found",
        body: [
          "Background gamma readings across the survey area are consistent with regional baseline at every point except a discrete oval footprint of approximately sixteen square meters. Within that footprint, readings are between two and four times the surrounding baseline, with a peak near the geometric center.",
          "The anomaly has not migrated. Comparison with an informal 2009 reading taken by a different consultant, also tagged to GPS, shows the footprint at the same location and at comparable intensity. There is no documented municipal, industrial, or medical use of the parcel during the period."
        ]
      },
      {
        heading: "What it does not prove",
        body: [
          "Persistent low-level gamma elevation can have many causes. The consultant is explicit that the survey establishes the anomaly and rules out routine explanations within the parcel; it does not establish the source. He recommends, in the report, that core sampling be performed by an institution with appropriate handling capacity. No institution has agreed."
        ]
      }
    ],
    related: ["varginha-005", "varginha-016", "varginha-030"]
  },

  "varginha-024": {
    excerpt:
      "Same date. Nine years running. Different phones, different streets, the same slow point of light.",
    artifacts: [
      { label: "Compilation runtime", value: "00:04:11" },
      { label: "Years included", value: "2015 – 2023" },
      { label: "Submitting observers", value: "23 distinct" },
      { label: "Status", value: "Open call for submissions, ongoing" }
    ],
    sections: [
      {
        heading: "Origin of the compilation",
        body: [
          "An independent observer in Varginha began collecting handheld phone footage of January 20 sky anomalies in 2015 after noticing a recurring pattern in social media posts each year. The compilation now includes footage from twenty-three distinct observers across nine consecutive years, all captured on or within a few hours of the anniversary of the original events."
        ]
      },
      {
        heading: "The pattern",
        body: [
          "Each clip depicts a low, slow-moving point of light traversing a near-identical arc above the city. The light does not strobe. It does not produce audible noise that any of the recordings have captured. Its angular velocity is consistent across years, despite being filmed by different cameras at different focal lengths from different vantage points.",
          "The compiler has overlaid the tracks of the nine years onto a single map. They are not perfectly identical, but the overlap is, in his words, \"closer than chance and closer than aircraft.\""
        ]
      },
      {
        heading: "Ongoing collection",
        body: [
          "The compiler maintains an open submission inbox each year and adds new footage as it arrives. He has invited several aviation analysts to review the compilation. None has produced a published explanation. He has been clear, on the record, that he is not making claims about origin — only about the consistency of the pattern."
        ]
      }
    ],
    related: ["varginha-005", "varginha-010", "varginha-030"]
  },

  "varginha-025": {
    excerpt:
      "The jaw does not have canines. It has a chamber behind the molars that the analyst could not name.",
    artifacts: [
      { label: "Specimen", value: "Partial mandible, fragmentary" },
      { label: "Pages", value: "3" },
      { label: "Analyst", value: "Independent forensic odontologist (identity withheld)" },
      { label: "Chain of custody", value: "Not reconstructable" }
    ],
    sections: [
      {
        heading: "How the specimen was presented",
        body: [
          "The specimen was presented to an independent forensic odontologist in 2011 by an intermediary who declined to identify the original holder. The odontologist agreed to perform a structural analysis on the basis that her name would not appear on the report and that she would never be required to handle the chain of custody question."
        ]
      },
      {
        heading: "What the report describes",
        body: [
          "A partial mandible, fragmentary at both ends, retaining a continuous run of approximately seven dental positions on the better preserved side. The dental architecture is, in the analyst's terms, \"inconsistent with any extant or fossil primate within my training, and inconsistent with any non-primate mammal I have considered for comparison.\"",
          "Specific anomalies identified include the absence of canine differentiation across the arc, a uniform tooth morphology that does not separate into incisor, canine, premolar, or molar groupings, and a posterior chamber behind the final tooth position that the analyst describes as \"open to the lingual surface and of unknown function.\""
        ]
      },
      {
        heading: "What the report does not establish",
        body: [
          "The report does not establish that the specimen is genuine. It does not establish that the specimen was recovered from any particular location. It does not establish that the specimen is from a single organism. The analyst is explicit that she examined the object as presented and that her conclusions apply to the object only."
        ]
      }
    ],
    related: ["varginha-007", "varginha-012", "varginha-013"]
  },

  "varginha-026": {
    excerpt:
      "Forty-one minutes of nothing. Three to five entries per minute on either side. The log resumes mid-call without a word said about the gap.",
    artifacts: [
      { label: "Log gap", value: "02:01 – 02:42 local, 22 Jan 1996" },
      { label: "Baseline activity", value: "3 – 5 entries per minute" },
      { label: "Gap entries", value: "0" },
      { label: "Released by", value: "Municipal records office, 2008" }
    ],
    sections: [
      {
        heading: "The release",
        body: [
          "The municipal police dispatch log was released in 2008 in response to a routine records request. The release covers the full month of January 1996. The forty-one minute gap on the night of 22 January is the only such gap in the month and is one of only a handful of comparable gaps in the surrounding twelve months."
        ]
      },
      {
        heading: "Pattern of the gap",
        body: [
          "Activity in the log immediately before the gap is at the high end of the routine baseline for the shift, with five entries in the final minute and an active vehicle pursuit logged at 02:00. The gap begins at 02:01. There are no entries, no acknowledgements, no unit check-ins, and no call sign drops for the next forty-one minutes.",
          "The log resumes at 02:42 mid-call, with a dispatcher acknowledging a unit transmission that has no logged origin. There is no continuity note explaining the gap. No equipment failure is recorded for the shift."
        ]
      },
      {
        heading: "What former dispatchers say",
        body: [
          "Three former dispatchers familiar with the system have stated, separately, that a forty-one minute gap of this kind would have required deliberate action — either a manual hold of the log or a redirection of dispatch traffic to an alternate channel. None of the three was working that shift. The dispatcher who was working that shift has not responded to requests."
        ]
      }
    ],
    related: ["varginha-008", "varginha-009", "varginha-022"]
  },

  "varginha-027": {
    excerpt:
      "The contractor wrote \"unidentified organic residue\" on the claim form. The insurer paid in full. No inspection.",
    artifacts: [
      { label: "Claimant", value: "Private cleaning contractor" },
      { label: "Substance", value: "Unidentified organic residue" },
      { label: "Worksite", value: "Identified by parcel number only" },
      { label: "Settlement", value: "Full, no inspection" }
    ],
    sections: [
      {
        heading: "How the claim surfaced",
        body: [
          "An insurance broker who handled the policy in question disclosed the existence of the claim in a 2018 statement to a regional investigator, after retiring from the firm. The claim documents themselves were obtained subsequently through an unrelated discovery process. Names of the claimant principals have been redacted in the available copies."
        ]
      },
      {
        heading: "What the claim contains",
        body: [
          "The claim is a standard commercial reimbursement filing, with one notable omission and one notable inclusion. The omission is the worksite address, which is replaced with a parcel number that maps to a municipal facility in central Varginha. The inclusion is the description of the substance requiring cleanup, which the contractor described as \"unidentified organic residue\" — a phrase that does not appear in the contractor's other filings before or after.",
          "The reimbursement requested is for specialized biohazard remediation services, including disposable PPE for a four-person crew, sealed waste containers, and decontamination of two adjacent rooms."
        ]
      },
      {
        heading: "Why the broker found it unusual",
        body: [
          "The broker stated, in his disclosure, that biohazard claims of this size were normally subject to mandatory on-site inspection by an adjuster before settlement. This claim was settled in full without inspection, on the basis of a written authorization from a senior underwriter. The senior underwriter has since died and the firm has merged twice."
        ]
      }
    ],
    related: ["varginha-011", "varginha-013", "varginha-014"]
  },

  "varginha-028": {
    excerpt:
      "Thirty-six hours after the capture, two governments held an exercise that nobody had announced and nobody published.",
    artifacts: [
      { label: "Exercise name", value: "CRESCENT FIELD (designation per schedule)" },
      { label: "Start", value: "1996-01-22, ≈36 h after primary capture" },
      { label: "Duration", value: "4 days" },
      { label: "Public listing", value: "Not present in either country's calendar" }
    ],
    sections: [
      {
        heading: "The schedule",
        body: [
          "A single page bilateral exercise schedule for CRESCENT FIELD has surfaced from a foreign archive. The schedule lists a host base within ground-transport range of Varginha, a participant roster including Brazilian and foreign units, and a four day duration commencing on 22 January 1996. There is no after-action statement attached and no published announcement preceding the exercise."
        ]
      },
      {
        heading: "What the schedule lists",
        body: [
          "The activities listed on the schedule are unusual for a hastily convened bilateral exercise. They include \"environmental sampling,\" \"specimen handling familiarization,\" and \"transport coordination, secure cargo.\" These activities do not appear on the regularly published joint exercise calendars for either country in 1995, 1996, or 1997.",
          "The schedule is unsigned, but the formatting and routing are consistent with foreign defense scheduling templates of the period."
        ]
      },
      {
        heading: "What followed",
        body: [
          "No after-action report under the CRESCENT FIELD designation has surfaced. FOIA requests for any document referencing CRESCENT FIELD by name have produced no responsive records. The base named on the schedule has confirmed, through public affairs, that no exercise of that name is recorded in their public history. They have not commented on whether one might be recorded elsewhere."
        ]
      }
    ],
    related: ["varginha-003", "varginha-014", "varginha-018"]
  },

  "varginha-029": {
    excerpt:
      "Twelve names. None of them lived to fifty. The causes do not repeat. The pattern does.",
    artifacts: [
      { label: "Names tracked", value: "12" },
      { label: "Window of deaths", value: "Within 4 years of January 1996" },
      { label: "Age threshold", value: "None reached 50" },
      { label: "Cause clustering", value: "Acute infection; single-vehicle accident; cardiac failure" }
    ],
    sections: [
      {
        heading: "How the list was built",
        body: [
          "An independent investigator has maintained, since 2007, a cross-referenced compilation of named witnesses to the Varginha events drawn from contemporaneous press, civil registry records, and witness statements made before death. The compilation tracks twelve individuals who gave on-the-record statements between January and June 1996 and who died within four years of those statements."
        ]
      },
      {
        heading: "Pattern of the deaths",
        body: [
          "None of the twelve had reached fifty years of age at the time of death. The cluster of causes recorded across the twelve consists of: four deaths attributed to acute infection of varying types; three single-vehicle accidents on rural roads; three deaths attributed to undiagnosed cardiac failure; and two deaths recorded as cause unknown after limited investigation.",
          "The investigator is careful to note in the compilation that he is not asserting causation. He is asserting that the cluster, as a cluster, is statistically anomalous against the demographic baseline for the region and the period and that no plausible non-anomalous explanation has been offered."
        ]
      },
      {
        heading: "Limitations",
        body: [
          "The compilation is based on public records and on press archives. It does not include witnesses who declined to speak publicly. The investigator believes the true number of named witnesses from the period is larger than the press archive captures, and therefore that the cluster he has identified may be a subset of a larger pattern. He continues to add entries as new records are released."
        ]
      }
    ],
    related: ["varginha-002", "varginha-004", "varginha-013"]
  },

  "varginha-030": {
    excerpt:
      "The source has not changed since 2017. The protocol has not changed since 2008. Subject V-3 is, the source maintains, still alive.",
    artifacts: [
      { label: "Source", value: "Continuing source with internal access (sealed)" },
      { label: "Subject designation", value: "V-3" },
      { label: "Last reported observation", value: "2024-04-18" },
      { label: "Supporting imagery provided", value: "None" }
    ],
    sections: [
      {
        heading: "The source",
        body: [
          "The source has been in intermittent contact with an independent investigator since 2017. The source's identity is sealed and the investigator has stated that he does not know the source's full name. Communication has been one-way and asynchronous, with messages delivered through a series of intermediaries.",
          "The source has provided three statements over the period of contact, each consistent with the others in the details that overlap, and each declining to provide imagery, documents, or third-party witnesses. The source has stated that the absence of supporting material is intentional and is the only condition under which the source will continue to communicate at all."
        ]
      },
      {
        heading: "What the source asserts",
        body: [
          "The source asserts the existence of a containment facility maintained jointly by Brazilian and allied personnel and located in the southern Brazilian highlands within ground-transport range of Varginha. The source asserts that one specimen, designated internally as V-3, has remained alive and biologically active in containment since 1996. The source further asserts that observation protocols at the facility have not changed since a procedural review concluded in 2008.",
          "The source does not describe the facility's appearance, its staffing, or its access controls. The source does not describe V-3's appearance, behavior, or condition. The source has been asked, repeatedly, to provide a single piece of independently verifiable information, and has declined each time on the grounds that doing so would compromise continuing access."
        ]
      },
      {
        heading: "Why we publish it anyway",
        body: [
          "The source's claims cannot be verified. The investigator has stated, on the record, that he believes the source is real and that the source is in a position to know what the source claims to know. He has also stated, on the record, that he cannot rule out that the source is constructed. We publish the file as the source's claims have been received, with no endorsement of their accuracy."
        ]
      }
    ],
    handlerNote:
      "If V-3 is real, V-3 has been in containment longer than most of the people reading this have been alive. If V-3 is not real, someone has spent twenty-eight years pretending V-3 is.",
    related: ["varginha-023", "varginha-024", "varginha-004"]
  }
};
