type ArcDividerProps = {
  className?: string;
  tone?: "trust" | "heal" | "line";
};

const toneMap = {
  trust: "var(--color-trust)",
  heal: "var(--color-heal)",
  line: "var(--color-line)",
};

/**
 * Signature motif: a shallow arc, echoing the ellipse beneath the
 * rising figures in the Limat Care mark. Used sparingly as a section
 * seam rather than a decorative rule -- it reads as "being lifted up."
 */
export default function ArcDivider({ className = "", tone = "line" }: ArcDividerProps) {
  return (
    <div className={`w-full overflow-hidden leading-[0] ${className}`} aria-hidden="true">
      <svg
        viewBox="0 0 1200 40"
        preserveAspectRatio="none"
        className="w-full h-[28px] md:h-[40px]"
      >
        <path
          d="M0,6 Q600,42 1200,6"
          fill="none"
          stroke={toneMap[tone]}
          strokeWidth="1.5"
          vectorEffect="non-scaling-stroke"
        />
      </svg>
    </div>
  );
}
