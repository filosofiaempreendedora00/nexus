"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, Clock, Layers } from "lucide-react";
import { BUNDLES, type Bundle } from "@/lib/data";
import { cn } from "@/lib/utils";

const accentMap: Record<
  Bundle["accent"],
  { grad: string; ring: string; soft: string }
> = {
  violet: {
    grad: "from-accent-violet/40 via-accent-indigo/20 to-transparent",
    ring: "rgba(124,92,255,0.35)",
    soft: "bg-accent-violet/10 text-accent-violet border-accent-violet/25",
  },
  cyan: {
    grad: "from-accent-cyan/35 via-accent-indigo/15 to-transparent",
    ring: "rgba(94,231,255,0.30)",
    soft: "bg-accent-cyan/10 text-accent-cyan border-accent-cyan/25",
  },
  amber: {
    grad: "from-accent-amber/35 via-accent-rose/10 to-transparent",
    ring: "rgba(255,184,107,0.30)",
    soft: "bg-accent-amber/10 text-accent-amber border-accent-amber/25",
  },
  rose: {
    grad: "from-accent-rose/35 via-accent-violet/15 to-transparent",
    ring: "rgba(255,107,157,0.30)",
    soft: "bg-accent-rose/10 text-accent-rose border-accent-rose/25",
  },
};

const statusStyles: Record<
  Bundle["status"],
  { dot: string; label: string }
> = {
  active: {
    dot: "bg-accent-mint shadow-[0_0_8px_rgba(123,255,176,0.8)]",
    label: "Active cycle",
  },
  scheduled: {
    dot: "bg-accent-cyan",
    label: "Scheduled",
  },
  draft: { dot: "bg-white/40", label: "Draft" },
};

function BundleCard({ bundle, index }: { bundle: Bundle; index: number }) {
  const accent = accentMap[bundle.accent];
  const status = statusStyles[bundle.status];

  return (
    <article
      className="enter group relative overflow-hidden rounded-3xl border border-white/[0.06] bg-white/[0.015] p-6 backdrop-blur-xl transition-all duration-500 hover:border-white/[0.14]"
      style={{ animationDelay: `${200 + index * 100}ms` }}
    >
      {/* color veil */}
      <div
        aria-hidden
        className={cn(
          "pointer-events-none absolute -right-32 -top-32 h-72 w-72 rounded-full bg-gradient-to-br blur-3xl transition-opacity duration-700",
          accent.grad,
          "opacity-50"
        )}
      />

      {/* top scan line */}
      <motion.div
        aria-hidden
        animate={{ x: ["-100%", "200%"] }}
        transition={{ duration: 6, repeat: Infinity, ease: "linear", delay: index * 0.5 }}
        className="absolute -top-px left-0 right-0 h-px"
        style={{
          background: `linear-gradient(90deg, transparent, ${accent.ring}, transparent)`,
        }}
      />

      {/* header */}
      <div className="relative flex items-start justify-between gap-3">
        <div className="flex flex-col gap-1.5">
          <div className="flex items-center gap-2">
            <span className="font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
              {bundle.scope}
            </span>
          </div>
          <h3 className="font-display text-[28px] font-normal leading-tight tracking-[-0.01em] text-white">
            {bundle.name}{" "}
            <span className="italic text-white/40">Bundle</span>
          </h3>
        </div>
        <div className="flex items-center gap-1.5 rounded-full border border-white/[0.06] bg-ink-900/60 px-2 py-1 backdrop-blur-md">
          <span className={cn("h-1.5 w-1.5 rounded-full", status.dot)} />
          <span className="text-[10px] font-medium tracking-wide text-white/70">
            {status.label}
          </span>
        </div>
      </div>

      {/* desc */}
      <p className="relative mt-4 max-w-md text-[13.5px] leading-relaxed text-white/55">
        {bundle.description}
      </p>

      {/* stack of cores */}
      <div className="relative mt-6">
        <div className="mb-2 flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          <Layers className="h-3 w-3" strokeWidth={2.2} />
          <span>operational stack</span>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {bundle.cores.map((c) => (
            <span
              key={c}
              className={cn(
                "rounded-full border px-2.5 py-1 text-[11px] font-medium backdrop-blur-md",
                accent.soft
              )}
            >
              {c}
            </span>
          ))}
        </div>
      </div>

      {/* timeline */}
      <div className="relative mt-6 rounded-2xl border border-white/[0.05] bg-white/[0.02] p-4">
        <div className="flex items-center justify-between font-mono text-[10px] uppercase tracking-[0.22em] text-white/40">
          <span className="flex items-center gap-1.5">
            <Clock className="h-3 w-3" strokeWidth={2.2} />
            <span>active window</span>
          </span>
          <span className="tabular text-white/55">
            cycle 0{bundle.cycles}
          </span>
        </div>

        <div className="mt-3 flex items-center gap-3">
          <span className="tabular font-mono text-[13px] text-white">
            {bundle.startDate}
          </span>
          <div className="relative h-px flex-1 bg-white/[0.07]">
            <div
              className="absolute inset-y-0 left-0 h-px"
              style={{
                width: "62%",
                background: `linear-gradient(90deg, ${accent.ring}, transparent)`,
              }}
            />
            <div
              className="absolute top-1/2 h-2 w-2 -translate-y-1/2 rounded-full"
              style={{
                left: "62%",
                background: accent.ring,
                boxShadow: `0 0 10px ${accent.ring}`,
              }}
            />
          </div>
          <span className="tabular font-mono text-[13px] text-white/50">
            {bundle.endDate}
          </span>
        </div>
      </div>

      {/* action */}
      <div className="relative mt-6 flex items-center justify-between">
        <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
          bundle id · {bundle.id}
        </span>
        <button className="group/btn flex items-center gap-1.5 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 text-[12px] font-medium text-white/80 backdrop-blur-md transition hover:border-white/20 hover:bg-white/[0.06] hover:text-white">
          Abrir bundle
          <ArrowUpRight
            className="h-3.5 w-3.5 transition group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5"
            strokeWidth={2.2}
          />
        </button>
      </div>
    </article>
  );
}

export function BundlesSection() {
  return (
    <section id="bundles" className="relative mx-auto max-w-7xl px-6 py-24">
      {/* header */}
      <div className="enter mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
            <span className="h-px w-8 bg-white/20" />
            <span>03 · operational bundles</span>
          </div>
          <h2 className="font-display text-[44px] font-normal leading-[1.02] tracking-[-0.02em] text-white sm:text-[56px]">
            Stacks <span className="italic text-white/70">temporárias</span>.
          </h2>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/50">
            Agrupamentos operacionais de inteligências e ferramentas, montados
            sob demanda para iniciativas com janela definida.
          </p>
        </div>

        <div className="flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.22em] text-white/45">
          <span>04 active stacks</span>
          <span className="h-3 w-px bg-white/10" />
          <span>72.4% utilization</span>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
        {BUNDLES.map((b, i) => (
          <BundleCard key={b.id} bundle={b} index={i} />
        ))}
      </div>
    </section>
  );
}
