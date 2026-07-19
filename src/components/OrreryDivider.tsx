/**
 * Decorative SVG "orrery" motif used as a section separator: concentric
 * rings with tick marks, echoing the cosmic-diagram reference imagery.
 */
export default function OrreryDivider({ className = "" }: { className?: string }) {
  return (
    <div className={`flex items-center justify-center py-10 ${className}`} aria-hidden="true">
      <svg width="180" height="60" viewBox="0 0 180 60" className="opacity-60">
        <line x1="0" y1="30" x2="60" y2="30" stroke="#7ecbff" strokeWidth="0.75" opacity="0.4" />
        <line x1="120" y1="30" x2="180" y2="30" stroke="#7ecbff" strokeWidth="0.75" opacity="0.4" />
        <circle cx="90" cy="30" r="22" stroke="#e8dcc0" strokeWidth="0.75" fill="none" opacity="0.5" />
        <circle cx="90" cy="30" r="14" stroke="#7ecbff" strokeWidth="0.75" fill="none" opacity="0.6" />
        <circle cx="90" cy="30" r="3" fill="#e8dcc0" opacity="0.8" />
        {Array.from({ length: 12 }).map((_, i) => {
          const angle = (i * Math.PI * 2) / 12;
          const x1 = 90 + Math.cos(angle) * 22;
          const y1 = 30 + Math.sin(angle) * 22;
          const x2 = 90 + Math.cos(angle) * 26;
          const y2 = 30 + Math.sin(angle) * 26;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#a9b3c2"
              strokeWidth="0.75"
              opacity="0.4"
            />
          );
        })}
      </svg>
    </div>
  );
}
