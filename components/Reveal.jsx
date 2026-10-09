"use client";

import { useEffect, useRef, useState } from "react";

/**
 * Fades and lifts content in as it scrolls into view.
 * Content stays visible without JavaScript and for anything already on screen at load.
 */
export default function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [state, setState] = useState("idle"); // idle -> hidden -> shown

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight * 0.92) return; // already visible, leave it

    setState("hidden");
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setState("shown");
          io.disconnect();
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -6% 0px" }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  const cls =
    state === "idle" ? "" : state === "hidden" ? "reveal reveal-hidden" : "reveal reveal-shown";

  return (
    <Tag
      ref={ref}
      className={`${cls} ${className}`}
      style={state === "idle" ? undefined : { transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}
