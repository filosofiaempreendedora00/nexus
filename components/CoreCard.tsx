"use client";

import { motion, useMotionTemplate, useMotionValue } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import type { Core } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap: Record<
  Core["accent"],
  { glow: string; ring: string; chip: string; text: string }
> = {
  violet: {
    glow: "rgba(124,92,255,0.32)",
    ring: "rgba(124,92,255,0.55)",
    chip: "bg-accent-violet/15 text-accent-violet border-accent-violet/30",
    text: "text-accent-violet",
  },
  indigo: {
    glow: "rgba(91,108,255,0.30)",
    ring: "rgba(91,108,255,0.55)",
    chip: "bg-accent-indigo/15 text-accent-indigo border-accent-indigo/30",
    text: "text-accent-indigo",
  },
  cyan: {
    glow: "rgba(94,231,255,0.28)",
    ring: "rgba(94,231,255,0.55)",
    chip: "bg-accent-cyan/15 text-accent-cyan border-accent-cyan/30",
    text: "text-accent-cyan",
  },
  mint: {
    glow: "rgba(123,255,176,0.28)",
    ring: "rgba(123,255,176,0.55)",
    chip: "bg-accent-mint/15 text-accent-mint border-accent-mint/30",
    text: "text-accent-mint",
  },
  amber: {
    glow: "rgba(255,184,107,0.28)",
    ring: "rgba(255,184,107,0.55)",
    chip: "bg-accent-amber/15 text-accent-amber border-accent-amber/30",
    text: "text-accent-amber",
  },
  rose: {
    glow: "rgba(255,107,157,0.28)",
    ring: "rgba(255,107,157,0.55)",
    chip: "bg-accent-rose/15 text-accent-rose border-accent-rose/30",
    text: "text-accent-rose",
  },
};

const statusDots: Record<Core["status"], string> = {
  online: "bg-accent-mint shadow-[0_0_8px_rgba(123,255,176,0.8)]",
  training: "bg-accent-amber shadow-[0_0_8px_rgba(255,184,107,0.8)]",
  calibrating: "bg-accent-cyan shadow-[0_0_8px_rgba(94,231,255,0.8)]",
  standby: "bg-white/40",
};

const statusLabels: Record<Core["status"], string> = {
  online: "Online",
  training: "Training",
  calibrating: "Calibrating",
  standby: "Standby",
};

export function CoreCard({ core, index }: { core: Core; index: number }) {
  const accent = accentMap[core.accent];
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const glowBg = useMotionTemplate`radial-gradient(220px circle at ${mouseX}px ${mouseY}px, ${accent.glow}, transparent 70%)`;

  return (
    <motion.a
      href={core.url ?? undefined}
      target={core.url ? "_blank" : undefined}
      rel={core.url ? "noopener noreferrer" : undefined}
      aria-disabled={!core.url}
      onClick={(e) => {
        if (!core.url) e.preventDefault();
      }}
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        mouseX.set(e.clientX - rect.left);
        mouseY.set(e.clientY - rect.top);
      }}
      style={{ animationDelay: `${200 + index * 60}ms` }}
      className={cn(
        "enter group relative block overflow-hidden rounded-2xl border border-white/[0.09] p-5 backdrop-blur-xl transition-all duration-500",
        "bg-gradient-to-b from-white/[0.055] via-white/[0.022] to-white/[0.012]",
        "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.07),0_1px_2px_0_rgba(0,0,0,0.4),0_8px_24px_-12px_rgba(0,0,0,0.6)]",
        core.url
          ? "cursor-pointer hover:border-white/[0.16] hover:-translate-y-0.5 hover:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.09),0_2px_4px_0_rgba(0,0,0,0.4),0_16px_40px_-16px_rgba(0,0,0,0.7)]"
          : "cursor-default opacity-70"
      )}
    >
      {/* spotlight on hover */}
      <motion.div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
        style={{ background: glowBg }}
      />

      {/* corner brackets */}
      <div className="pointer-events-none absolute inset-3 opacity-40">
        <div className="absolute left-0 top-0 h-3 w-3 border-l border-t border-white/20" />
        <div className="absolute right-0 top-0 h-3 w-3 border-r border-t border-white/20" />
        <div className="absolute bottom-0 left-0 h-3 w-3 border-b border-l border-white/20" />
        <div className="absolute bottom-0 right-0 h-3 w-3 border-b border-r border-white/20" />
      </div>

      {/* head row */}
      <div className="relative flex items-start justify-between">
        <div className="flex items-center gap-3">
          <div className="relative grid h-10 w-10 place-items-center rounded-xl border border-white/[0.06] bg-ink-900/60">
            <div
              aria-hidden
              className="absolute inset-0 rounded-xl opacity-60"
              style={{
                background: `radial-gradient(circle at 30% 20%, ${accent.glow}, transparent 70%)`,
              }}
            />
            <span className={cn("relative text-base", accent.text)}>
              {core.glyph}
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[15px] font-medium tracking-tight text-white">
              {core.name}
            </span>
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
              {core.codename} · {core.category}
            </span>
          </div>
        </div>

        {/* status chip */}
        <div className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-1 backdrop-blur-md">
          <span className={cn("h-1.5 w-1.5 rounded-full", statusDots[core.status])} />
          <span className="text-[10px] font-medium tracking-wide text-white/65">
            {statusLabels[core.status]}
          </span>
        </div>
      </div>

      {/* description */}
      <p className="relative mt-5 text-[13px] leading-relaxed text-white/55">
        {core.description}
      </p>

      {/* load meter */}
      <div className="relative mt-5">
        <div className="mb-1.5 flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
          <span>cognitive load</span>
          <span className="tabular text-white/65">{core.load}%</span>
        </div>
        <div className="relative h-[3px] w-full overflow-hidden rounded-full bg-white/[0.04]">
          <div
            className="h-full rounded-full"
            style={{
              width: `${core.load}%`,
              background: `linear-gradient(90deg, ${accent.ring}, ${accent.glow})`,
              boxShadow: `0 0 12px ${accent.glow}`,
            }}
          />
        </div>
      </div>

      {/* foot row */}
      <div className="relative mt-5 flex items-center justify-between border-t border-white/[0.05] pt-4">
        <div className="flex items-center gap-4 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          <span>
            <span className="text-white/65 tabular">{core.agents}</span> agents
          </span>
          <span className="h-3 w-px bg-white/10" />
          <span>v{core.version}</span>
        </div>

        {core.url ? (
          <span className="flex items-center gap-1 text-[12px] font-medium text-white/70 transition group-hover:text-white">
            Acessar
            <ArrowUpRight
              className="h-3.5 w-3.5 transition group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              strokeWidth={2.2}
            />
          </span>
        ) : (
          <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
            reserved
          </span>
        )}
      </div>
    </motion.a>
  );
}
