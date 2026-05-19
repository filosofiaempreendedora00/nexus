"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Sparkles } from "lucide-react";
import { useEffect, useState } from "react";

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
        <div className="relative flex flex-col items-center gap-1">
          <span className="font-mono text-[10px] tracking-[0.3em] text-white/50">
            CORE
          </span>
          <span className="font-display text-3xl italic text-white sm:text-4xl">
            N
          </span>
        </div>
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

function StatPill({
  label,
  value,
  accent,
  delay,
}: {
  label: string;
  value: string;
  accent?: string;
  delay: number;
}) {
  return (
    <div
      className="enter group flex flex-col gap-1 rounded-2xl border border-white/[0.06] bg-white/[0.015] px-5 py-3 backdrop-blur-md transition hover:border-white/10 hover:bg-white/[0.03]"
      style={{ animationDelay: `${delay}ms` }}
    >
      <span className="font-mono text-[10px] uppercase tracking-[0.25em] text-white/40">
        {label}
      </span>
      <div className="flex items-baseline gap-2">
        <span className="tabular text-xl font-medium text-white">{value}</span>
        {accent && (
          <span className="font-mono text-[10px] text-accent-mint">{accent}</span>
        )}
      </div>
    </div>
  );
}

export function Hero() {
  const [coords, setCoords] = useState({ x: -23.5505, y: -46.6333 });
  useEffect(() => {
    let raf = 0;
    const tick = () => {
      const lat = -23.5505 + Math.sin(Date.now() / 5000) * 0.0003;
      const lng = -46.6333 + Math.cos(Date.now() / 5000) * 0.0003;
      setCoords({ x: lat, y: lng });
      raf = requestAnimationFrame(tick);
    };
    tick();
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative mx-auto max-w-7xl px-6 pt-10 pb-24 sm:pt-16">
      {/* meta strip */}
      <div
        className="enter mb-12 flex flex-wrap items-center justify-between gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/35"
        style={{ animationDelay: "100ms" }}
      >
        <span>v4.1 · proprietary intelligence stack</span>
        <span className="hidden sm:inline">
          {coords.x.toFixed(4)}° S · {Math.abs(coords.y).toFixed(4)}° W
        </span>
        <span>build · stable · production</span>
      </div>

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

          {/* stats */}
          <div className="mt-12 grid max-w-2xl grid-cols-2 gap-3 sm:grid-cols-4">
            <StatPill label="Núcleos ativos" value="10" accent="+2" delay={750} />
            <StatPill label="Agents online" value="47" accent="live" delay={820} />
            <StatPill label="Throughput" value="2.4M" accent="ops/d" delay={890} />
            <StatPill label="Uptime" value="99.99%" delay={960} />
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
