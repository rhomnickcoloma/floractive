const TONES = {
  cream: "#faf7f1",
  "cream-deep": "#efe7db",
  noir: "#241c16",
} as const;

type Tone = keyof typeof TONES;

type SectionDividerProps = {
  /** Background tone of the divider band (usually the section that follows) */
  tone?: Tone;
};

/**
 * An elegant section divider: a centered crown ornament flanked by
 * hairline rules that fade out toward the edges.
 */
export function SectionDivider({ tone = "cream" }: SectionDividerProps) {
  const dark = tone === "noir";
  const rule = dark ? "rgba(204,171,139,0.55)" : "rgba(176,137,104,0.6)";
  const crown = dark ? "#ccab8b" : "#b08968";

  return (
    <div
      aria-hidden
      style={{ backgroundColor: TONES[tone] }}
      className="overflow-hidden"
    >
      <div className="mx-auto flex max-w-3xl items-center gap-6 px-6 py-14 lg:py-20">
        <span
          className="h-px flex-1"
          style={{
            backgroundImage: `linear-gradient(to right, transparent, ${rule})`,
          }}
        />
        <svg
          width="46"
          height="30"
          viewBox="0 0 64 42"
          fill="none"
          className="shrink-0"
        >
          <path
            d="M6 36 L11 15 L22 27 L32 9 L42 27 L53 15 L58 36 Z"
            fill={crown}
          />
          <rect x="8" y="37" width="48" height="2.4" rx="1.2" fill={crown} />
          <circle cx="11" cy="12" r="2.4" fill={crown} />
          <circle cx="32" cy="6" r="2.6" fill={crown} />
          <circle cx="53" cy="12" r="2.4" fill={crown} />
        </svg>
        <span
          className="h-px flex-1"
          style={{
            backgroundImage: `linear-gradient(to left, transparent, ${rule})`,
          }}
        />
      </div>
    </div>
  );
}
