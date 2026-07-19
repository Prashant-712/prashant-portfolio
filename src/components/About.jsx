import { profile, experience, education } from '../data/content.js'
import Reveal from './Reveal.jsx'
import StatusPill from './StatusPill.jsx'
import './About.css'

export default function About() {
  return (
    <section className="section about" id="about">
      <div className="container">
        <Reveal className="section-head">
          {/* <span className="eyebrow">About</span> */}
          <h2>About</h2>
        </Reveal>

        <div className="about-grid">
          <div className="about-main">
            <Reveal as="div" className="about-photo-wrap">
              {/* <img src="/assets/headshot.jpg" alt="Portrait of Prashant" className="about-photo" /> */}
              <div className="about-photo-tag">
                <span className="about-photo-dot" />
                Delhi, India
              </div>
            </Reveal>

            <div className="about-bio">
              {profile.bio.map((para, i) => (
                <Reveal as="p" key={i} delay={i * 80}>
                  {para}
                </Reveal>
              ))}

              <Reveal as="div" delay={260} className="about-education">
                <span className="about-education-dot" />
                <div>
                  <p className="about-education-degree">{education.degree}</p>
                  <p className="about-education-school">{education.school} — {education.year}</p>
                </div>
              </Reveal>
            </div>
          </div>


        </div>

        <div className="experience-block">
          <Reveal as="h3" className="about-side-heading">Experience log</Reveal>
          <div className="experience-list">
            {experience.map((job, i) => (
              <Reveal as="div" key={job.company} delay={i * 90} className="experience-row">
                <span className="experience-period">{job.period}</span>
                <div className="experience-main">
                  <div className="experience-title-row">
                    <p className="experience-company">{job.company}</p>
                    <StatusPill variant={job.status === 'shipped' ? 'mint' : 'violet'} pulse={false}>
                      {job.status}
                    </StatusPill>
                  </div>
                  <p className="experience-role">{job.title} · {job.location}</p>
                  <ul className="experience-points">
                    {job.points.map((p, j) => <li key={j}>{p}</li>)}
                  </ul>
                  {job.links.length > 0 && (
                    <div className="experience-links">
                      {job.links.map((l) => (
                        <a key={l.url} href={l.url} target="_blank" rel="noreferrer">{l.label} ↗</a>
                      ))}
                    </div>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
