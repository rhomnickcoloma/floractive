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
        <span
          className="shrink-0"
          style={{
            display: "block",
            width: "44px",
            height: "34px",
            backgroundColor: crown,
            WebkitMaskImage: "url(/images/brand/logo-b.png)",
            maskImage: "url(/images/brand/logo-b.png)",
            WebkitMaskRepeat: "no-repeat",
            maskRepeat: "no-repeat",
            WebkitMaskPosition: "center",
            maskPosition: "center",
            WebkitMaskSize: "contain",
            maskSize: "contain",
          }}
        />
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
