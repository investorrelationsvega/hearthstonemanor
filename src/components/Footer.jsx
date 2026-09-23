import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <span className="footer-brand">Hearthstone Manor</span>
          <p className="footer-tag">Come Home to Hearthstone.</p>
          <address className="footer-address">
            <a
              href="https://maps.google.com/?q=1424+S+1700+E,+Spanish+Fork,+UT+84660"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Open 1424 S 1700 E, Spanish Fork, UT 84660 in maps"
            >
              1424 S 1700 E<br />
              Spanish Fork, UT 84660
            </a>
          </address>
          <div className="footer-social">
            <a
              href="https://www.facebook.com/profile.php?id=61585751841057"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Hearthstone Manor on Facebook"
              className="footer-social-link"
            >
              <svg viewBox="2 2 20 20" fill="currentColor" aria-hidden="true">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Get in Touch</h3>
          <ul className="footer-phones">
            <li>
              <span className="phone-label">Call / Text Us</span>
              <div className="phone-row">
                <span className="phone-number">(801) 606-3388</span>
                <span className="phone-actions">
                  <a href="tel:+18016063388" aria-label="Call (801) 606-3388">Call</a>
                  <span aria-hidden="true">·</span>
                  <a href="sms:+18016063388" aria-label="Text (801) 606-3388">Text</a>
                </span>
              </div>
            </li>
            <li>
              <span className="phone-label">Email Us</span>
              <a className="phone-number" href="mailto:hsm.utah@gmail.com">
                hsm.utah@gmail.com
              </a>
            </li>
          </ul>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Explore</h3>
          <ul className="footer-list">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/why-hearthstone">Why Hearthstone</Link></li>
            <li><Link to="/assisted-living">Assisted Living</Link></li>
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
            <li><Link to="/contact">Contact</Link></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <p>&copy; {new Date().getFullYear()} Hearthstone Manor. All rights reserved.</p>
      </div>
    </footer>
  )
}
