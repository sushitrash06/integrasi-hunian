import AboutUs from "./Component/About-us";
import HeroSection from "./Component/Banner-Hero";
import ContactSection from "./Component/Contact";
import ConstructionExperienceSection from "./Component/Experience";
import RoadmapSection from "./Component/RoadMap";
import LayananUtama from "./Component/Service";
import IntegrationSection from "./Component/Warannty";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <ConstructionExperienceSection />
      <LayananUtama />
      <IntegrationSection />
      <RoadmapSection/>
      <ContactSection />
    </main>
  );
}
