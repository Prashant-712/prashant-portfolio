import { skillGroups, certifications } from '../data/content.js'
import Reveal from './Reveal.jsx'
import './SkillsTools.css'

export default function SkillsTools() {
  return (
    <section className="section skills" id="skills">
      <div className="container">
        <Reveal className="section-head">
          <span className="eyebrow">Capabilities</span>
          <h2>What I bring to a team.</h2>
        </Reveal>

        <div className="skills-grid">
          {skillGroups.map((group, i) => (
            <Reveal as="div" key={group.label} delay={i * 70} className="skill-group">
              <p className="skill-group-label">{group.label}</p>
              <div className="skill-chips">
                {group.items.map((item) => (
                  <span className="skill-chip" key={item}>{item}</span>
                ))}
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal as="div" delay={200} className="certs-row">
          <p className="skill-group-label">Certifications</p>
          <div className="certs-list">
            {certifications.map((c) => (
              <a
                href={c.url}
                target="_blank"
                rel="noreferrer"
                className="cert-item cert-item--link"
                key={c.title + c.org}
              >
                <span className="cert-dot" />
                <div>
                  <p className="cert-title">{c.title}</p>
                  <p className="cert-meta">{c.org} · {c.period}</p>
                </div>
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}