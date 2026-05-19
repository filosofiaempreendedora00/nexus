"use client";

import { useEffect, useState } from "react";

/**
 * Returns true when the viewport is at or below the given breakpoint,
 * or when the device only has a coarse pointer (touch). Used to skip
 * the heaviest animations on devices that can't afford them.
 */
export function useIsMobile(maxWidth = 768) {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mq = window.matchMedia(
      `(max-width: ${maxWidth}px), (pointer: coarse) and (max-width: 1024px)`
    );
    const update = () => setIsMobile(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [maxWidth]);

  return isMobile;
}
