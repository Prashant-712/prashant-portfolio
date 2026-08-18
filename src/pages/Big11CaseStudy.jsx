import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import './Big11CaseStudy.css'

// Files live directly in: public/assets/  (NOT public/assets/case-study/)
// Note: "07" is intentionally skipped in the source files.
const SLIDES = [
  { src: '/assets/01-cover.svg', alt: 'Big11 India — Cover' },
  { src: '/assets/02-snapshot.svg', alt: 'Big11 India — Snapshot' },
  { src: '/assets/03-brief.svg', alt: 'Big11 India — The Brief' },
  { src: '/assets/04-solution.svg', alt: 'Big11 India — Solution' },
  { src: '/assets/05-define.svg', alt: 'Big11 India — Define' },
  { src: '/assets/Research.svg', alt: 'Big11 India — Research' },
  { src: '/assets/05-define.svg', alt: 'Big11 India — Define' },
  { src: '/assets/06-user-flow.svg', alt: 'Big11 India — User Flow' },
  { src: '/assets/08-information-architecture.svg', alt: 'Big11 India — Information Architecture' },
  { src: '/assets/09-competitive-analysis.svg', alt: 'Big11 India — Competitive Analysis' },
  { src: '/assets/10-wireframes.svg', alt: 'Big11 India — Wireframes' },
  { src: '/assets/11-design-system.svg', alt: 'Big11 India — Design System' },
  { src: '/assets/12-final-screens.svg', alt: 'Big11 India — Final High-Fidelity Screens' },
  // { src: '/assets/13-footer.svg', alt: 'Big11 India — Footer' }, // uncomment once this file exists / is renamed
]

export default function Big11CaseStudy() {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])

  return (
    <article className="b11-page">
      <header className="b11-header">
        <div className="container">
          <Reveal as="div" className="b11-back">
            <Link to="/#work">← Back to portfolio</Link>
          </Reveal>
          <Reveal as="h1" delay={80} className="b11-title">Big11 India</Reveal>
          <Reveal as="p" delay={120} className="b11-sub">
            A redesign of match discovery, KYC verification, and wallet
            management for a fantasy-sports app — shipped, not deployed,
            following a government ban on real-money gaming mid-project.
          </Reveal>
        </div>
      </header>

      <div className="container b11-slides">
        {SLIDES.map((slide, i) => (
          <Reveal as="div" key={slide.src} delay={Math.min(i * 40, 300)} className="b11-slide">
            <img src={slide.src} alt={slide.alt} loading="lazy" />
          </Reveal>
        ))}
      </div>
    </article>
  )
}
