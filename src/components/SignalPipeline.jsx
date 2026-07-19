export default function SignalPipeline() {
  return (
    <svg
      className="signal-pipeline"
      viewBox="0 0 460 520"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Abstract diagram of a four-stage signal pipeline, pulsing as data flows through it"
    >
      <defs>
        <linearGradient id="sp-line" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.05" />
          <stop offset="50%" stopColor="var(--violet)" stopOpacity="0.55" />
          <stop offset="100%" stopColor="var(--mint)" stopOpacity="0.6" />
        </linearGradient>
        <radialGradient id="sp-glow" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="var(--violet)" stopOpacity="0.35" />
          <stop offset="100%" stopColor="var(--violet)" stopOpacity="0" />
        </radialGradient>
      </defs>

      <circle cx="230" cy="260" r="220" fill="url(#sp-glow)" className="sp-ambient" />

      {/* connecting spine */}
      <path
        d="M230 60 C 230 140, 150 140, 150 210 C 150 270, 230 270, 230 330 C 230 390, 310 390, 310 450"
        stroke="url(#sp-line)"
        strokeWidth="2"
        strokeLinecap="round"
        className="sp-spine"
      />

      {/* stage 1 — input */}
      <g className="sp-node" style={{ animationDelay: '0s' }}>
        <circle cx="230" cy="60" r="9" fill="var(--violet)" />
        <circle cx="230" cy="60" r="16" stroke="var(--violet)" strokeOpacity="0.35" />
      </g>
      <text x="230" y="28" textAnchor="middle" className="sp-label">Empathize</text>

      {/* stage 2 — process */}
      <g className="sp-node" style={{ animationDelay: '.5s' }}>
        <circle cx="150" cy="210" r="10" fill="var(--violet)" />
        <circle cx="150" cy="210" r="18" stroke="var(--violet)" strokeOpacity="0.3" />
      </g>
      <text x="150" y="178" textAnchor="middle" className="sp-label">Define</text>

      {/* stage 3 — queue */}
      <g className="sp-node" style={{ animationDelay: '1s' }}>
        <circle cx="230" cy="330" r="10" fill="var(--amber)" />
        <circle cx="230" cy="330" r="18" stroke="var(--amber)" strokeOpacity="0.3" />
      </g>
      <text x="230" y="298" textAnchor="middle" className="sp-label">Ideate</text>

      {/* stage 4 — delivered */}
      <g className="sp-node" style={{ animationDelay: '1.5s' }}>
        <circle cx="310" cy="450" r="11" fill="var(--mint)" />
        <circle cx="310" cy="450" r="20" stroke="var(--mint)" strokeOpacity="0.3" />
      </g>
      <text x="310" y="481" textAnchor="middle" className="sp-label sp-label-end">Prototype</text>

      {/* scattered fine grid dots for texture */}
      {Array.from({ length: 14 }).map((_, i) => (
        <circle
          key={i}
          cx={40 + (i % 5) * 95}
          cy={40 + Math.floor(i / 5) * 170}
          r="1.4"
          className="sp-dust"
        />
      ))}
    </svg>
  )
}
