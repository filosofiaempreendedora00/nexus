"use client";

import { useMemo, useState } from "react";
import { Search, X, SlidersHorizontal } from "lucide-react";
import { CORES, AREAS, type Area } from "@/lib/data";
import { CoreCard } from "./CoreCard";
import { cn } from "@/lib/utils";

function normalize(s: string) {
  return s
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "") // strip combining diacritics
    .toLowerCase()
    .trim();
}

/** Match a top-level area chip against a core's area string. The area
 *  string is treated as a slash-separated list of independent tags, so
 *  "OPERAÇÃO/TECH" belongs simultaneously to OPERAÇÃO and to TECH. */
function coreInArea(coreArea: string | undefined, top: Area) {
  if (!coreArea) return false;
  return coreArea.split("/").some((seg) => seg.trim() === top);
}

export function CoresSection() {
  const [query, setQuery] = useState("");
  const [active, setActive] = useState<Set<Area>>(new Set());
  const q = normalize(query);

  const filtered = useMemo(() => {
    return CORES.filter((c) => {
      // text match
      if (q) {
        const haystack = normalize(
          [c.name, c.codename, c.category, c.description, c.area ?? ""].join(" ")
        );
        if (!haystack.includes(q)) return false;
      }
      // area match — empty selection = all
      if (active.size > 0) {
        const hit = Array.from(active).some((a) => coreInArea(c.area, a));
        if (!hit) return false;
      }
      return true;
    });
  }, [q, active]);

  const toggleArea = (a: Area) => {
    setActive((prev) => {
      const next = new Set(prev);
      if (next.has(a)) next.delete(a);
      else next.add(a);
      return next;
    });
  };

  const clearAreas = () => setActive(new Set());
  const showingAll = active.size === 0;

  return (
    <section id="cores" className="relative mx-auto max-w-7xl px-6 py-24">
      {/* section header */}
      <div className="enter mb-8 flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-end">
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
              10 online
            </span>
          </div>
        </div>
      </div>

      {/* search field */}
      <div
        className="enter mb-5 max-w-xl"
        style={{ animationDelay: "120ms" }}
      >
        <label
          className={[
            "group relative flex items-center gap-3 rounded-2xl border px-4 py-3 backdrop-blur-md transition-all duration-300",
            "border-white/[0.12] bg-gradient-to-b from-white/[0.085] via-white/[0.04] to-white/[0.025]",
            "shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_2px_4px_0_rgba(0,0,0,0.4),0_8px_24px_-12px_rgba(0,0,0,0.5)]",
            "focus-within:border-white/[0.22] focus-within:shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12),0_0_0_4px_rgba(124,92,255,0.12),0_8px_28px_-12px_rgba(124,92,255,0.45)]",
          ].join(" ")}
        >
          <Search
            className="h-4 w-4 shrink-0 text-white/40 transition-colors group-focus-within:text-white/70"
            strokeWidth={2.2}
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar inteligência por nome, código ou camada…"
            className="w-full bg-transparent text-[14px] font-medium text-white placeholder:text-white/30 focus:outline-none"
            spellCheck={false}
            autoComplete="off"
          />
          {query ? (
            <button
              type="button"
              onClick={() => setQuery("")}
              aria-label="Limpar busca"
              className="grid h-6 w-6 shrink-0 place-items-center rounded-full border border-white/10 bg-white/[0.04] text-white/55 transition hover:border-white/20 hover:bg-white/[0.08] hover:text-white"
            >
              <X className="h-3 w-3" strokeWidth={2.4} />
            </button>
          ) : (
            <span className="hidden shrink-0 items-center gap-1 rounded-md border border-white/[0.08] bg-white/[0.02] px-1.5 py-px font-mono text-[10px] text-white/35 sm:flex">
              <span className="text-[11px] leading-none">⌘</span>K
            </span>
          )}
        </label>
      </div>

      {/* area filters */}
      <div
        className="enter mb-3 flex flex-wrap items-center gap-2"
        style={{ animationDelay: "180ms" }}
      >
        <span className="flex items-center gap-1.5 pr-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35">
          <SlidersHorizontal className="h-3 w-3" strokeWidth={2.2} />
          área
        </span>

        <button
          type="button"
          onClick={clearAreas}
          className={cn(
            "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-200",
            showingAll
              ? "border-white/[0.18] bg-white/[0.07] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08)]"
              : "border-white/[0.08] bg-white/[0.02] text-white/55 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white/80"
          )}
        >
          todas
        </button>

        {AREAS.map((a) => {
          const isActive = active.has(a);
          return (
            <button
              key={a}
              type="button"
              onClick={() => toggleArea(a)}
              className={cn(
                "rounded-full border px-3 py-1.5 font-mono text-[10px] uppercase tracking-[0.22em] transition-all duration-200",
                isActive
                  ? "border-accent-violet/45 bg-accent-violet/[0.12] text-white shadow-[inset_0_1px_0_0_rgba(255,255,255,0.08),0_0_0_3px_rgba(124,92,255,0.10)]"
                  : "border-white/[0.08] bg-white/[0.02] text-white/55 hover:border-white/[0.14] hover:bg-white/[0.04] hover:text-white/80"
              )}
            >
              {a}
            </button>
          );
        })}
      </div>

      {/* result meta */}
      <div className="enter mb-10 flex items-center gap-2 px-1 font-mono text-[10px] uppercase tracking-[0.22em] text-white/35"
        style={{ animationDelay: "240ms" }}
      >
        <span className="h-px w-4 bg-white/15" />
        <span>
          {(() => {
            const parts: string[] = [];
            parts.push(
              filtered.length === 1
                ? "1 núcleo"
                : `${filtered.length} núcleos`
            );
            if (q) parts.push(`busca · "${query.trim()}"`);
            if (active.size > 0) parts.push(`áreas · ${Array.from(active).join(", ")}`);
            return parts.join(" · ");
          })()}
        </span>
      </div>

      {/* grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((core, i) => (
            <CoreCard
              key={core.id}
              core={core}
              index={Math.min(i, 6)}
            />
          ))}
        </div>
      ) : (
        <div className="relative rounded-2xl border border-white/[0.06] bg-white/[0.015] p-10 text-center backdrop-blur-md">
          <div className="mx-auto grid h-10 w-10 place-items-center rounded-full border border-white/[0.08] bg-white/[0.03]">
            <Search className="h-4 w-4 text-white/40" strokeWidth={2.2} />
          </div>
          <p className="mt-4 font-display text-[20px] italic text-white/70">
            Nenhuma inteligência encontrada.
          </p>
          <p className="mt-1 text-[13px] text-white/40">
            Tente outro termo ou{" "}
            <button
              onClick={() => {
                setQuery("");
                clearAreas();
              }}
              className="text-white/70 underline-offset-4 hover:underline"
            >
              limpar os filtros
            </button>
            .
          </p>
        </div>
      )}
    </section>
  );
}
