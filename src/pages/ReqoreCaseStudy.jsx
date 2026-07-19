import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import {
  Bell, Users, FileText, BookOpen, Megaphone, Box, Cloud, Plus, Trash2,
  Building2, Eye, BarChart3, History, Inbox, Search, AlertTriangle, Check, FilePlus,
} from 'lucide-react'
import { reqore } from '../data/reqoreContent.js'
import StatusPill from '../components/StatusPill.jsx'
import Reveal from '../components/Reveal.jsx'
import './ReqoreCaseStudy.css'

const ICONS = {
  bell: Bell, users: Users, 'file-text': FileText, 'book-open': BookOpen,
  megaphone: Megaphone, box: Box, cloud: Cloud, plus: Plus, trash: Trash2,
  building: Building2, eye: Eye, 'bar-chart': BarChart3, history: History,
}

const EDGE_ICONS = {
  inbox: Inbox, search: Search, 'alert-triangle': AlertTriangle, check: Check, 'file-plus': FilePlus,
}

function SectionLabel({ children }) {
  return <p className="rq-section-label">{children}</p>
}

export default function ReqoreCaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  const ds = reqore.designSystem

  return (
    <article className="rq-page">

      {/* HEADER */}
      <header className="rq-header">
        <div className="rq-grid-bg" aria-hidden="true" />
        <div className="container">
          <Reveal as="div" className="rq-back">
            <Link to="/#work">← Back to portfolio</Link>
          </Reveal>
          <Reveal as="div" delay={60} className="rq-header-top">
            <StatusPill variant="mint">{reqore.subtitle}</StatusPill>
            <span className="rq-header-kind">Case Study · Reqore Mail</span>
          </Reveal>
          <Reveal as="h1" delay={100} className="rq-title">{reqore.title}</Reveal>
          <Reveal as="p" delay={140} className="rq-desc">{reqore.description}</Reveal>
          <Reveal as="div" delay={180} className="rq-meta-row">
            {reqore.meta.map((m) => (
              <div key={m.label} className="rq-meta-item">
                <p className="rq-meta-label">{m.label}</p>
                <p className="rq-meta-value">{m.value}</p>
              </div>
            ))}
          </Reveal>
        </div>
      </header>

      <div className="container rq-body">

        {/* INTRO */}
        <Reveal as="section" className="rq-block rq-intro">
          <p>{reqore.intro}</p>
        </Reveal>

        {/* 01 PROBLEM */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>01 · The problem</SectionLabel>
          <h2 className="rq-h2">{reqore.problem.heading}</h2>
          <p className="rq-p">{reqore.problem.body}</p>
          <div className="rq-friction-grid">
            {reqore.problem.friction.map((f) => (
              <div className="rq-friction-item" key={f.area}>
                <p className="rq-friction-area">{f.area}</p>
                <p className="rq-friction-issue">{f.issue}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 02 RESEARCH */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>02 · Research</SectionLabel>
          <h2 className="rq-h2">{reqore.research.heading}</h2>
          <p className="rq-p">{reqore.research.body}</p>
          <div className="rq-pain-grid">
            {reqore.research.painPoints.map((p) => (
              <div className="rq-pain-card" key={p.title}>
                <span className="rq-pain-icon">{p.icon}</span>
                <p className="rq-pain-title">{p.title}</p>
                <p className="rq-pain-body">{p.body}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 03 GOALS */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>03 · Define</SectionLabel>
          <h2 className="rq-h2">{reqore.goals.heading}</h2>
          <p className="rq-p">{reqore.goals.body}</p>
          <ul className="rq-goals-list">
            {reqore.goals.items.map((g, i) => (
              <li key={i}>
                <span className="rq-goal-num">{String(i + 1).padStart(2, '0')}</span>
                {g}
              </li>
            ))}
          </ul>
        </Reveal>

        {/* 04 SOLUTION */}
        <Reveal as="section" className="rq-block rq-solution">
          <SectionLabel>04 · Solution</SectionLabel>
          <p className="rq-solution-text">
            {reqore.solution.main}
            <br /><br />
            <strong>{reqore.solution.bold}</strong>
          </p>
        </Reveal>

        {/* 05 MATRIX */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>05 · Scoping the MVP</SectionLabel>
          <h2 className="rq-h2">{reqore.matrix.heading}</h2>
          <p className="rq-p">{reqore.matrix.body}</p>
          <div className="rq-matrix">
            {reqore.matrix.quadrants.map((q) => (
              <div className={`rq-matrix-cell rq-matrix-${q.variant}`} key={q.label}>
                <p className="rq-matrix-label">{q.label}</p>
                <p className="rq-matrix-sub">{q.sub}</p>
                <ul>{q.items.map((it) => <li key={it}>{it}</li>)}</ul>
              </div>
            ))}
          </div>
        </Reveal>

        {/* 06 PERSONA */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>06 · Persona</SectionLabel>
          <h2 className="rq-h2">{reqore.persona.heading}</h2>
          <p className="rq-p">{reqore.persona.body}</p>
          <div className="rq-persona-card">
            <div className="rq-persona-id">
              <div className="rq-persona-avatar">
                {reqore.persona.name.split(' ').map(w => w[0]).slice(0, 2).join('')}
              </div>
              <div>
                <p className="rq-persona-name">{reqore.persona.name}</p>
                <p className="rq-persona-role">{reqore.persona.role}</p>
              </div>
            </div>
            <div className="rq-persona-grid">
              <div><p className="rq-persona-k">Background</p><p>{reqore.persona.background}</p></div>
              <div><p className="rq-persona-k">Goal</p><p>{reqore.persona.goal}</p></div>
              <div><p className="rq-persona-k">Pain points</p><p>{reqore.persona.painPoints}</p></div>
              <div><p className="rq-persona-k">Motivation</p><p>{reqore.persona.motivation}</p></div>
            </div>
          </div>
        </Reveal>

        {/* 07 IA */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>07 · Information architecture</SectionLabel>
          <h2 className="rq-h2">{reqore.ia.heading}</h2>
          <p className="rq-p">{reqore.ia.body}</p>
          <img
            src={reqore.ia.img}
            alt="Reqore Mail Information Architecture"
            className="rq-feature-img"
          />
        </Reveal>

        {/* 11 COMPETITIVE ANALYSIS */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>11 · Competitive analysis</SectionLabel>
          <h2 className="rq-h2">{reqore.competitiveAnalysis.heading}</h2>
          <p className="rq-p">{reqore.competitiveAnalysis.body}</p>
          <div className="rq-matrix-table-wrap">
            <img
              src="/assets/case-study/feature-comparison.png"
              alt="Feature Comparison Matrix"
              className="rq-matrix-image"
            />
          </div>
          <p className="rq-ds-sub">Gaps that shaped the design</p>
          <div className="rq-gap-grid">
            {reqore.competitiveAnalysis.gaps.map((g, i) => (
              <div key={g.gap} className="rq-gap-card">
                <span className="rq-gap-num">{String(i + 1).padStart(2, '0')}</span>
                <p className="rq-gap-title">{g.gap}</p>
                <p className="rq-gap-insight">{g.insight}</p>
              </div>
            ))}
          </div>
        </Reveal>
        {/* 08 DATA FLOW */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>08 · Systems mapping</SectionLabel>
          <h2 className="rq-h2">{reqore.dataFlow.heading}</h2>
          <p className="rq-p">{reqore.dataFlow.body}</p>
          <div className="rq-flow-stages">
            {reqore.dataFlow.stages.map((s, i) => (
              <div className="rq-flow-stage" key={s.code}>
                <div className="rq-flow-stage-head">
                  <span className="rq-flow-code">{s.code}</span>
                  {i < reqore.dataFlow.stages.length - 1 && (
                    <span className="rq-flow-arrow">→</span>
                  )}
                </div>
                <p className="rq-flow-name">{s.name}</p>
                <ul>{s.tracking.map((t) => <li key={t}>{t}</li>)}</ul>
              </div>
            ))}
          </div>
          <div className="rq-dlq-note">
            <span className="rq-dlq-note-tag">What is a DLQ?</span>
            <p>{reqore.dataFlow.dlqNote}</p>
          </div>
        </Reveal>

        {/* 09 FLOW DIAGRAM */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>09 · Primary user flow</SectionLabel>
          <h2 className="rq-h2">{reqore.flowDiagram.heading}</h2>
          <div className="rq-flow-chain">
            {reqore.flowDiagram.steps.map((s, i) => (
              <span key={s} className="rq-flow-chip-wrap">
                <span className="rq-flow-chip">{s}</span>
                {i < reqore.flowDiagram.steps.length - 1 && (
                  <span className="rq-flow-chip-arrow">→</span>
                )}
              </span>
            ))}
          </div>
          <p className="rq-p rq-flow-note">{reqore.flowDiagram.note}</p>
        </Reveal>

        {/* 10 SKETCHES */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>10 · Ideation</SectionLabel>
          <h2 className="rq-h2">{reqore.sketches.heading}</h2>
          <p className="rq-p">{reqore.sketches.body}</p>
          <div className="rq-sketch-grid">
            {reqore.sketches.images.map((src, i) => (
              <img
                key={i}
                src={src}
                alt={`Sketch ${i + 1}`}
                className="rq-sketch-img"
                loading="lazy"
              />
            ))}
          </div>
        </Reveal>


        {/* 12 DESIGN SYSTEM */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>12 · Design system</SectionLabel>
          <h2 className="rq-h2">{reqore.designSystem.heading}</h2>
          <p className="rq-p">{reqore.designSystem.body}</p>
          <img
            src={reqore.designSystem.img}
            alt="Reqore Design System"
            className="rq-feature-img"
          />
        </Reveal>

        {/* 13 FINAL DESIGNS */}
        <Reveal as="section" className="rq-block">
          <SectionLabel>13 · Final designs</SectionLabel>
          <h2 className="rq-h2">High-Fidelity Screens & features of MVP</h2>
          <p className="rq-p">
            20+ screens across Dashboard, Campaign Builder, DLQ monitoring and
            Invoice management. Each screen was designed around reducing complexity
            and making operational workflows easier.
          </p>

          {/* DASHBOARD + DLQ */}
          <div className="rq-system-flow">

            <div className="rq-screen-block">
              <h3>Dashboard</h3>
              {/* REPLACE YOUR_DASHBOARD_IMAGE.png with your actual file */}
              <img
                src="/assets/YOUR_DASHBOARD_IMAGE.png"
                alt="Reqore Dashboard"
                className="rq-feature-img"
              />
            </div>

            <div className="rq-connector">
              <span>↓</span>
              <p>Delivery monitoring connects with failed email recovery</p>
            </div>

            <div className="rq-screen-block">
              <h3>Dead Letter Queue Resolution</h3>
              {/* REPLACE YOUR_DLQ_IMAGE.png with your actual file */}
              <img
                src="/assets/YOUR_DLQ_IMAGE.png"
                alt="Reqore DLQ"
                className="rq-feature-img"
              />
            </div>

          </div>



          {/* INVOICES */}
          <div className="rq-invoice-section">
            <h2 className="rq-h2">Invoice Management</h2>

            <p className="rq-p">
              Designed to simplify invoice creation, client tracking, and billing
              visibility—all in one place. Click below to explore the interactive
              prototype.
            </p>

            <div className="rq-proto-stage">

              {/* Left CTA */}
              <div className="rq-proto-cta">
                <div className="rq-proto-cta-inner">

                  <a
                    href="https://demo.storylane.com/share/4jvk7abatiet"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rq-proto-play"
                    aria-label="Open Storylane Prototype"
                  >
                    <svg
                      width="22"
                      height="22"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <polygon points="5,3 19,12 5,21" />
                    </svg>
                  </a>

                  <p className="rq-proto-cta-label">
                    Play Interactive Prototype
                  </p>

                  <p className="rq-proto-cta-sub">
                    Opens in Storylane
                  </p>

                </div>
              </div>

              {/* Monitor */}
              <div className="rq-proto-monitor-wrap">

                <div className="rq-proto-monitor">

                  <div className="rq-proto-monitor-bar">
                    <span />
                    <span />
                    <span />
                  </div>

                  <div className="rq-proto-screen">

                    <img
                      src="/assets/YOUR_INVOICE_IMAGE.png"
                      alt="Invoice Module"
                      className="rq-proto-screen-img"
                    />

                  </div>

                </div>

                <div className="rq-proto-monitor-stand">
                  <div className="rq-proto-monitor-neck" />
                  <div className="rq-proto-monitor-base" />
                </div>

              </div>

              <div className="rq-proto-connector" />

            </div>
          </div>
          {/* CAMPAIGN BUILDER */}
          <div className="rq-campaign-section">
            <h2 className="rq-h2">The 6-step Campaign Builder</h2>
            <p className="rq-p">
              Each step focuses on one decision at a time, reducing cognitive load
              and guiding marketers through campaign creation.
            </p>
            <div className="rq-steps">
              {reqore.steps.map((step) => (
                <div className="rq-step" key={step.n}>
                  <div className="rq-step-text">
                    <span className="rq-step-num">{step.n}</span>
                    <h3 className="rq-step-title">{step.title}</h3>
                    <p className="rq-step-body">{step.body}</p>
                    <p className="rq-step-caption">{step.caption}</p>
                  </div>
                  <div className="rq-step-media">
                    <img src={step.img} alt={step.title} />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* INVOICES */}



          {/* 14 IMPACT */}
          <Reveal as="section" className="rq-block">
            <SectionLabel>14 · Impact</SectionLabel>
            <h2 className="rq-h2">{reqore.impact.heading}</h2>
            <p className="rq-p">{reqore.impact.body}</p>

            <div className="rq-impact-metrics">
              {reqore.impact.metrics.map((m) => (
                <div key={m.label} className="rq-impact-metric">
                  <p className="rq-impact-metric-label">{m.label}</p>
                  <p className="rq-impact-metric-value">{m.value}</p>
                  <p className="rq-impact-metric-sub">{m.sub}</p>
                </div>
              ))}
            </div>

            <div className="rq-impact-outcomes">
              {reqore.impact.outcomes.map((o) => (
                <div key={o.title} className={`rq-impact-outcome rq-impact-outcome--${o.variant}`}>
                  <p className="rq-impact-outcome-title">{o.title}</p>
                  <p className="rq-impact-outcome-body">{o.body}</p>
                </div>
              ))}
            </div>

            <div className="rq-impact-ba">
              <div className="rq-impact-ba-col">
                <p className="rq-impact-ba-label">Before</p>
                {reqore.impact.before.map((b) => (
                  <div key={b} className="rq-impact-ba-item rq-impact-ba-item--before">
                    <span>✕</span>{b}
                  </div>
                ))}
              </div>
              <div className="rq-impact-ba-divider" />
              <div className="rq-impact-ba-col">
                <p className="rq-impact-ba-label">After</p>
                {reqore.impact.after.map((a) => (
                  <div key={a} className="rq-impact-ba-item rq-impact-ba-item--after">
                    <span>✓</span>{a}
                  </div>
                ))}
              </div>
            </div>
          </Reveal>



          {/* LEARNINGS */}
          <Reveal as="section" className="rq-block rq-learnings-section">
            <SectionLabel>Learnings</SectionLabel>
            <h2 className="rq-h2">{reqore.learnings.heading}</h2>
            <p className="rq-p">{reqore.learnings.body}</p>

            <div className="rq-learnings-cards">
              {reqore.learnings.items.map((l) => (
                <div key={l.title} className="rq-learning-card-v2">
                  <p className="rq-learning-card-title">{l.title}</p>
                  <p className="rq-learning-card-body">{l.body}</p>
                </div>
              ))}
            </div>

            <div className="rq-closing-quote-block">
              <div className="rq-closing-quote-mark">"</div>
              <p className="rq-closing-quote-text">{reqore.closingQuote}</p>
              <p className="rq-closing-quote-attr">— Prashant, UX Designer</p>
            </div>
          </Reveal>



        </Reveal>

      </div>
    </article>
  )
}