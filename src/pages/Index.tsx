import FloatingStickers from "@/components/FloatingStickers";
import HeroSection from "@/components/HeroSection";
import StickerCards from "@/components/StickerCards";
import RouteSection from "@/components/RouteSection";
import ContactSection from "@/components/ContactSection";
import ApplySection from "@/components/ApplySection";
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
      {/* Dark overlay for readability */}
      <div className="fixed inset-0 bg-background/70 z-0" />

      <FloatingStickers />

      <div className="relative z-10">
        <HeroSection />
        <RouteSection />
        <StickerCards />
        <ApplySection />
        <ContactSection />

        {/* Footer */}
        <footer className="relative z-10 py-12 text-center font-body text-sm text-muted-foreground">
          <p>
            made with ✨ by{" "}
            <a href="https://zuup.dev" target="_blank" rel="noopener noreferrer" className="text-primary underline underline-offset-4">
              zuup.dev
            </a>
          </p>
          <p className="mt-2 text-xs">see you in the stars 🌙</p>
        </footer>
      </div>
    </div>
  );
};

export default Index;
