import './Footer.css'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-inner">
        <p className="footer-brand">Prashant<span className="brand-dot">.</span></p>
        <p className="footer-meta">Product Designer · India · © {new Date().getFullYear()}</p>
        {/* <p className="footer-meta footer-built">Built in React, with real screens from the Reqore Mail project.</p> */}
      </div>
    </footer>
  )
}
