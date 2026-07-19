import { caseStudies } from '../data/content.js'
import CaseStudyCard from './CaseStudyCard.jsx'
import Reveal from './Reveal.jsx'
import './CaseStudies.css'

export default function CaseStudies() {
  return (
    <section className="section case-studies" id="work">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Selected work</span>
          <h2>Designing products, not just interfaces.</h2>
          <p>
            End-to-end product design case studies focused on solving real-world problems through research, UX, and systems thinking.
          </p>
        </Reveal>

        <div className="case-studies-grid">
          {caseStudies.map((study, i) => (
            <Reveal as="div" key={study.slug} delay={i * 100}>
              <CaseStudyCard study={study} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
