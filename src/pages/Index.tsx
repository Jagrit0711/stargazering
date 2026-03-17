import FloatingStickers from "@/components/FloatingStickers";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import StickerCards from "@/components/StickerCards";
import RouteSection from "@/components/RouteSection";
import ExploreSection from "@/components/ExploreSection";
import SafetySection from "@/components/SafetySection";
import ContactSection from "@/components/ContactSection";
import ApplySection from "@/components/ApplySection";
import ScheduleSection from "@/components/ScheduleSection";
import FaqSection from "@/components/FaqSection";
import nightSkyBg from "@/assets/night-sky-bg.jpg";

const Index = () => {
  return (
    <div
      className="relative min-h-screen overflow-x-hidden"
      style={{
        backgroundImage: `url(${nightSkyBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center top",
        backgroundAttachment: "fixed",
      }}
    >
      <div className="fixed inset-0 sky-overlay z-0" />
      <div className="fixed inset-0 hero-focus z-0" />

      <FloatingStickers />
      <Navbar />

      <main className="relative z-10">
        <HeroSection />
        <RouteSection />
        <StickerCards />
        <ScheduleSection />
        <ExploreSection />
        <ApplySection />
        <SafetySection />
        <FaqSection />
        <ContactSection />

        <footer className="relative z-10 py-12 text-center font-body text-sm text-muted-foreground">
          <p>
            made by{" "}
            <a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
              zuup.dev
            </a>
          </p>
          <p className="mt-2 text-xs">stargazing hackathon</p>
        </footer>
      </main>
    </div>
  );
};

export default Index;
