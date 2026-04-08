import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-col">
          <h3 className="footer-heading">Hearthstone Manor</h3>
          <p className="footer-tag">Rooted in care. Warm by nature.</p>
          <address className="footer-address">
            1424 S 1700 E<br />
            Spanish Fork, UT 84660
          </address>
        </div>

        <div className="footer-col">
          <h3 className="footer-heading">Contact</h3>
          <ul className="footer-list">
            <li>
              Facility:{' '}
              <a href="tel:+18017981500">(801) 798-1500</a>
            </li>
            <li>
              Tours:{' '}
              <a href="tel:+18014205196">(801) 420-5196</a>
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
