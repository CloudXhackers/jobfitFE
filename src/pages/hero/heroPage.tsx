import Container from "@mui/material/Container"
import MainSection from './mainSection';
import SecondSection from "./secondSection";
import FeaturesSection from "./featuresSection";
import DemoSection from "./demoSection";
import PricingSection from "./pricingSection";
import FAQSection from "./faqSection";
import Footer from "./footer";

export default function HeroPage() {
  return (
    <Container maxWidth="xl">
      <MainSection/>
      <SecondSection/>
      <FeaturesSection/>
      <DemoSection/>
      <PricingSection/>
      <FAQSection/>
      <Footer/>
    </Container>
  )
}
