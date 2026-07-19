import { useEffect, useState } from 'react'
import Reveal from './Reveal.jsx'
import './MotionLab.css'

const STATUSES = [
  { label: 'Operational', variant: 'mint' },
  { label: 'Warning', variant: 'amber' },
  { label: 'Processing', variant: 'violet' },
  { label: 'Operational', variant: 'mint' },
]

function StatusCycleDemo() {
  const [i, setI] = useState(0)
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % STATUSES.length), 1800)
    return () => clearInterval(id)
  }, [])
  const current = STATUSES[i]

  return (
    <div className="demo-screen">
      <p className="demo-app-label">Email Marketing</p>
      <div className="demo-card">
        <div className="demo-card-row">
          <span>SES</span>
          <span className={`demo-badge demo-badge--${current.variant}`}>{current.label}</span>
        </div>
        <div className="demo-bars">
          {[40, 75, 55, 90, 60, 80, 45].map((h, idx) => (
            <span key={idx} className="demo-bar" style={{ height: `${h}%`, animationDelay: `${idx * 0.12}s` }} />
          ))}
        </div>
      </div>
      <div className="demo-card demo-card--small">
        <span>Delivery Rate</span>
        <span className="demo-value">99.2%</span>
      </div>
    </div>
  )
}

function ResendDemo() {
  const [state, setState] = useState('idle')

  const handleClick = () => {
    if (state !== 'idle') return
    setState('loading')
    setTimeout(() => setState('done'), 1100)
    setTimeout(() => setState('idle'), 3200)
  }

  return (
    <div className="demo-screen">
      <p className="demo-app-label">Undelivered Emails</p>
      <div className="demo-row-item">
        <div>
          <p className="demo-row-title">sarah.chen@brightpath.io</p>
          <p className="demo-row-sub">Invalid recipient address</p>
        </div>
        <button className={`demo-resend demo-resend--${state}`} onClick={handleClick}>
          {state === 'idle' && 'Resend'}
          {state === 'loading' && <span className="demo-spinner" />}
          {state === 'done' && '✓ Sent'}
        </button>
      </div>
      <div className="demo-row-item">
        <div>
          <p className="demo-row-title">m.faulkner@quotient.co</p>
          <p className="demo-row-sub">Mailbox full</p>
        </div>
        <button className="demo-resend demo-resend--idle" tabIndex={-1}>Resend</button>
      </div>
      <p className="demo-hint">Tap resend to try the micro-interaction</p>
    </div>
  )
}

export default function MotionLab() {
  return (
    <section className="section motion-lab" id="motion">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Motion &amp; interaction</span>
          <h2>Small moments, designed on purpose.</h2>
          <p>
            Interaction explorations from the Reqore Mail system — live in code here,
            not screen recordings. Tap the demo on the right.
          </p>
        </Reveal>

        <div className="motion-stage">
          <Reveal as="div" className="phone phone--left">
            <div className="phone-notch" />
            <StatusCycleDemo />
          </Reveal>

          <Reveal as="div" delay={120} className="phone phone--right">
            <div className="phone-notch" />
            <ResendDemo />
          </Reveal>

          <div className="motion-ambient" aria-hidden="true" />
        </div>
      </div>
    </section>
  )
}
