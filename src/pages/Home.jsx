import { Link } from 'react-router-dom'
import Slideshow from '../components/Slideshow.jsx'

const slideshowSlides = [
  { src: '/images/gallery/01-porch-mountain-view.jpg', alt: 'View of snow-capped Utah mountains framed by the Hearthstone Manor covered porch' },
  { src: '/images/gallery/03-grand-fireplace.jpg', alt: 'Grand stone fireplace and chandeliers in the Hearthstone Manor lobby' },
  { src: '/images/gallery/06-sun-room.jpg', alt: 'Bright sun room dining area with vaulted ceiling' },
  { src: '/images/gallery/04-fireplace-lounge.jpg', alt: 'Cozy fireside lounge with leather seating and dining tables' },
  { src: '/images/gallery/07-leather-lounge.jpg', alt: 'Comfortable common area with leather sofas and stone accents' },
  { src: '/images/activities/10-common-room.jpg', alt: 'Bright common room with stone fireplace and dining tables' },
  { src: '/images/gallery/05-dining-fireplace.jpg', alt: 'Dining area beside the stone fireplace' },
  { src: '/images/gallery/12-dining-room.jpg', alt: 'Home-style dining room with framed mountain art' },
  { src: '/images/gallery/09-mountain-view.jpg', alt: 'Snow-capped mountains seen from the Hearthstone Manor street' },
  { src: '/images/activities/12-front-entrance.jpg', alt: 'Covered front entrance of Hearthstone Manor with stone columns' },
]

/* Inline Lucide-style line icons (24x24, 1.6 stroke). One distinct
   icon per service, kept consistent in style and weight so the row
   reads as a typographic list rather than a sticker collection. */
const services = [
  {
    label: 'Trained caregivers around the clock',
    icon: (
      <>
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </>
    ),
  },
  {
    label: 'On-call house physician',
    icon: <path d="M22 12h-4l-3 9L9 3l-3 9H2" />,
  },
  {
    label: 'Monthly wellness check-ins',
    icon: (
      <>
        <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
        <path d="m9 14 2 2 4-4" />
      </>
    ),
  },
  {
    label: 'Home health and hospice care',
    icon: (
      <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
    ),
  },
  {
    label: 'Spacious walk-in showers',
    icon: (
      <path d="M12 22a7 7 0 0 0 7-7c0-2-1-3.9-3-5.5s-3.5-4-4-6.5c-.5 2.5-2 4.9-4 6.5C6 11.1 5 13 5 15a7 7 0 0 0 7 7z" />
    ),
  },
  {
    label: 'Private kitchenette in every apartment',
    icon: (
      <>
        <path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2" />
        <line x1="7" y1="2" x2="7" y2="22" />
        <path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7" />
      </>
    ),
  },
  {
    label: 'Scenic mountain views from every apartment',
    icon: <path d="m8 3 4 8 5-5 5 15H2L8 3z" />,
  },
  {
    label: 'Three home-cooked meals daily',
    icon: (
      <>
        <path d="M17 21a1 1 0 0 0 1-1v-5.35c0-.457.316-.844.727-1.041a4 4 0 0 0-2.134-7.589 5 5 0 0 0-9.186 0 4 4 0 0 0-2.134 7.588c.411.198.727.585.727 1.041V20a1 1 0 0 0 1 1Z" />
        <path d="M6 17h12" />
      </>
    ),
  },
  {
    label: 'Cable TV in every room',
    icon: (
      <>
        <rect x="2" y="7" width="20" height="15" rx="2" ry="2" />
        <polyline points="17 2 12 7 7 2" />
      </>
    ),
  },
  {
    label: 'Daily housekeeping and trash removal',
    icon: (
      <>
        <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
        <path d="M5 3v4" />
        <path d="M19 17v4" />
        <path d="M3 5h4" />
        <path d="M17 19h4" />
      </>
    ),
  },
  {
    label: 'Weekly fresh linens and laundry',
    icon: (
      <path d="M20.38 3.46 16 2a4 4 0 0 1-8 0L3.62 3.46a2 2 0 0 0-1.34 2.23l.58 3.47a1 1 0 0 0 .99.84H6v10c0 1.1.9 2 2 2h8a2 2 0 0 0 2-2V10h2.15a1 1 0 0 0 .99-.84l.58-3.47a2 2 0 0 0-1.34-2.23z" />
    ),
  },
  {
    label: 'On-site beauty salon',
    icon: (
      <>
        <circle cx="6" cy="6" r="3" />
        <path d="M8.12 8.12 12 12" />
        <path d="M20 4 8.12 15.88" />
        <circle cx="6" cy="18" r="3" />
        <path d="M14.8 14.8 20 20" />
      </>
    ),
  },
  {
    label: 'Daily activities and entertainment',
    icon: (
      <>
        <path d="M9 18V5l12-2v13" />
        <circle cx="6" cy="18" r="3" />
        <circle cx="18" cy="16" r="3" />
      </>
    ),
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero-overlay" />
        <div className="hero-content container">
          <p className="eyebrow">Come Home to Hearthstone</p>
          <h1>
            Welcome to Hearthstone
            <br />
            Assisted Living and Memory Care
          </h1>
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
          <h2 className="section-title center">A Home, Not a Facility</h2>
          <p className="lede">
            Every hearth needs tending, and so does every life. At Hearthstone
            Manor, we&rsquo;re a locally owned, close-knit community devoted to
            giving your loved one the warmth, dignity, and care they deserve.
            One straightforward price covers everything, because good care
            shouldn&rsquo;t come with fine print.
          </p>
          <p className="lede">
            Our staff build real friendships with every resident &mdash; the
            kind that only grow in a place small enough to notice and warm
            enough to matter. This isn&rsquo;t a facility. Come home to
            Hearthstone.
          </p>
        </div>
      </section>

      <section className="section section-alt">
        <div className="container">
          <h2 className="section-title center">All-Inclusive Services</h2>
          <p className="section-sub center">
            One straightforward price covers everything your loved one needs.
          </p>
          <ul className="services-list">
            {services.map((service) => (
              <li key={service.label} className="services-item">
                <svg
                  className="services-icon"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  aria-hidden="true"
                >
                  {service.icon}
                </svg>
                <span>{service.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2 className="section-title center">A Glimpse of Life at Hearthstone</h2>
          <p className="section-sub center">
            Nestled in a quiet Spanish Fork neighborhood with majestic mountain views.
          </p>
          <Slideshow slides={slideshowSlides} />
          <p className="center" style={{ marginTop: '1.75rem' }}>
            <Link to="/gallery" className="btn btn-ghost btn-ghost-dark">See the Full Gallery</Link>
          </p>
        </div>
      </section>

      <section className="section cta-band">
        <div className="container center">
          <h2 className="section-title">Come Home to Hearthstone.</h2>
          <p className="section-sub">
            Schedule a tour and see why families trust us with the people they love most.
          </p>
          <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
        </div>
      </section>
    </>
  )
}
