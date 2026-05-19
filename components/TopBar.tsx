"use client";

import { Command, Search, Activity } from "lucide-react";
import { useEffect, useState } from "react";

function useClock() {
  const [time, setTime] = useState<string>("");
  useEffect(() => {
    const update = () => {
      const d = new Date();
      const hh = String(d.getUTCHours()).padStart(2, "0");
      const mm = String(d.getUTCMinutes()).padStart(2, "0");
      const ss = String(d.getUTCSeconds()).padStart(2, "0");
      setTime(`${hh}:${mm}:${ss} UTC`);
    };
    update();
    const id = setInterval(update, 1000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function TopBar() {
  const time = useClock();

  return (
    <header className="enter-soft sticky top-0 z-40">
      <div className="relative">
        <div className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-ink-950/90 via-ink-950/60 to-transparent backdrop-blur-xl" />
        <div className="relative mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          {/* Logo / system */}
          <div className="flex items-center gap-3">
            <div className="relative h-7 w-7">
              <div className="absolute inset-0 rounded-md bg-gradient-to-br from-accent-violet to-accent-indigo opacity-90" />
              <div className="absolute inset-[3px] rounded-[5px] bg-ink-950" />
              <div className="absolute inset-0 grid place-items-center">
                <span className="text-[10px] font-bold tracking-[0.2em] text-white">
                  N
                </span>
              </div>
              <div className="absolute -inset-1 rounded-lg bg-accent-violet/20 blur-md" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-[13px] font-medium tracking-[0.18em] text-white/90">
                NEXUS
              </span>
              <span className="hidden text-[10px] font-medium tracking-[0.25em] text-white/30 sm:inline">
                / TURBO PARTNERS
              </span>
            </div>
          </div>

          {/* Center status pill */}
          <div className="hidden items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md md:flex">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inset-0 animate-ping rounded-full bg-accent-mint opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-accent-mint" />
            </span>
            <span className="text-[11px] font-medium tracking-wide text-white/70">
              All systems nominal
            </span>
            <span className="mx-2 h-3 w-px bg-white/10" />
            <Activity className="h-3 w-3 text-white/40" strokeWidth={2.2} />
            <span className="tabular text-[11px] font-medium text-white/50">
              {time || "—— : —— : ——"}
            </span>
          </div>

          {/* Right cluster */}
          <div className="flex items-center gap-2">
            <button className="group hidden items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-3 py-1.5 backdrop-blur-md transition hover:bg-white/[0.05] md:flex">
              <Search className="h-3.5 w-3.5 text-white/50" strokeWidth={2.2} />
              <span className="text-[11px] text-white/45">Search nexus…</span>
              <span className="ml-2 flex items-center gap-0.5 rounded border border-white/10 bg-white/[0.04] px-1 py-px text-[10px] font-medium text-white/40">
                <Command className="h-2.5 w-2.5" />K
              </span>
            </button>
            <div className="flex items-center gap-2 rounded-full border border-white/[0.06] bg-white/[0.02] px-2 py-1 backdrop-blur-md">
              <div className="h-6 w-6 rounded-full bg-gradient-to-br from-accent-violet via-accent-indigo to-accent-cyan" />
              <span className="hidden text-[11px] font-medium text-white/70 sm:inline">
                Turbo Partners
              </span>
            </div>
          </div>
        </div>
        <div className="mx-auto h-px max-w-7xl bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>
    </header>
  );
}
