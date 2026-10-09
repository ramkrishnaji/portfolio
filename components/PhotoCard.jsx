"use client";

import { useRef } from "react";

/**
 * Hero portrait: idle float + 3D tilt that follows the mouse.
 * Uses a plain <img> so the photo never depends on an image optimizer.
 */
export default function PhotoCard() {
  const tiltRef = useRef(null);
  const raf = useRef(0);

  const reset = () => {
    const el = tiltRef.current;
    if (!el) return;
    cancelAnimationFrame(raf.current);
    el.style.transform = "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)";
  };

  const onMove = (e) => {
    if (e.pointerType !== "mouse") return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const el = tiltRef.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const x = (e.clientX - r.left) / r.width - 0.5;
    const y = (e.clientY - r.top) / r.height - 0.5;
    cancelAnimationFrame(raf.current);
    raf.current = requestAnimationFrame(() => {
      el.style.transform = `perspective(900px) rotateY(${x * 14}deg) rotateX(${-y * 14}deg) scale(1.03)`;
    });
  };

  return (
    <div
      className="bob relative mx-auto w-full max-w-md"
      onPointerMove={onMove}
      onPointerLeave={reset}
    >
      <div
        ref={tiltRef}
        className="relative transition-transform duration-200 ease-out"
        style={{
          transformStyle: "preserve-3d",
          transform: "perspective(900px) rotateX(0deg) rotateY(0deg) scale(1)",
        }}
      >
        <div
          className="absolute -inset-3 rotate-2 rounded-[2rem] border border-accent/30"
          aria-hidden="true"
        />
        <div className="relative overflow-hidden rounded-[1.75rem] border border-accent/40 bg-ink-900 shadow-[0_30px_80px_-30px_rgba(99,102,241,0.7)]">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src="/profile.jpg"
            alt="Portrait of Ramkrishnaji smiling, wearing a black hoodie on a busy evening street"
            width={800}
            height={800}
            className="aspect-square h-auto w-full object-cover"
            fetchPriority="high"
            decoding="async"
          />
        </div>
        <p
          className="absolute -right-3 -top-4 rounded-lg border border-accent/40 bg-ink-900 px-3 py-1.5 font-mono text-xs text-accent-glow"
          style={{ transform: "translateZ(50px)" }}
        >
          LLM · RAG · NLP
        </p>
        <p
          className="absolute -bottom-4 left-4 inline-flex items-center gap-2 rounded-lg border border-line bg-ink-900 px-3 py-1.5 font-mono text-xs text-slate-200"
          style={{ transform: "translateZ(50px)" }}
        >
          <span className="h-2 w-2 rounded-full bg-mint" aria-hidden="true" />
          M.Tech AI &amp; DS
        </p>
      </div>
    </div>
  );
}
