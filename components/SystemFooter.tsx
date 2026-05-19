"use client";

import { motion } from "framer-motion";

export function SystemFooter() {
  return (
    <footer className="relative mx-auto max-w-7xl px-6 pb-16 pt-12">
      <div className="mb-10 h-px w-full bg-gradient-to-r from-transparent via-white/10 to-transparent" />

      <div className="flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-end">
        {/* signature */}
        <div className="max-w-md">
          <div className="mb-4 flex items-center gap-3">
            <div className="relative h-6 w-6">
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-accent-violet to-accent-indigo opacity-90" />
              <div className="absolute inset-[3px] rounded-[5px] bg-ink-950" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-[9px] font-bold tracking-[0.2em] text-white">
                  N
                </span>
              </div>
            </div>
            <span className="text-[12px] font-medium tracking-[0.22em] text-white/70">
              NEXUS
            </span>
            <span className="text-[10px] font-medium tracking-[0.28em] text-white/30">
              · v4.1
            </span>
          </div>
          <p className="font-display text-[18px] italic leading-snug text-white/55">
            “Onde todas as inteligências convergem.”
          </p>
          <p className="mt-4 text-[12px] text-white/35">
            Sistema operacional proprietário · Turbo Partners · 2026
          </p>
        </div>

        {/* telemetry */}
        <div className="grid w-full max-w-md grid-cols-3 gap-3 lg:w-auto">
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3 backdrop-blur-md">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
              Region
            </div>
            <div className="tabular mt-1 font-mono text-[12px] text-white/75">
              sa-east-1
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3 backdrop-blur-md">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
              Latency
            </div>
            <div className="tabular mt-1 font-mono text-[12px] text-white/75">
              98ms · p95
            </div>
          </div>
          <div className="rounded-xl border border-white/[0.06] bg-white/[0.015] p-3 backdrop-blur-md">
            <div className="font-mono text-[9px] uppercase tracking-[0.25em] text-white/35">
              Sync
            </div>
            <div className="mt-1 flex items-center gap-1.5">
              <motion.span
                animate={{ opacity: [0.4, 1, 0.4] }}
                transition={{ duration: 2, repeat: Infinity }}
                className="h-1.5 w-1.5 rounded-full bg-accent-mint shadow-[0_0_8px_rgba(123,255,176,0.8)]"
                style={{ opacity: 1 }}
              />
              <span className="font-mono text-[12px] text-white/75">live</span>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-10 flex flex-col items-start justify-between gap-3 border-t border-white/[0.05] pt-6 font-mono text-[10px] uppercase tracking-[0.25em] text-white/30 sm:flex-row sm:items-center">
        <span>internal use · authorized personnel</span>
        <span>cortex · synced · ∞</span>
      </div>
    </footer>
  );
}
