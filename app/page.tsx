import { AmbientBackground } from "@/components/AmbientBackground";
import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { CoresSection } from "@/components/CoresSection";
import { BundlesSection } from "@/components/BundlesSection";
import { SystemFooter } from "@/components/SystemFooter";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <TopBar />
      <Hero />
      <CoresSection />
      <BundlesSection />
      <SystemFooter />
    </main>
  );
}
