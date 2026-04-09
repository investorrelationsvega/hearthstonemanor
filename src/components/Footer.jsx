import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <span className="footer-brand">Hearthstone Manor</span>
          <p className="footer-tag">Come Home to Hearthstone.</p>
          <address className="footer-address">
            1424 S 1700 E<br />
            Spanish Fork, UT 84660
          </address>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Get in Touch</h3>
          <ul className="footer-phones">
            <li>
              <span className="phone-label">Call / Text Us</span>
              <div className="phone-row">
                <span className="phone-number">(801) 798-1500</span>
                <span className="phone-actions">
                  <a href="tel:+18017981500" aria-label="Call (801) 798-1500">Call</a>
                  <span aria-hidden="true">·</span>
                  <a href="sms:+18017981500" aria-label="Text (801) 798-1500">Text</a>
                </span>
              </div>
              <div className="phone-row">
                <span className="phone-number">(801) 420-5196</span>
                <span className="phone-actions">
                  <a href="tel:+18014205196" aria-label="Call (801) 420-5196">Call</a>
                  <span aria-hidden="true">·</span>
                  <a href="sms:+18014205196" aria-label="Text (801) 420-5196">Text</a>
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
            <li><Link to="/memory-care">Memory Care</Link></li>
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
