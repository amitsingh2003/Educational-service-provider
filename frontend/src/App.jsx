import BlogSection from "./components/BlogSection";
import ContactSection from "./components/ContactSection";
import ContactUsSection from "./components/ContactUsSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import OfferingSection from "./components/OfferingSection";
import PremiumClubSection from "./components/PremiumClubSection";
import SMLCLearningCafe from "./components/SMLCLearningCafe";
import WhoWeAreSection from "./components/WhoWeAreSection";

function App() {
  return (
    <>
      <Header></Header>
      <HeroCarousel></HeroCarousel>
      <WhoWeAreSection></WhoWeAreSection>
      <PremiumClubSection></PremiumClubSection>
      <SMLCLearningCafe></SMLCLearningCafe>
      <ContactUsSection></ContactUsSection>
      <OfferingSection></OfferingSection>
      <ContactSection></ContactSection>
      <BlogSection></BlogSection>
      <Footer></Footer>
    </>
  );
}

export default App;
