"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";

function NexusCore() {
  return (
    <div className="enter-core relative mx-auto flex h-[280px] w-[280px] items-center justify-center sm:h-[360px] sm:w-[360px]">
      {/* outer rings */}
      {[1, 2, 3].map((i) => (
        <div
          key={i}
          className="absolute rounded-full border border-white/[0.06]"
          style={{
            width: `${i * 28 + 60}%`,
            height: `${i * 28 + 60}%`,
          }}
        />
      ))}

      {/* rotating dashed rings */}
      <motion.div
        animate={{ rotate: 360 }}
        transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
        className="absolute h-[88%] w-[88%] rounded-full border border-dashed border-white/[0.07]"
      />
      <motion.div
        animate={{ rotate: -360 }}
        transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
        className="absolute h-[68%] w-[68%] rounded-full border border-dashed border-white/[0.05]"
      />

      {/* orbital dots */}
      {[0, 1, 2, 3, 4].map((i) => {
        const angle = (i / 5) * Math.PI * 2;
        return (
          <motion.div
            key={i}
            animate={{ rotate: 360 }}
            transition={{
              duration: 24 + i * 4,
              repeat: Infinity,
              ease: "linear",
            }}
            className="absolute h-[88%] w-[88%]"
          >
            <div
              className="absolute h-1.5 w-1.5 rounded-full bg-white shadow-[0_0_12px_rgba(124,92,255,0.8)]"
              style={{
                top: "50%",
                left: "50%",
                transform: `translate(-50%, -50%) rotate(${angle}rad) translateX(50%) rotate(${-angle}rad)`,
              }}
            />
          </motion.div>
        );
      })}

      {/* inner glowing core */}
      <div className="relative grid h-[44%] w-[44%] place-items-center rounded-full">
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-accent-violet via-accent-indigo to-accent-cyan opacity-90 blur-[2px]" />
        <div className="absolute inset-[6%] rounded-full bg-ink-950" />
        <div className="absolute inset-[6%] rounded-full bg-gradient-to-br from-white/[0.06] to-transparent" />
        <motion.div
          animate={{
            boxShadow: [
              "0 0 60px 10px rgba(124,92,255,0.35)",
              "0 0 90px 18px rgba(94,231,255,0.28)",
              "0 0 60px 10px rgba(124,92,255,0.35)",
            ],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[6%] rounded-full"
        />
        <motion.div
          animate={{ y: [-7, 7, -7] }}
          transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          className="relative flex items-center justify-center"
        >
          {/* glowing halo trail — sits behind the logo and travels with it */}
          <motion.div
            aria-hidden
            animate={{
              opacity: [0.55, 0.9, 0.55],
              scale: [0.92, 1.08, 0.92],
            }}
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                "radial-gradient(closest-side, rgba(124,92,255,0.55), rgba(94,231,255,0.25) 45%, rgba(6,7,10,0) 75%)",
              filter: "blur(14px)",
            }}
          />
          <img
            src="/turbo-logo.png"
            alt="Turbo Partners"
            draggable={false}
            className="pointer-events-none h-auto w-[78%] max-w-[150px] select-none"
            style={{
              filter:
                "drop-shadow(0 0 32px rgba(124,92,255,0.75)) drop-shadow(0 0 18px rgba(94,231,255,0.55)) drop-shadow(0 0 6px rgba(255,255,255,0.55))",
            }}
          />
        </motion.div>
      </div>

      {/* radial glow */}
      <div
        aria-hidden
        className="absolute -inset-20 -z-10 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(124,92,255,0.30), rgba(6,7,10,0) 70%)",
          filter: "blur(20px)",
        }}
      />
    </div>
  );
}

export function Hero() {
  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-20 pb-24 sm:pt-28">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        {/* Left: copy */}
        <div className="relative">
          {/* eyebrow */}
          <div
            className="enter mb-6 inline-flex items-center gap-2 rounded-full border border-white/[0.08] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md"
            style={{ animationDelay: "200ms" }}
          >
            <Sparkles className="h-3 w-3 text-accent-violet" strokeWidth={2.4} />
            <span className="text-[11px] font-medium tracking-wide text-white/70">
              The Intelligence Core
            </span>
            <span className="mx-1 h-3 w-px bg-white/10" />
            <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              private · proprietary
            </span>
          </div>

          {/* headline */}
          <h1
            className="enter font-display text-balance text-[64px] font-normal leading-[0.95] tracking-[-0.025em] text-white sm:text-[88px] lg:text-[104px]"
            style={{ animationDelay: "250ms" }}
          >
            One core.
            <br />
            <span className="italic text-white/80">Infinite</span>{" "}
            <span className="shimmer-text animate-shimmer">intelligence.</span>
          </h1>

          {/* sub */}
          <p
            className="enter mt-8 max-w-xl text-pretty text-[15px] leading-relaxed text-white/55 sm:text-[16px]"
            style={{ animationDelay: "450ms" }}
          >
            NEXUS é o núcleo neural da Turbo Partners — o sistema operacional
            onde todas as inteligências, agentes e automações da empresa
            convergem em uma única arquitetura proprietária.
          </p>

          {/* CTAs */}
          <div
            className="enter mt-10 flex flex-wrap items-center gap-3"
            style={{ animationDelay: "600ms" }}
          >
            <button className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-white px-5 py-3 text-[13px] font-medium text-ink-950 transition hover:bg-white/90">
              <span className="relative z-10">Enter the core</span>
              <ArrowUpRight
                className="relative z-10 h-4 w-4 transition group-hover:rotate-45"
                strokeWidth={2.2}
              />
            </button>
            <button className="group inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 text-[13px] font-medium text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.05]">
              <span>Explore as inteligências</span>
            </button>
          </div>
        </div>

        {/* Right: visual core */}
        <div className="relative">
          <NexusCore />

          {/* floating telemetry chips */}
          <div
            className="enter absolute left-0 top-1/4 hidden rounded-xl border border-white/[0.08] bg-ink-900/70 px-3 py-2 backdrop-blur-md sm:block"
            style={{ animationDelay: "1000ms" }}
          >
            <div className="flex items-center gap-2">
              <div className="h-1.5 w-1.5 animate-pulse-soft rounded-full bg-accent-mint" />
              <span className="font-mono text-[10px] tracking-wide text-white/55">
                signal · stable
              </span>
            </div>
            <div className="tabular mt-1 font-mono text-[10px] text-white/35">
              98.7 ms · p95
            </div>
          </div>

          <div
            className="enter absolute bottom-6 right-0 hidden rounded-xl border border-white/[0.08] bg-ink-900/70 px-3 py-2 backdrop-blur-md sm:block"
            style={{ animationDelay: "1150ms" }}
          >
            <div className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
              cortex sync
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((i) => (
                <motion.span
                  key={i}
                  animate={{ opacity: [0.2, 1, 0.2] }}
                  transition={{
                    duration: 1.4,
                    repeat: Infinity,
                    delay: i * 0.07,
                  }}
                  className="block h-3 w-[2px] rounded-full bg-accent-cyan"
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
