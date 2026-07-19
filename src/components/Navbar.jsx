import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import ThemeToggle from './ThemeToggle.jsx'
import StatusPill from './StatusPill.jsx'
import './Navbar.css'

const NAV_LINKS = [
  { label: 'Work', hash: 'work' },
  { label: 'About', hash: 'about' },
  // { label: 'Motion', hash: 'motion' },
  { label: 'Contact', hash: 'contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const navigate = useNavigate()
  const onHome = location.pathname === '/'

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const goTo = (hash) => (e) => {
    e.preventDefault()
    setOpen(false)
    if (onHome) {
      document.getElementById(hash)?.scrollIntoView({ behavior: 'smooth' })
    } else {
      navigate('/#' + hash)
    }
  }

  return (
    <header className={`navbar ${scrolled ? 'is-scrolled' : ''}`}>
      <div className="container navbar-inner">
        <Link to="/" className="navbar-brand" onClick={() => setOpen(false)}>
          Prashant<span className="brand-dot">.</span>
        </Link>

        <nav className={`navbar-links ${open ? 'is-open' : ''}`}>
          {NAV_LINKS.map((link) => (
            <a key={link.hash} href={`/#${link.hash}`} onClick={goTo(link.hash)}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar-actions">
          <span className="navbar-status">
            <StatusPill variant="mint">Available for work</StatusPill>
          </span>
          <ThemeToggle />
          <button
            className={`navbar-burger ${open ? 'is-open' : ''}`}
            aria-label="Toggle menu"
            onClick={() => setOpen((o) => !o)}
          >
            <span /><span /><span />
          </button>
        </div>
      </div>
    </header>
  )
}
