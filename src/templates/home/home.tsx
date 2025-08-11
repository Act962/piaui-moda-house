import {
  AboutSection,
  FaqSection,
  FormSection,
  HeroSection,
  OtherSection,
  PartnerSection,
  ScheduleSection,
} from "./sections";
import TimelineSection from "./sections/timeline-section/timeline-section";

export function HomePage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ScheduleSection />
      <OtherSection />
      <PartnerSection />
      <TimelineSection />
      <FaqSection />
      <FormSection />
    </>
  );
}
