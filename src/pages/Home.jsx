import { Link } from 'react-router-dom'

const services = [
  { icon: '24', label: '24 Hr. trained and caring staff' },
  { icon: '🧺', label: 'Regular housekeeping and linen services' },
  { icon: '🚿', label: 'Large in-room showers' },
  { icon: '🍽️', label: 'Kitchenettes available' },
  { icon: '📱', label: 'Assistance with family video calls' },
  { icon: '❤️', label: 'Monthly wellness reviews' },
  { icon: '🩺', label: 'House physician available at all times' },
  { icon: '📺', label: 'Cable in every room' },
  { icon: '🏠', label: 'Home health and hospice services available' },
  { icon: '🔥', label: 'Delicious meals including items from Traeger smoke grill' },
  { icon: '🧹', label: 'Daily maid service and trash removal' },
  { icon: '💇', label: 'Beauty salon' },
  { icon: '🎶', label: 'Planned daily activities and entertainment' },
  { icon: '⛰️', label: 'Scenic views from apartment' },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">Rooted in care. Warm by nature.</p>
          <h1>Welcome to Hearthstone Assisted Living and Memory Care</h1>
          <p className="hero-sub">
            Affordable Senior Care in Spanish Fork and the Surrounding Communities
          </p>
          <div className="hero-actions">
            <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
            <Link to="/why-hearthstone" className="btn btn-ghost">Why Hearthstone</Link>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <h2 className="section-title">A Home, Not a Facility</h2>
          <p className="lede">
            As a locally owned assisted living facility, we are committed to providing
            your loved one with exceptional individualized service at a fair price. Like
            any good partnership, we believe in straight-forward pricing without hidden
            fees or add-on costly services. Our goal is to focus on world-class care,
            engaging activities, and creating a home-style environment. As a small
            community, all Hearthstone staff members build deep bonds and friendships
            with each and every resident. This is what sets us apart from other
            facilities.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title center">All-Inclusive Services</h2>
          <p className="section-sub center">
            One straightforward price covers everything your loved one needs.
          </p>
          <ul className="services-grid">
            {services.map((s) => (
              <li key={s.label} className="service-card">
                <span className="service-icon" aria-hidden="true">{s.icon}</span>
                <span className="service-label">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2 className="section-title">Come visit and feel at home.</h2>
          <p className="section-sub">
            Schedule a tour today and see why families across Spanish Fork choose Hearthstone.
          </p>
          <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
        </div>
      </section>
    </>
  )
}
