/**
 * Lightweight CSS-only starfield backdrop: a few layered radial-gradient
 * "dust" fields plus a repeating tiny-dot pattern. No canvas/WebGL.
 */
export default function Starfield({ className = "" }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{
        backgroundImage:
          "radial-gradient(1px 1px at 20% 30%, rgba(255,255,255,0.9) 0, transparent 60%)," +
          "radial-gradient(1px 1px at 75% 15%, rgba(255,255,255,0.7) 0, transparent 60%)," +
          "radial-gradient(1.5px 1.5px at 45% 65%, rgba(255,255,255,0.8) 0, transparent 60%)," +
          "radial-gradient(1px 1px at 85% 75%, rgba(255,255,255,0.6) 0, transparent 60%)," +
          "radial-gradient(1px 1px at 10% 85%, rgba(255,255,255,0.5) 0, transparent 60%)," +
          "radial-gradient(1.5px 1.5px at 60% 40%, rgba(255,255,255,0.7) 0, transparent 60%)," +
          "radial-gradient(1px 1px at 30% 10%, rgba(255,255,255,0.6) 0, transparent 60%)," +
          "radial-gradient(2px 2px at 92% 45%, rgba(126,203,255,0.8) 0, transparent 60%)," +
          "radial-gradient(2px 2px at 5% 55%, rgba(232,220,192,0.7) 0, transparent 60%)",
        backgroundSize: "100% 100%",
        backgroundRepeat: "repeat",
        opacity: 0.8,
      }}
    >
      <div
        className="absolute inset-0 animate-twinkle"
        style={{
          backgroundImage:
            "radial-gradient(1px 1px at 15% 45%, rgba(255,255,255,0.9) 0, transparent 60%)," +
            "radial-gradient(1px 1px at 65% 25%, rgba(255,255,255,0.7) 0, transparent 60%)," +
            "radial-gradient(1px 1px at 40% 80%, rgba(255,255,255,0.6) 0, transparent 60%)," +
            "radial-gradient(1px 1px at 80% 60%, rgba(255,255,255,0.5) 0, transparent 60%)",
        }}
      />
    </div>
  );
}
