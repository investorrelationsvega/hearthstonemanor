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
          <span></span>
          <span></span>
          <span></span>
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
