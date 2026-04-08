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
            <a href="tel:+18014205196" className="tour-bar-phone">
              (801) 420-5196
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
