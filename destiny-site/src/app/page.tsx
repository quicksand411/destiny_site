import Hero from "@/components/sections/Hero";
import WhatIsDestiny from "@/components/sections/WhatIsDestiny";
import Timeline from "@/components/sections/Timeline";
import Characters from "@/components/sections/Characters";
import Classes from "@/components/sections/Classes";
import Factions from "@/components/sections/Factions";
import DeepLore from "@/components/sections/DeepLore";
import AhamkaraNine from "@/components/sections/AhamkaraNine";
import RaidsDungeons from "@/components/sections/RaidsDungeons";
import Gear from "@/components/sections/Gear";
import Gameplay from "@/components/sections/Gameplay";
import Glossary from "@/components/sections/Glossary";
import Releases from "@/components/sections/Releases";
import Soundtrack from "@/components/sections/Soundtrack";
import BehindScenes from "@/components/sections/BehindScenes";
import BungieHistory from "@/components/sections/BungieHistory";
import Reception from "@/components/sections/Reception";
import Community from "@/components/sections/Community";
import FunFacts from "@/components/sections/FunFacts";
import Conclusion from "@/components/sections/Conclusion";

export default function Home() {
  return (
    <main>
      <Hero />
      <WhatIsDestiny />
      <Timeline />
      <Characters />
      <Classes />
      <Factions />
      <DeepLore />
      <AhamkaraNine />
      <RaidsDungeons />
      <Gear />
      <Gameplay />
      <Glossary />
      <Releases />
      <Soundtrack />
      <BehindScenes />
      <BungieHistory />
      <Reception />
      <Community />
      <FunFacts />
      <Conclusion />
    </main>
  );
}
