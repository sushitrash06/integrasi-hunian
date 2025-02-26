import AllPackage from "./all-package/page";
import AboutUs from "./Component/About-us";
import HeroSection from "./Component/Banner-Hero";
import ContactSection from "./Component/Contact";
import SliderGallery from "./Component/Galery-Slide";
import RoadmapSection from "./Component/RoadMap";
import LayananUtama from "./Component/Service";
import IntegrationSection from "./Component/Warannty";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <AboutUs />
      <LayananUtama />
      <IntegrationSection />
      <RoadmapSection/>
      <AllPackage />
      <SliderGallery />
      <ContactSection />
    </main>
  );
}
