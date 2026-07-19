import StatusPill from './StatusPill.jsx'
import SignalPipeline from './SignalPipeline.jsx'
import './Hero.css'
import { Icon } from './PixelIcons.jsx'

function scrollTo(id) {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
}

export default function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="container hero-inner">

        <div className="hero-copy">

          <div className="hero-fade" style={{ animationDelay: '0s' }}>
            <StatusPill variant="mint">Available for work</StatusPill>
          </div>

          <h1 className="hero-fade" style={{ animationDelay: '.08s' }}>
            <span className="hero-eyebrow-name"></span>
            <span className="hero-headline"></span>
          </h1>

          <p className="hero-fade hero-sub" style={{ animationDelay: '.16s' }}>
            Hey there, I&apos;m Prashant, a{' '}
            <Icon.Cube /> Product{' '}
            <Icon.Type /> Designer based in{' '}
            <Icon.Coffee /> Delhi. I create{' '}
            <Icon.Bulb /> simple &amp; meaningful digital experiences through{' '}
            <Icon.Book /> design &amp; storytelling. Currently available for{' '}
            <Icon.Mail /> hire, freelance &amp;{' '}
            <Icon.Chat /> collaborations.
          </p>

          <div className="hero-fade hero-cta" style={{ animationDelay: '.24s' }}>
            <a
              href="#work"
              className="btn btn-primary"
              onClick={(e) => { e.preventDefault(); scrollTo('work') }}
            >
              View Work
            </a>
            <a
              href="#contact"
              className="btn btn-ghost"
              onClick={(e) => { e.preventDefault(); scrollTo('contact') }}
            >
              Contact Me
            </a>
            <a
              href="/assets/Prashant-Resume.pdf"
              target="_blank"
              rel="noreferrer"
              className="btn btn-resume"
              download
            >
              Download Resume ↓
            </a>
          </div>

        </div>

        <div className="hero-visual hero-fade" style={{ animationDelay: '.3s' }}>
          <SignalPipeline />
          <div className="hero-float-card">
            <span className="hero-float-dot" />
            <div>
              <p className="hero-float-label"></p>
              <p className="hero-float-value">B2B</p>
            </div>
          </div>
          <div className="hero-float-card hero-float-card--alt">
            <span className="hero-float-dot hero-float-dot--amber" />
            <div>
              <p className="hero-float-label"></p>
              <p className="hero-float-value">B2C</p>
            </div>
          </div>
        </div>

      </div>
    </section>
  )
}
