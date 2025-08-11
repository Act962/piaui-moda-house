import {
  AboutSection,
  HeroSection,
  OtherSection,
  PartnerSection,
  ScheduleSection,
} from "./sections";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <OtherSection />
      <PartnerSection />
    </>
  );
}
