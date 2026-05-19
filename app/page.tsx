import { AmbientBackground } from "@/components/AmbientBackground";
import { Hero } from "@/components/Hero";
import { CoresSection } from "@/components/CoresSection";
import { SystemFooter } from "@/components/SystemFooter";

export default function Page() {
  return (
    <main className="relative min-h-screen overflow-x-hidden">
      <AmbientBackground />
      <Hero />
      <CoresSection />
      <SystemFooter />
    </main>
  );
}
