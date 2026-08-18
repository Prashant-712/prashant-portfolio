import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import './Big11CaseStudy.css'

// Files live in: public/assets/case-study/
// Note: "07" is intentionally skipped in the source files — order below matches
// the actual numbering (01–06, then 08–13).
const SLIDES = [
  { src: '/assets/case-study/01 · Cover.svg', alt: 'Big11 India — Cover' },
  { src: '/assets/case-study/02 · Snapshot.svg', alt: 'Big11 India — Snapshot' },
  { src: '/assets/case-study/03 · The Brief.svg', alt: 'Big11 India — The Brief' },
  { src: '/assets/case-study/04 · Solution.svg', alt: 'Big11 India — Solution' },
  { src: '/assets/case-study/05 · Define.svg', alt: 'Big11 India — Define' },
  { src: '/assets/case-study/06 · User Flow.svg', alt: 'Big11 India — User Flow' },
  { src: '/assets/case-study/08 · Information Architecture.svg', alt: 'Big11 India — Information Architecture' },
  { src: '/assets/case-study/09 · Competitive Analysis.svg', alt: 'Big11 India — Competitive Analysis' },
  { src: '/assets/case-study/10 · Wireframes.svg', alt: 'Big11 India — Wireframes' },
  { src: '/assets/case-study/11 · Design System.svg', alt: 'Big11 India — Design System' },
  { src: '/assets/case-study/12 · Final-Fidelity Screens.svg', alt: 'Big11 India — Final High-Fidelity Screens' },
  { src: '/assets/case-study/13 · Footer.svg', alt: 'Big11 India — Footer' },
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
