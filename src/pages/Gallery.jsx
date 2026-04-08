const gallery = [
  { src: '/images/gallery/01-porch-mountain-view.jpg', label: 'Mountain Views from the Porch' },
  { src: '/images/gallery/02-entrance-sign.jpg', label: 'Welcome to Hearthstone Manor' },
  { src: '/images/gallery/03-grand-fireplace.jpg', label: 'Grand Stone Fireplace' },
  { src: '/images/gallery/04-fireplace-lounge.jpg', label: 'Fireside Lounge' },
  { src: '/images/gallery/05-dining-fireplace.jpg', label: 'Dining by the Fire' },
  { src: '/images/gallery/06-sun-room.jpg', label: 'Bright Sun Room' },
  { src: '/images/gallery/07-leather-lounge.jpg', label: 'Comfortable Common Area' },
  { src: '/images/gallery/08-covered-porch.jpg', label: 'Covered Front Porch' },
  { src: '/images/gallery/09-mountain-view.jpg', label: 'Spanish Fork Mountains' },
  { src: '/images/gallery/10-kitchenette.jpg', label: 'In-Room Kitchenette' },
  { src: '/images/gallery/11-apartment.jpg', label: 'Private Apartment' },
  { src: '/images/gallery/12-dining-room.jpg', label: 'Home-Style Dining' },
]

export default function Gallery() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p className="page-hero-sub">
            Take a look inside our home &mdash; warm, welcoming, and designed with
            comfort in mind.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="photo-grid">
            {gallery.map((photo) => (
              <li key={photo.src} className="photo-tile">
                <figure className="photo-figure">
                  <img
                    src={photo.src}
                    alt={photo.label}
                    loading="lazy"
                  />
                  <figcaption>{photo.label}</figcaption>
                </figure>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </>
  )
}
