import {
  FAQSection,
  FounderSection,
  HeroSection,
  HowItWorksSection,
  QuoteBanner,
  ServicesSection,
  StatesSection,
  TestimonialsSection,
  TreatmentFocusSection,
  WhyChooseSection,
} from '../components/home'

export function HomePage() {
  return (
    <>
      <HeroSection />
      <FounderSection />
      <TreatmentFocusSection />
      <QuoteBanner />
      <ServicesSection />
      <WhyChooseSection />
      <TestimonialsSection />
      <HowItWorksSection />
      <StatesSection />
      <FAQSection />
    </>
  )
}
