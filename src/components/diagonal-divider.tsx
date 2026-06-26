const TONES = {
  cream: "#f8f6f1",
  "cream-deep": "#eeeae1",
  noir: "#17140f",
} as const;

type Tone = keyof typeof TONES;

type DiagonalDividerProps = {
  /** Color of the section above (matches its background) */
  top: Tone;
  /** Color of the section below (matches its background) */
  bottom: Tone;
  /** Reverse the slant direction */
  flip?: boolean;
};

export function DiagonalDivider({
  top,
  bottom,
  flip = false,
}: DiagonalDividerProps) {
  const polygon = flip ? "0,0 100,6 0,6" : "0,6 100,0 100,6";

  return (
    <div aria-hidden style={{ backgroundColor: TONES[top], lineHeight: 0 }}>
      <svg
        viewBox="0 0 100 6"
        preserveAspectRatio="none"
        className="block h-20 w-full sm:h-32 lg:h-48"
      >
        <polygon points={polygon} fill={TONES[bottom]} />
      </svg>
    </div>
  );
}
