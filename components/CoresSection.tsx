"use client";

import { CORES } from "@/lib/data";
import { CoreCard } from "./CoreCard";

export function CoresSection() {
  return (
    <section id="cores" className="relative mx-auto max-w-7xl px-6 py-24">
      {/* section header */}
      <div className="enter mb-12 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
        <div className="max-w-2xl">
          <div className="mb-4 flex items-center gap-3 font-mono text-[10px] uppercase tracking-[0.28em] text-white/40">
            <span className="h-px w-8 bg-white/20" />
            <span>02 · intelligence cores</span>
          </div>
          <h2 className="font-display text-[44px] font-normal leading-[1.02] tracking-[-0.02em] text-white sm:text-[56px]">
            Núcleos de <span className="italic text-white/70">inteligência</span>.
          </h2>
          <p className="mt-4 max-w-xl text-[14px] leading-relaxed text-white/50">
            Cada núcleo é um sistema autônomo operando em paralelo. Conectados ao
            cortex central, eles compõem a arquitetura distribuída da Turbo.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md">
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-mint shadow-[0_0_8px_rgba(123,255,176,0.7)]" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              8 online
            </span>
          </div>
          <span className="mx-1 h-3 w-px bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-amber" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              1 training
            </span>
          </div>
          <span className="mx-1 h-3 w-px bg-white/10" />
          <div className="flex items-center gap-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-accent-cyan" />
            <span className="font-mono text-[10px] uppercase tracking-[0.22em] text-white/60">
              1 calibrating
            </span>
          </div>
        </div>
      </div>

      {/* grid */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {CORES.map((core, i) => (
          <CoreCard key={core.id} core={core} index={i} />
        ))}
      </div>
    </section>
  );
}
