import { ArrowUpRight } from 'lucide-react'
import { footerLinks, JOIN_FORM_URL, socialLinks } from '../data/siteLinks.js'
import './Footer.css'

function SocialIcon({ label }) {
  if (label === 'Instagram') {
    return (
      <svg
        width="18"
        height="18"
        viewBox="0 0 18 18"
        fill="none"
        aria-hidden="true"
      >
        <rect x="2.25" y="2.25" width="13.5" height="13.5" rx="4" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="9" cy="9" r="3.1" stroke="currentColor" strokeWidth="1.6" />
        <circle cx="13.15" cy="4.95" r="0.9" fill="currentColor" />
      </svg>
    )
  }

  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 18 18"
      fill="currentColor"
      aria-hidden="true"
    >
      <rect x="1.5" y="1.5" width="15" height="15" rx="2.5" />
      <circle cx="5.35" cy="5.2" r="1.1" fill="var(--color-background)" />
      <path d="M4.3 7.3h2.1v6.2H4.3zm3.4 0h2v.85c.45-.67 1.1-1.03 2.02-1.03 1.88 0 2.4 1.2 2.4 3.02v3.36h-2.1v-2.98c0-.72-.02-1.64-1.05-1.64s-1.17.78-1.17 1.59v3.03H7.7z" fill="var(--color-background)" />
    </svg>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-footer__inner container">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <a className="site-footer__brand" href="#home" aria-label="INFINITY home">
              <span className="site-footer__symbol" aria-hidden="true">∞</span>
              <span>INFINITY</span>
            </a>
            <p className="site-footer__description">
              A community driven by curiosity, technology and infinite possibilities.
            </p>
          </div>

          <nav className="site-footer__navigation" aria-label="Footer navigation">
            <p className="site-footer__label">EXPLORE</p>
            <div className="site-footer__links">
              {footerLinks.map(({ label, href }) => (
                <a href={href} key={label}>{label}</a>
              ))}
            </div>
          </nav>

          <div className="site-footer__connect">
            <p className="site-footer__label">CONNECT</p>
            <div className="site-footer__socials">
              {socialLinks.map(({ label, href }) => {
                return (
                  <a
                    className="site-footer__social-link"
                    href={href}
                    key={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`INFINITY on ${label} (opens in a new tab)`}
                  >
                    <SocialIcon label={label} />
                    <span>{label}</span>
                    <ArrowUpRight size={14} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
            <a
              className="site-footer__join"
              href={JOIN_FORM_URL}
              target="_blank"
              rel="noopener noreferrer"
            >
              JOIN INFINITY <ArrowUpRight size={16} aria-hidden="true" />
            </a>
          </div>
        </div>

        <div className="site-footer__bottom">
          <a className="site-footer__back-top" href="#home">
            BACK TO TOP <span aria-hidden="true">↑</span>
          </a>
          <p>© 2026 INFINITY. All rights reserved.</p>
          <span className="site-footer__location">SGGSCC · NEW DELHI</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
