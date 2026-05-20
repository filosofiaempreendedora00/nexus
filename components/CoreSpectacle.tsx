"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useIsMobile } from "@/lib/use-is-mobile";

/**
 * Visual spectacle that surrounds the floating Turbo logo:
 *  - 14 ambient fireflies drifting around the core (CSS-driven, cheap)
 *  - Periodic spark bursts: 6–10 light rays shooting outward from the
 *    geometric center, fading like lightning. Random angles, lengths,
 *    colors, and timing so the loop never feels mechanical.
 *
 * Desktop only — mobile keeps the optimized minimal core.
 */

const COLORS = [
  "rgba(124,92,255,0.95)", // violet
  "rgba(94,231,255,0.95)", // cyan
  "rgba(255,255,255,0.98)", // white
  "rgba(255,107,157,0.90)", // rose
  "rgba(91,108,255,0.95)", // indigo
  "rgba(123,255,176,0.80)", // mint
];

const rnd = (min: number, max: number) => Math.random() * (max - min) + min;
const pick = <T,>(arr: readonly T[]) =>
  arr[Math.floor(Math.random() * arr.length)];

type Ray = {
  angle: number;
  length: number;
  thickness: number;
  color: string;
};

type Burst = { id: number; rays: Ray[] };

type Firefly = {
  top: number;
  left: number;
  size: number;
  color: string;
  delay: number;
  duration: number;
  dx: number;
  dy: number;
};

function makeFireflies(count: number): Firefly[] {
  return Array.from({ length: count }, () => ({
    top: rnd(8, 92),
    left: rnd(8, 92),
    size: rnd(2, 4),
    color: pick(COLORS),
    delay: rnd(0, 6),
    duration: rnd(3.6, 7.2),
    dx: rnd(-26, 26),
    dy: rnd(-26, 26),
  }));
}

function makeBurst(id: number): Burst {
  const count = 6 + Math.floor(Math.random() * 5); // 6..10
  // mostly evenly distributed around the circle with jitter, so it
  // never looks like a perfect snowflake
  const rays: Ray[] = Array.from({ length: count }, (_, i) => {
    const base = (i / count) * 360;
    return {
      angle: base + rnd(-18, 18),
      length: rnd(90, 200),
      thickness: rnd(1.4, 2.8),
      color: pick(COLORS),
    };
  });
  return { id, rays };
}

export function CoreSpectacle() {
  const isMobile = useIsMobile();
  const [mounted, setMounted] = useState(false);
  const [bursts, setBursts] = useState<Burst[]>([]);
  const idRef = useRef(0);

  // Generate fireflies once on client mount. Keeping them in state (not
  // useMemo) avoids hydration mismatches from Math.random running on the
  // server with a different value than on the client.
  const [fireflies, setFireflies] = useState<Firefly[]>([]);
  useEffect(() => {
    setMounted(true);
    if (!isMobile) setFireflies(makeFireflies(14));
  }, [isMobile]);

  // Periodic spark bursts.
  useEffect(() => {
    if (isMobile || !mounted) return;
    let timeoutId: ReturnType<typeof setTimeout>;
    const trigger = () => {
      const id = ++idRef.current;
      setBursts((prev) => [...prev, makeBurst(id)]);
      // remove burst after its animation completes
      setTimeout(() => {
        setBursts((prev) => prev.filter((b) => b.id !== id));
      }, 1400);
      // schedule the next one
      timeoutId = setTimeout(trigger, rnd(2600, 5500));
    };
    // first burst after a small delay so the hero animations settle first
    timeoutId = setTimeout(trigger, 1800);
    return () => clearTimeout(timeoutId);
  }, [isMobile, mounted]);

  if (isMobile || !mounted) return null;

  return (
    <div className="pointer-events-none absolute inset-0">
      {/* ambient fireflies */}
      {fireflies.map((f, i) => (
        <span
          key={i}
          className="firefly absolute block rounded-full"
          style={
            {
              top: `${f.top}%`,
              left: `${f.left}%`,
              width: `${f.size}px`,
              height: `${f.size}px`,
              background: f.color,
              boxShadow: `0 0 ${f.size * 3}px ${f.color}, 0 0 ${f.size * 6}px ${f.color}`,
              animationDelay: `${f.delay}s`,
              animationDuration: `${f.duration}s`,
              "--dx": `${f.dx}px`,
              "--dy": `${f.dy}px`,
            } as React.CSSProperties
          }
        />
      ))}

      {/* spark bursts emanating from the center */}
      <div className="absolute left-1/2 top-1/2 h-0 w-0">
        <AnimatePresence>
          {bursts.map((b) => (
            <SparkBurst key={b.id} rays={b.rays} />
          ))}
        </AnimatePresence>
      </div>
    </div>
  );
}

function SparkBurst({ rays }: { rays: Ray[] }) {
  return (
    <>
      {/* soft flash at the origin */}
      <motion.span
        aria-hidden
        initial={{ opacity: 0, scale: 0.4 }}
        animate={{ opacity: [0, 0.7, 0], scale: [0.4, 1.6, 2.2] }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="absolute -left-10 -top-10 h-20 w-20 rounded-full"
        style={{
          background:
            "radial-gradient(closest-side, rgba(255,255,255,0.55), rgba(124,92,255,0.18) 45%, rgba(6,7,10,0) 75%)",
          filter: "blur(2px)",
        }}
      />

      {/* rays */}
      {rays.map((r, i) => (
        <div
          key={i}
          className="absolute"
          style={{
            left: 0,
            top: 0,
            transform: `rotate(${r.angle}deg)`,
            transformOrigin: "0% 50%",
          }}
        >
          <motion.span
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: [0, 1, 0] }}
            transition={{
              duration: 0.95,
              ease: [0.22, 1, 0.36, 1],
              times: [0, 0.35, 1],
              delay: i * 0.025,
            }}
            className="block"
            style={{
              width: `${r.length}px`,
              height: `${r.thickness}px`,
              background: `linear-gradient(90deg, ${r.color} 0%, ${r.color} 40%, transparent 100%)`,
              boxShadow: `0 0 ${r.thickness * 6}px ${r.color}, 0 0 ${r.thickness * 12}px ${r.color}`,
              transformOrigin: "0% 50%",
              borderRadius: "999px",
            }}
          />
        </div>
      ))}
    </>
  );
}
