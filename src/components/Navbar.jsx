import { useState } from 'react'
import { JOIN_FORM_URL } from '../data/siteLinks.js'
import Button from './ui/Button.jsx'
import './Navbar.css'

const links = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Domains', href: '#domains' },
  { label: 'Events', href: '#events' },
  { label: 'Team', href: '#team' },
  { label: 'Gallery', href: '#gallery' },
]

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false)

  function closeMenu() {
    setMenuOpen(false)
  }

  function handleKeyDown(event) {
    if (event.key === 'Escape') {
      closeMenu()
    }
  }

  return (
    <header className="site-header" onKeyDown={handleKeyDown}>
      <div className="site-header__inner container">
        <a className="brand" href="#home" aria-label="INFINITY home" onClick={closeMenu}>
          <span className="brand__symbol" aria-hidden="true">∞</span>
          <span className="brand__name">INFINITY</span>
        </a>

        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          aria-expanded={menuOpen}
          aria-controls="primary-navigation"
          onClick={() => setMenuOpen((isOpen) => !isOpen)}
        >
          <span className="menu-toggle__line" />
          <span className="menu-toggle__line" />
        </button>

        <nav
          className={`site-nav${menuOpen ? ' site-nav--open' : ''}`}
          id="primary-navigation"
          aria-label="Main navigation"
        >
          <div className="site-nav__links">
            {links.map(({ label, href }) => (
              <a className="site-nav__link" href={href} key={label} onClick={closeMenu}>
                {label}
              </a>
            ))}
          </div>
          <Button
            className="site-nav__join"
            href={JOIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMenu}
          >
            Join Us
            <span aria-hidden="true">↗</span>
          </Button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
