import { HeroSection } from "@/components/hero-section";
import { HowItWorksSection } from "@/components/how-it-works-section";
import { SupportSection } from "@/components/support-section";
import { StreamsSection } from "@/components/streams-section";
import { FaqSection } from "@/components/faq-section";
import { CtaSection } from "@/components/cta-section";

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <HowItWorksSection />
      <SupportSection />
      <StreamsSection />
      <FaqSection />
      <CtaSection />
    </div>
  );
}
