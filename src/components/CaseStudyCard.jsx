import { Link } from 'react-router-dom'
import StatusPill from './StatusPill.jsx'
import './CaseStudyCard.css'

export default function CaseStudyCard({ study }) {
  const content = (
    <>
      <div className="cs-card-media">
        {study.cover ? (
          <img src={study.cover} alt={`${study.title} interface preview`} loading="lazy" />
        ) : (
          <div className="cs-card-abstract" aria-hidden="true">
            <div className="cs-card-abstract-grid" />
            <span className="cs-card-abstract-mark">WH</span>
          </div>
        )}
        <div className="cs-card-media-overlay">
          <span className="cs-card-cta">
            {study.internal ? 'Read case study' : 'Visit live product'} →
          </span>
        </div>
      </div>

      <div className="cs-card-body">
        <div className="cs-card-top">
          <p className="cs-card-tag">{study.tag}</p>
          <StatusPill variant={study.statusVariant} pulse={study.statusVariant === 'mint'}>
            {study.status}
          </StatusPill>
        </div>

        <h3 className="cs-card-title">{study.title}</h3>
        <p className="cs-card-problem">{study.problem}</p>

        <div className="cs-card-meta">
          <div>
            <p className="cs-card-meta-label">Role</p>
            <p className="cs-card-meta-value">{study.role}</p>
          </div>
          <div>
            <p className="cs-card-meta-label">Tools</p>
            <p className="cs-card-meta-value">{study.tools.join(', ')}</p>
          </div>
        </div>
      </div>
    </>
  )

  if (study.internal) {
    return (
      <Link to={`/case-studies/${study.slug}`} className="cs-card">
        {content}
      </Link>
    )
  }

  return (
    <a href={study.externalUrl} target="_blank" rel="noreferrer" className="cs-card">
      {content}
    </a>
  )
}
