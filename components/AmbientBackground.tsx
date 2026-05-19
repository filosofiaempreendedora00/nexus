"use client";

import { motion } from "framer-motion";
import { useIsMobile } from "@/lib/use-is-mobile";

export function AmbientBackground() {
  const isMobile = useIsMobile();

  return (
    <div
      aria-hidden
      className="pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      {/* base */}
      <div className="absolute inset-0 bg-[#06070A]" />

      {/* aurora top */}
      <div
        className="absolute -top-40 left-1/2 h-[60rem] w-[60rem] -translate-x-1/2 rounded-full opacity-70"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,92,255,0.22), rgba(91,108,255,0.10) 40%, rgba(6,7,10,0) 70%)",
          filter: isMobile ? "blur(20px)" : "blur(40px)",
        }}
      />

      {/* aurora bottom-right */}
      {isMobile ? (
        <div
          className="absolute bottom-[-20rem] right-[-10rem] h-[40rem] w-[40rem] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(94,231,255,0.18), rgba(6,7,10,0) 70%)",
            filter: "blur(30px)",
          }}
        />
      ) : (
        <motion.div
          animate={{ x: [0, 30, -10, 0], y: [0, -20, 10, 0] }}
          transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[-20rem] right-[-10rem] h-[40rem] w-[40rem] rounded-full opacity-60"
          style={{
            background:
              "radial-gradient(closest-side, rgba(94,231,255,0.18), rgba(6,7,10,0) 70%)",
            filter: "blur(60px)",
            willChange: "transform",
          }}
        />
      )}

      {/* aurora left */}
      {isMobile ? (
        <div
          className="absolute bottom-[10rem] left-[-15rem] h-[36rem] w-[36rem] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,107,157,0.14), rgba(6,7,10,0) 70%)",
            filter: "blur(30px)",
          }}
        />
      ) : (
        <motion.div
          animate={{ x: [0, -20, 10, 0], y: [0, 30, -10, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-[10rem] left-[-15rem] h-[36rem] w-[36rem] rounded-full opacity-50"
          style={{
            background:
              "radial-gradient(closest-side, rgba(255,107,157,0.14), rgba(6,7,10,0) 70%)",
            filter: "blur(70px)",
            willChange: "transform",
          }}
        />
      )}

      {/* engineering grid */}
      <div
        className="absolute inset-0 bg-grid-lines"
        style={{
          backgroundSize: "56px 56px",
          maskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
          WebkitMaskImage:
            "radial-gradient(ellipse at center, black 30%, transparent 75%)",
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 40%, rgba(0,0,0,0.55) 100%)",
        }}
      />

      {/* subtle film noise — desktop only (mix-blend-mode + SVG noise = expensive on mobile) */}
      {!isMobile && <div className="noise absolute inset-0" />}
    </div>
  );
}
