import { TimelineEntry } from "./types";

export const timelineIntro =
  "Below is the most detailed, event-by-event chronology of the entire history of Destiny: from the mythological prehistory of the universe to the latest story events of 2025–2026. After each major event, the consequences it had for the world and the subsequent story are noted separately.";

export const timeline: TimelineEntry[] = [
  {
    id: "2.1",
    era: "Cosmic Prehistory",
    title: "Prehistory: The Gardener and the Winnower",
    paragraphs: [
      "At the deepest foundation of Destiny's mythology lies a parable about two personified cosmic forces — the Gardener and the Winnower — who, across an unimaginable span of time, played a kind of game, repeatedly creating and destroying entire universes in pursuit of a single goal: to see which form of life and organization of matter would prove most perfect — the “Final Shape.”",
      "Growing weary of the same outcome repeating endlessly, the Gardener at some point broke the rules of its own game by introducing the concept of paracausality — the ability of sentient beings to alter the structure of reality through sheer will and belief, bypassing the laws of physics. It was from this decision that the Light and the Darkness, the Traveler, and the Witness's Black Fleet were later born.",
    ],
    consequences:
      "This decision by the Gardener is the very reason paracausal forces exist at all in the Destiny universe: the Light, the Darkness, the Ahamkara, the Hive, the Vex, and the Traveler itself. The Witness, antagonist of the entire saga, is a product of the very side of the conflict embodied by the Winnower — which is exactly why its ultimate goal (the “Final Shape”) is a mirror image of the original goal of the Gardener and Winnower's game.",
  },
  {
    id: "2.2",
    era: "Golden Age",
    title: "The Golden Age of Humanity",
    paragraphs: [
      "The Traveler — a colossal, seemingly lifeless white sphere — arrives in the Solar System and offers humanity a generous, seemingly selfless gift: under its unseen influence, a period of explosive technological and biological flourishing begins. Within mere decades, humans master interplanetary travel, terraform Mars, Venus, and Mercury, dramatically extend lifespans, and colonize dozens of worlds and moons across the Solar System.",
      "During this period, Clovis Bray, the Golden Age's leading research corporation, begins experiments transferring human consciousness into synthetic bodies — giving rise to the first Exo, originally created for military and research work in the system's harshest environments, particularly on Jupiter's moon Europa. At the same time, humanity's military establishes the Warmind program — a network of extremely powerful AI war machines, the most famous of which is Rasputin — intended to serve as the planet's last line of defense.",
      "It is during the Golden Age that human ships and expeditions first encounter the Vex on Venus and Mars — an ancient race of machines that had already been present in the system long before humanity.",
    ],
    consequences:
      "The Golden Age lays down literally everything the player encounters in-game: the Exo race (Cayde-6, the Sandresy, the Clovis Bray Blades), the Rasputin network and its legacy (Warmind, the 2018 expansion), the Vex presence on Venus, Mars, and Mercury (the future Black Garden and Vault of Glass), and the very technological foundation on whose ruins the Last City is later built after the Collapse.",
  },
  {
    id: "2.3",
    era: "The Collapse",
    title: "The Collapse",
    paragraphs: [
      "Centuries into this age of plenty, the Traveler's ancient enemy — the Black Fleet, led first by Nezarec and later by the Witness himself — finally catches up with it in the Solar System. The Collapse begins: humanity's interplanetary civilization crumbles almost instantly, dozens of colonies are destroyed or cut off, and the entire human population is thrown back onto Earth.",
      "In a desperate attempt to defend the system, the war AI Rasputin activates protocol ABHORRENT IMPERATIVE, trying to force the Traveler to defend itself by firing its own weapons at it. The plan fails: the Traveler does not react the way the AI calculated, and Rasputin itself ultimately goes into a protective dormant mode (protocol YUGA SUNDOWN), effectively abandoning billions of people without its protection at the most critical moment.",
      "At the last moment the Traveler turns to face the Darkness and makes its final stand: with a powerful burst of its Light it hurls the Black Fleet away from Earth, but in the process suffers critical damage and falls into a centuries-long coma, left hanging as a lifeless husk above what will later become the site of the Last City. At the moment of this final release of Light, part of the human ships and expeditions caught off guard on the system's periphery are engulfed in a so-called Kegelblitz — a paracausal explosion at the junction of Light and Darkness. Humans who survive this event are physically and spiritually transformed — giving rise to a new race, the Awoken, who will later found their own nation in the Reef.",
      "In the final instant before slipping into its coma, the Traveler releases countless small machines — Ghosts — tasked with searching the wreckage of the fallen civilization for suitable candidates and granting them a fragment of its Light. Thus the first Guardians (the Risen) are born — resurrected dead defenders who will spend centuries protecting what remains of humanity.",
    ],
    consequences:
      "The Collapse is the foundational event of the entire franchise: it explains the origin of all three playable races (Humans — survivors; the Awoken — a product of the Kegelblitz; the Exo — a race of machines with human consciousness that already existed by this point), the birth of the Guardian and Ghost institution itself, and the reason the Traveler remains silent and motionless throughout the games — it is, quite literally, unconscious all the way until the Red War in Destiny 2 (see below).",
  },
  {
    id: "2.4",
    era: "Dark Age",
    title: "The Dark Age",
    paragraphs: [
      "After the Collapse comes a period known as the Dark Age — centuries of chaos with no centralized leadership. Scattered survivors band together into gangs under the rule of local warlord-kings, waging merciless war on one another for resources and territory; as one of the City's later chroniclers put it, during this time “a thousand kings rose and fell.”",
      "It is during this period that several alien threats begin infiltrating the Solar System at once: the Fallen (Eliksni) — who had themselves survived their own catastrophe, the Whirlwind — arrive in the system searching for the Traveler, which their civilization once revered as the “Great Machine”; at the same time, the parasitic Hive race begins establishing itself on the Moon, laying the groundwork for far more devastating invasions still to come.",
    ],
    consequences:
      "The Dark Age creates a power vacuum that is later filled by the Iron Lords (see below), and at the same time explains why, even by the in-game period, Guardians already have to deal with several long-established alien threats simultaneously (the Fallen on Earth, the Hive on the Moon) — all of whom had already gained a foothold in the system centuries before the events of the first Destiny.",
  },
  {
    id: "2.5",
    era: "Late Dark Age",
    title: "The Rise of the Iron Lords and the Founding of the Last City",
    paragraphs: [
      "Toward the end of the Dark Age, a group of exceptionally strong and determined Guardians — Radegast, Timur, Perun, Jolder, Saint-14, Felwinter (himself once a warlord who willingly switched to the side of order), and others — unite under the name of the Iron Lords. They systematically overthrow the rule of the warlords, in some cases destroying not only their enemies' bodies but their Ghosts as well, to guarantee the defeat could never be undone.",
      "The Iron Lords lay the foundation of humanity's first unified settlement directly beneath the Traveler's comatose body — the future Last City — and personally withstand the legendary “Battle of Six Fronts,” repelling a simultaneous assault by six Fallen factions on the still-unfortified City.",
      "Later, having secured the peace, the Iron Lords come across a Golden Age technology recovered by the remnants of Clovis Bray — the self-replicating combat nanotechnology SIVA. Some of the Lords see it as a way to permanently protect the nascent City and humanity; their attempt to tame SIVA ends in catastrophe at the facility known as “Site 6”: the technology itself spirals out of control and kills almost all of the Iron Lords, including Felwinter, whose body is later reanimated by SIVA itself as the hostile “Relic.”",
      "Of all the Lords, only Saladin Forge survives, and years later, during the events of the first Destiny, inducts a new Guardian — the player — as “the first of a new generation” of Iron Lords, the narrative foundation of the Rise of Iron expansion (2016).",
    ],
    consequences:
      "This event explains where the Last City itself came from and why the game features the Iron Banner tournament, curated by Lord Shaxx (himself a former Iron Lord) in memory of his fallen comrades. The Lords' deaths at the hands of SIVA are the direct setup for the plot of Rise of Iron millennia later, and simultaneously demonstrate just how dangerous unattended Golden Age technology can be — a theme the saga returns to repeatedly (Rasputin, the Exo, Clovis Bray's experiments on Europa).",
  },
  {
    id: "2.6",
    era: "2014",
    title: "Destiny (2014): Awakening at the Cosmodrome and the First Threats",
    coverSlug: "destiny-1-base",
    paragraphs: [
      "The actual in-game events begin centuries after the founding of the City. A Ghost finds and revives a nameless corpse at an abandoned cosmodrome in Old Russia — and so the player becomes a new Guardian. Fighting through Fallen forces, the Guardian reaches the Last City, where the Speaker tells of the eternal threat of the Darkness and welcomes the new ally into the ranks of the Traveler's defenders.",
      "The Guardian's subsequent expeditions to Venus, Mars, and the Moon bring the first encounters with the Vex (guarding the Vault of Glass and the Black Garden) and the Hive, whose forces on the Moon are preparing a ritual to return Crota, son of Oryx, to the world of the living.",
    ],
    consequences:
      "The base campaign introduces the player to all the key enemy factions at once and establishes the Vanguard (Zavala, Ikora, Cayde-6) as the Guardians' leadership. Scouting the Vault of Glass on Venus hints at a much greater threat from the Vex, and the first skirmishes with the Hive on the Moon directly set up the following expansion.",
  },
  {
    id: "2.7",
    era: "2014",
    title: "The Dark Below: Revenge for Eris Morn",
    coverSlug: "the-dark-below",
    paragraphs: [
      "Earlier, before the main events of the game, a fireteam of Guardians led by Eris Morn made an expedition to the Moon to stop the ritual reviving Crota, son of Oryx. The expedition ended in disaster — most of the fireteam died, and Eris herself was the only one to survive and return. In The Dark Below, the Guardian, driven by a desire to avenge Eris's fallen comrades, breaks into the Ascendant Realm through Hive rituals on the Moon and kills the now-revived Crota, son of Oryx.",
    ],
    consequences:
      "Crota's death is the first truly major Guardian victory over the Hive, but it also sends an alarm to his father, Oryx, who at that moment is far outside the Solar System. The thirst for revenge over his dead son will become Oryx's central motive in The Taken King a year later. Eris Morn becomes a permanent ally of the Guardians.",
  },
  {
    id: "2.8",
    era: "2015",
    title: "House of Wolves: Skolas's Mutiny",
    coverSlug: "house-of-wolves",
    paragraphs: [
      "Skolas, the ambitious Kell of House of Wolves, leads an uprising in the Prison of Elders, held by the Reef under Queen Mara Sov, and proclaims himself “Kell of Kells” — supreme ruler of all the Fallen. Supported by Petra Venj and Variks (the sole surviving member of House of Judgment), the Guardian hunts down Skolas's barons across the system and finally defeats the mutineer himself inside the Prison of Elders.",
    ],
    consequences:
      "The expansion stabilizes the Reef's politics and introduces Trials of Osiris — a tournament PvP mode curated by the students of the legendary (at the time, exiled) Guardian-theorist Osiris, who himself would not return as a fully realized character until years later, in Destiny 2. Petra Venj and Variks remain notable allies for nearly the rest of the series.",
  },
  {
    id: "2.9",
    era: "2015",
    title: "The Taken King: Oryx's Revenge",
    coverSlug: "the-taken-king",
    paragraphs: [
      "Upon learning of his son's death, Oryx, the Taken King, brings his colossal flagship, the Dreadnought, into the Solar System, intending to wipe the Guardians from existence. He uses the power of the Darkness to “Take” — to twist and enslave — members of other hostile races (Vex, Cabal, Fallen), turning them into a dangerous new faction, the Taken. The Guardian infiltrates the Dreadnought, fights through hordes of Taken, and in the climactic battle kills Oryx himself, using power drawn from Hive artifacts.",
    ],
    consequences:
      "Oryx's death removes the single greatest Hive threat of the time, but it does not destroy the Taken entirely — scattered groups of Taken continue to appear throughout the system for many years afterward as a background threat. The Dreadnought remains in the game as a location. Most importantly for the story going forward, Oryx's throne and legacy, along with control over the Taken, ultimately pass to his far more cunning sister, Savathûn, whose true plans would not be revealed until The Witch Queen, seven years later.",
  },
  {
    id: "2.10",
    era: "2016",
    title: "Rise of Iron: SIVA Returns",
    coverSlug: "rise-of-iron",
    paragraphs: [
      "The SIVA technology, dormant since the death of the Iron Lords, unexpectedly reactivates in the Plaguelands (formerly Iron Lord territory) under the control of House of Devils, whose Archon Aksis begins “splicing” himself and his warriors with the nanotechnology, turning them into a far more dangerous threat — the Devil Splicers. The Guardian, together with the last living Iron Lord, Saladin Forge, stops Aksis and destroys the reawakened SIVA outbreak.",
    ],
    consequences:
      "The expansion fully reveals to the player the story of the Iron Lords' deaths and symbolically makes the Guardian a full heir to their legacy — it is after these events that Saladin begins hosting the Iron Banner in its present form. Rise of Iron was the final expansion of the first Destiny, closing out its story before the sequel's release.",
  },
  {
    id: "2.11",
    era: "2017",
    title: "Destiny 2 (2017): The Red War",
    coverSlug: "destiny-2-base",
    paragraphs: [
      "Some time after the victory over Oryx, the Cabal — an imperial race of giants that had barely appeared in the system before — launch a sudden and unprecedented assault on the Last City itself. The attack is led by Dominus Ghaul, commander of the Cabal's Red Legion, who shortly before had overthrown the legitimate Emperor Calus in a military coup and is obsessed with proving that he, not “unworthy” humanity, deserves the Traveler's power.",
      "Ghaul personally leads the invasion, destroys the Tower — the Vanguard's headquarters — and, most terrifying of all, encases the still-comatose Traveler in a giant energy cage, completely cutting every Guardian in the system off from the Light. Stripped of their powers and most of their arsenal, the Guardians are forced to flee the captured City; survivors, including the player, find temporary shelter at “the Farm” — an abandoned European homestead beyond the Dead Zone, led there by the ranger Suraya Hawthorne.",
      "Fighting through the forces of a new enemy formation — House of Dusk — the Guardian reaches a Traveler Shard deep within an infested forest and, upon touching the residual Light, partially restores their abilities. From this point the counteroffensive begins: the Guardian helps Zavala and deputy commander Sloane set up a resistance base on Titan, finds the missing Cayde-6 (on Nessus) and Ikora Rey (on Io), and, with the Vanguard reunited, learns of the existence of the “Almighty” — a colossal Cabal superweapon capable of destroying entire planets.",
      "In the decisive battle, the Guardian destroys the Almighty's engines, foiling Ghaul's plans, and then personally infiltrates his flagship, the Immortal. In a desperate bid to hold onto power, Ghaul injects himself with synthetic, corrupted Light and fights the Guardian — and loses. At the moment of his death, Ghaul, blinded by his own delusions of grandeur, speaks directly to the Traveler, proclaiming himself its equal — and in response, the Traveler finally awakens from its centuries-long coma, sheds its cage, and destroys Ghaul itself, unleashing a powerful pulse of Light across the entire galaxy.",
    ],
    consequences:
      "The Red War is the second most significant event of the entire saga after the Collapse itself. It brings the Traveler out of its coma for the first time since the Golden Age (though it does not fully regain consciousness until the very end of the story), while also scattering the once-unified Red Legion into numerous disparate warring factions that continue to appear as a background threat in patrols and strikes for years to come. Emperor Calus, deposed earlier by Ghaul and hiding in exile aboard the ship Leviathan all this time, arrives in the Solar System shortly after his enemy's fall and begins looking at Guardians as potential “Shadows” for his own plans — directly setting up the Curse of Osiris and Warmind expansions, and, a decade later, Lightfall.",
  },
  {
    id: "2.12",
    era: "2017",
    title: "Curse of Osiris: The Infinite Forest",
    coverSlug: "curse-of-osiris",
    paragraphs: [
      "The legendary, previously exiled Guardian-theorist Osiris returns to active duty alongside the player to stop the Vex, who are using a colossal simulation machine on Mercury — the Infinite Forest — to model countless versions of the future in search of a scenario that guarantees their victory. The Guardian and Osiris destroy the controlling Vex mind, Panoptes, temporarily halting this threat.",
    ],
    consequences:
      "The expansion partially reconciles Osiris with the Vanguard and introduces a long-running story thread around the Infinite Forest and the Vex's ability to model alternate realities.",
  },
  {
    id: "2.13",
    era: "2018",
    title: "Warmind: Rasputin Awakens",
    coverSlug: "warmind",
    paragraphs: [
      "On Mars, the Guardian, together with Ana Bray, descendant of the head of Clovis Bray, discovers a hidden BrayTech complex where the ancient Warmind Rasputin is still partially functioning. As the Guardian helps restore its defense systems, Xol, Will of the Thousands — a fragment of a Hive Worm God — awakens from beneath the planet's ice, threatening to consume all of Mars. The Guardian and Rasputin destroy Xol together.",
    ],
    consequences:
      "The event partially restores one of humanity's most important strategic AI allies, Rasputin, who remains a significant story element through Season of the Seraph and beyond. Ana Bray becomes a permanent ally.",
  },
  {
    id: "2.14",
    era: "2018",
    title: "Forsaken: The Death of Cayde-6",
    coverSlug: "forsaken",
    paragraphs: [
      "Working alone inside the Prison of Elders, Cayde-6 is ambushed and killed by Uldren Sov — Queen Mara Sov's brother, long believed dead — and his gang of mutated Fallen, the Scorn Barons, born of the Dark Ether. The enraged Guardian methodically hunts down and kills all eight Barons one by one, then tracks Uldren himself to the Dreaming City in the Reef and kills him.",
    ],
    consequences:
      "Cayde-6's death became one of the most discussed turning points in the entire series and noticeably changed the studio's approach to storytelling. The expansion also opens the Dreaming City as a new endgame location, introduces the Drifter and the Gambit mode, and launches a long redemption arc for Uldren: later, Riven's ghost, disguising herself as Mara Sov, tricks the Guardian's Ghost into making a spontaneous wish that revives Uldren in the body of a new ally — the Crow — who is only fully redeemed and revealed in The Final Shape (2024).",
  },
  {
    id: "2.15",
    era: "2019",
    title: "Shadowkeep: Nightmares on the Moon",
    coverSlug: "shadowkeep",
    paragraphs: [
      "Eris Morn discovers that deep beneath the surface of the Moon, an actual Darkness vessel — a Pyramid — is awakening, the first physically confirmed in the system since the Golden Age. The Pyramid spawns “Nightmares” — materialized projections of the Guardians' past traumas and losses. The Guardian ventures into the Scarlet Keep and other underground complexes to stop the source of the Nightmares, while the Garden of Salvation raid uncovers yet another Vex scheme trying to exploit the chaos for its own ends.",
    ],
    consequences:
      "Shadowkeep is the first direct proof that the actual Black Fleet has already arrived in the Solar System and is actively preparing for a full-scale invasion. The event directly sets up the story of Beyond Light, where the Pyramids begin acting openly throughout the system for the first time.",
  },
  {
    id: "2.16",
    era: "2020",
    title: "Beyond Light: Guardians Gain Stasis",
    coverSlug: "beyond-light",
    paragraphs: [
      "The Pyramid on the Moon and other similar vessels throughout the system activate simultaneously, marking the start of the Darkness's open invasion. On Europa, the exiled Fallen Kell Eramis allies herself with the local Pyramid and becomes the first mortal to gain Stasis — a paracausal power of the Darkness that lets its wielder freeze space and enemies — using it to unite the remnants of several Fallen Houses into a new faction, House of Salvation. The Guardian, supported by the returning Exo Stranger, travels to Europa, uncovering in the Deep Stone Crypt the true origin of the Exo race (created by Clovis Bray, not “gifted” by the Traveler as previously believed), and defeats Eramis, subsequently gaining the power of Stasis themselves.",
    ],
    consequences:
      "For the first time in the saga's history, Guardians stop being purely “children of the Light” and gain access to the power of the Darkness — a direct philosophical and gameplay foreshadowing that defeating the Witness for good will require uniting both powers. The revelation of the Exo's true origin reshapes how players and the story itself view the race. The event also confirms that the Black Fleet is now active throughout the system, not just on the Moon.",
  },
  {
    id: "2.17",
    era: "2022",
    title: "The Witch Queen: The Death of Savathûn",
    coverSlug: "the-witch-queen",
    paragraphs: [
      "It is revealed that Savathûn, the Witch Queen and sister of Oryx, has for years secretly manipulated events from within the City itself, posing as a mortal ally of the Guardians. She steals the power of the Light itself and creates her own “Lucent Brood” — Hive warriors who wield Light and possess personal Ghosts, effectively becoming a mirror image of the Guardians. The Guardian and Ikora Rey infiltrate Savathûn's Throne World within the Ascendant Realm, fight through Rhulk, Disciple of the Witness (the Vow of the Disciple raid), and ultimately kill the Witch Queen herself — though her death turns out to be part of a far longer game: Savathûn had secretly been preparing to betray the Witness and help the Guardians against him all along.",
    ],
    consequences:
      "Savathûn's death removes the second of the three original Hive gods, but more importantly, it reveals to players for the first time the true nature of the saga's central antagonist, the Witness, who has been behind every event tied to the Darkness since the Collapse itself. The expansion also introduces weapon crafting. Savathûn's former Ghost, Fynch, and her Worm, Immaru, become new allies, and the revelation of the Witness's existence directly raises the stakes for the rest of the story through to the finale.",
  },
  {
    id: "2.18",
    era: "2023",
    title: "Lightfall: The Siege of Neomuna",
    coverSlug: "lightfall",
    paragraphs: [
      "The Witness itself arrives at Neptune in search of the mysterious Veil — a device hidden within Neomuna, a secret city where, it turns out, a previously unknown colony of humanity has spent decades hiding, protected by advanced technology and warrior Cloud Striders. The exiled Emperor Calus, who has secretly been in contact with the Witness all along and become its “Herald,” leads the Shadow Legion in a massive siege of the city, seeking to link the Veil to the captive Traveler. The Guardian, together with the Cloud Strider Nimbus and Osiris, masters a new power of the Darkness — Strand — and stops Calus in the Root of Nightmares raid, where they also encounter Nezarec, another Disciple of the Witness.",
    ],
    consequences:
      "The revelation of Neomuna changes what players understand about what happened to humanity after the Collapse — it turns out not everyone stayed in the Last City. Strand becomes the second Darkness subclass available to players. The fate of the Veil itself and its true nature remain largely open questions even after the saga's finale.",
  },
  {
    id: "2.19",
    era: "2024",
    title: "The Final Shape: The Fall of the Witness",
    coverSlug: "the-final-shape",
    paragraphs: [
      "The Witness finally breaks through the cage that has surrounded the Traveler since the Red War and enters its inner space — a strange pocket reality that mirrors the geography of Earth, known as the Pale Heart. There, the Witness intends to bring about the “Final Shape” — the ultimate, irreversible Collapse of all reality into a single, frozen “perfect” state.",
      "The Guardian gathers a fireteam of legendary allies, including Cayde-6, revived by the power of a long-standing wish (having returned as a being of pure Light thanks to a deception by Riven's ghost, who had posed as Mara Sov several seasons earlier), fights corrupted Guardians and a new Darkness enemy faction — the Dread — and, in the final battle within the Salvation's Edge raid, destroys the Witness itself, preventing it from bringing about the “Final Shape.”",
    ],
    consequences:
      "The Final Shape brings the decade-long Light and Darkness Saga, running since 2014, to a close. The event introduces the hybrid Prismatic subclass, symbolizing the reconciliation of Light and Darkness within the Guardians themselves, and finally closes the redemption arcs of Cayde-6 and the Crow. Yet good does not triumph absolutely: beyond the conflict of Light and Darkness, far older and more mysterious forces remain — the Nine — whose existence becomes the central theme of the next chapter of the story.",
  },
  {
    id: "2.20",
    era: "2025",
    title: "The Fate Saga: The Edge of Fate and Renegades (2025)",
    coverSlug: "the-edge-of-fate",
    secondaryCoverSlug: "renegades",
    paragraphs: [
      "After the Witness's fall, a new era begins — the Year of Prophecy. Guardians make direct contact with the Nine for the first time — entities that predate the Traveler itself and belong to neither the Light nor the Darkness — and travel to a new system, Kepler, where they confront a Vex threat in the Desert Perpetual raid. A new ally, Lodi, appears alongside Ikora Rey. The Renegades expansion, released with support from Lucasfilm Games, adds a storyline and aesthetic inspired by Star Wars.",
    ],
    consequences:
      "This new story cycle, envisioned as the beginning of a long post-saga era for Destiny 2, ultimately turned out to be its last: in 2026 Bungie announced the end of active development on the game, and the resolution of the Nine's arc, the fate of the Kepler system, and other open story threads reportedly remain unresolved — the cancelled expansions Shattered Cycle and The Alchemist were meant to continue this very story.",
  },
  {
    id: "2.21",
    era: "2025",
    title: "Destiny: Rising — an Alternate Timeline",
    coverSlug: "destiny-rising",
    paragraphs: [
      "Running alongside the main series, the mobile spin-off Destiny: Rising tells a separate story set in an alternate timeline, taking place in the post-Dark Age period, before the events of the original Destiny. The game's format differs from the main series: instead of creating their own Guardian, players choose one of the heroes already familiar from the main series (for example, Ikora Rey or the Iron Lord Jolder) or a fully customizable new character named Wolf.",
    ],
    consequences:
      "Rising does not affect the main series' canon, but it allows players to explore alternate versions of familiar events and characters in a far more accessible, mobile format.",
  },
];
