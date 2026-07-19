import './StatusPill.css'

const variantClass = {
  mint: 'pill-mint',
  amber: 'pill-amber',
  violet: 'pill-violet',
  faint: 'pill-faint',
}

export default function StatusPill({ variant = 'mint', children, pulse = true }) {
  return (
    <span className={`status-pill ${variantClass[variant] || 'pill-mint'}`}>
      <span className={`status-dot ${pulse ? 'pulse' : ''}`} />
      {children}
    </span>
  )
}
