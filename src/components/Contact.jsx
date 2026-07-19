import { profile } from '../data/content.js'
import Reveal from './Reveal.jsx'
import StatusPill from './StatusPill.jsx'
import './Contact.css'

export default function Contact() {
  return (
    <section className="section contact" id="contact">
      <div className="container">
        <div className="contact-panel">
          <div className="contact-grid-bg" aria-hidden="true" />

          <Reveal as="div" className="contact-status">
            <StatusPill variant="mint">Open to new roles</StatusPill>
          </Reveal>

          <Reveal as="h2" delay={60} className="contact-heading">
            Let&rsquo;s build something that doesn&rsquo;t break.
          </Reveal>

          <Reveal as="p" delay={120} className="contact-sub">
            I'm currently open to Product Design roles, freelance collaborations, and conversations about building products that make a real difference.
          </Reveal>

          <Reveal as="div" delay={180} className="contact-actions">
            <a href={`mailto:${profile.email}`} className="btn btn-violet">
              {profile.email}
            </a>
            <a href={profile.linkedin} target="_blank" rel="noreferrer" className="btn btn-ghost">
              LinkedIn ↗
            </a>
            <a href={`tel:${profile.phone}`} className="btn btn-ghost">
              {profile.phone}
            </a>
          </Reveal>

        </div>
      </div>
    </section>
  )
}