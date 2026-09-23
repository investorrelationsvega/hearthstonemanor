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
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 1.09.05 1.592.15V8.13c-.259-.027-.708-.041-1.266-.041-1.795 0-2.49.681-2.49 2.453v1.502h3.549l-.607 3.667h-2.942v8.144C18.67 23.166 22 19.036 22 14.1 22 8.647 17.523 4.2 12 4.2S2 8.647 2 14.1c0 4.483 2.848 8.306 6.831 9.69l.27-.099z" />
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
