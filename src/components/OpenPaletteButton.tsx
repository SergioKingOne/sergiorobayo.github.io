"use client";

interface Props {
  hint: string;
}

export default function OpenPaletteButton({ hint }: Props) {
  return (
    <button
      type="button"
      className="kbd-chip"
      onClick={() => {
        window.dispatchEvent(new CustomEvent("palette:open"));
      }}
      aria-label="Open command palette"
    >
      <kbd>⌘</kbd>
      <kbd>K</kbd>
      <span style={{ color: "inherit", letterSpacing: "0.12em" }}>{hint}</span>
    </button>
  );
}
