import { Link } from 'react-router-dom'
import { useEffect } from 'react'
import Reveal from '../components/Reveal.jsx'
import './Big11CaseStudy.css'

// Files live directly in: public/assets/  (NOT public/assets/case-study/)
// Note: "07" is intentionally skipped in the source files.
const SLIDES = [
  { src: '/assets/Big1.png', alt: 'Big11 India — Cover' },
  { src: '/assets/Big2.png', alt: 'Big11 India — Snapshot' },
  { src: '/assets/Big3.png', alt: 'Big11 India — The Brief' },
  { src: '/assets/Big4.png', alt: 'Big11 India — Solution' },
  { src: '/assets/Big5.png', alt: 'Big11 India — Define' },
  { src: '/assets/Big6.png', alt: 'Big11 India — Research' },
  { src: '/assets/Big7.png', alt: 'Big11 India — User Flow' },
  { src: '/assets/Big8.png', alt: 'Big11 India — Information Architecture' },
  { src: '/assets/Big9.png', alt: 'Big11 India — Competitive Analysis' },
  { src: '/assets/Big10.png', alt: 'Big11 India — Wireframes' },
  { src: '/assets/Big11.png', alt: 'Big11 India — Design System' },
  { src: '/assets/Big12.png', alt: 'Big11 India — Final Screens 1' },
  { src: '/assets/Big13.png', alt: 'Big11 India — Final Screens 2' },
  { src: '/assets/Big14.png', alt: 'Big11 India — Final Screens 3' },
  { src: '/assets/Big15.png', alt: 'Big11 India — Final Screens 4' },
  { src: '/assets/Big16.png', alt: 'Big11 India — Final Screens 5' },
  { src: '/assets/Big17.png', alt: 'Big11 India — Final Screens 6' },
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
