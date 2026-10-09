import { Braces, Cpu, Database, Sparkles, Zap } from "lucide-react";

const ITEMS = [
  { Icon: Cpu, pos: "left-[2.5%] top-[30%]", size: 30, dur: "7s", delay: "0s" },
  { Icon: Zap, pos: "right-[3.5%] top-[16%]", size: 30, dur: "6s", delay: "-2s" },
  { Icon: Database, pos: "left-[44%] top-[14%]", size: 24, dur: "8s", delay: "-4s" },
  { Icon: Sparkles, pos: "right-[6%] bottom-[14%]", size: 26, dur: "7.5s", delay: "-1s" },
  { Icon: Braces, pos: "left-[6%] bottom-[16%]", size: 26, dur: "9s", delay: "-5s" },
];

/** Decorative drifting icons in the hero. Hidden on small screens. */
export default function FloatingIcons() {
  return (
    <div className="pointer-events-none absolute inset-0 hidden md:block" aria-hidden="true">
      {ITEMS.map(({ Icon, pos, size, dur, delay }) => (
        <span
          key={pos}
          className={`float absolute text-accent-soft/35 ${pos}`}
          style={{ "--dur": dur, "--delay": delay }}
        >
          <Icon size={size} strokeWidth={1.5} />
        </span>
      ))}
    </div>
  );
}
