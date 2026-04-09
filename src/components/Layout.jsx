import { Outlet, useLocation, Link } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

export default function Layout() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return (
    <div className="app-shell">
      <a href="#main-content" className="skip-link">
        Skip to main content
      </a>

      <div className="tour-bar" role="complementary" aria-label="Schedule a tour">
        <div className="tour-bar-inner">
          <span className="tour-bar-message">
            <strong>Schedule a tour:</strong>
            <span className="tour-bar-number">(801) 798-1500</span>
            <a
              href="tel:+18017981500"
              className="tour-bar-action"
              aria-label="Call the facility at (801) 798-1500"
            >
              Call us
            </a>
            <span className="tour-bar-sep" aria-hidden="true">·</span>
            <a
              href="sms:+18017981500"
              className="tour-bar-action"
              aria-label="Text the facility at (801) 798-1500"
            >
              Text us
            </a>
          </span>
          <Link to="/contact" className="tour-bar-cta">
            Schedule a Tour
          </Link>
        </div>
      </div>

      <Navbar />
      <main id="main-content" className="main-content" tabIndex={-1}>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
