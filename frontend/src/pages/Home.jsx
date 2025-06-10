
import BlogSection from "../components/BlogSection";
import ContactSection from "../components/ContactSection";
import ContactUsSection from "../components/ContactUsSection";
import HeroCarousel from "../components/HeroCarousel";
import OfferingSection from "../components/OfferingSection";
import PremiumClubSection from "../components/PremiumClubSection";
import SMLCLearningCafe from "../components/SMLCLearningCafe";
import WhoWeAreSection from "../components/WhoWeAreSection";

function Home() {
  return (
    <>
      <HeroCarousel></HeroCarousel>
      <WhoWeAreSection></WhoWeAreSection>
      <PremiumClubSection></PremiumClubSection>
      <SMLCLearningCafe></SMLCLearningCafe>
      <ContactUsSection></ContactUsSection>
      <OfferingSection></OfferingSection>
      <ContactSection></ContactSection>
      <BlogSection></BlogSection>
    </>
  )
}

export default Home
