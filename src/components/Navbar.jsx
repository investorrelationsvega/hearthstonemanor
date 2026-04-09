import { useState, useEffect, useRef } from 'react'
import { NavLink, Link, useLocation } from 'react-router-dom'

const links = [
  { to: '/', label: 'Home', end: true },
  { to: '/why-hearthstone', label: 'Why Hearthstone' },
  { to: '/memory-care', label: 'Memory Care' },
  { to: '/assisted-living', label: 'Assisted Living' },
  { to: '/about', label: 'About Us' },
  { to: '/gallery', label: 'Gallery' },
  { to: '/contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const hamburgerRef = useRef(null)

  useEffect(() => {
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  // Close the mobile drawer on Escape key, return focus to the hamburger
  useEffect(() => {
    if (!open) return
    const onKeyDown = (e) => {
      if (e.key === 'Escape') {
        setOpen(false)
        hamburgerRef.current?.focus()
      }
    }
    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  return (
    <header className="navbar">
      <div className="navbar-inner">
        <Link to="/" className="brand" aria-label="Hearthstone Manor home">
          <span className="brand-name">Hearthstone Manor</span>
          <span className="brand-tagline">Come Home to Hearthstone.</span>
        </Link>

        <button
          ref={hamburgerRef}
          type="button"
          className={`hamburger ${open ? 'is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          aria-controls="primary-navigation"
          onClick={() => setOpen(!open)}
        >
          <span className="hamburger-icon">
            {/* Three bars — the default "closed" state */}
            <svg
              className="hamburger-svg hamburger-svg-menu"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <line x1="4" y1="7" x2="20" y2="7" />
              <line x1="4" y1="12" x2="20" y2="12" />
              <line x1="4" y1="17" x2="20" y2="17" />
            </svg>
            {/* Little house — the "open" state */}
            <svg
              className="hamburger-svg hamburger-svg-house"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path d="M3 11 L12 3 L21 11 L21 21 L3 21 Z" />
              <path d="M10 21 L10 15 L14 15 L14 21" />
            </svg>
          </span>
          <span className="hamburger-label">Menu</span>
        </button>

        <nav
          id="primary-navigation"
          className={`nav-links ${open ? 'is-open' : ''}`}
          aria-label="Primary"
        >
          <ul>
            {links.map((link) => (
              <li key={link.to}>
                <NavLink
                  to={link.to}
                  end={link.end}
                  className={({ isActive }) => (isActive ? 'active' : '')}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li className="nav-cta-wrap">
              <Link to="/contact" className="nav-cta">Schedule a Tour</Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}
