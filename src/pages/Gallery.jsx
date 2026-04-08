const placeholders = [
  'Front Entrance',
  'Resident Apartment',
  'Dining Room',
  'Common Lounge',
  'Kitchenette',
  'Garden Patio',
  'Activity Room',
  'Hallway',
  'Beauty Salon',
  'Mountain View',
  'Library Nook',
  'Welcome Foyer',
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
            {placeholders.map((label, i) => (
              <li key={label} className="photo-tile">
                <div
                  className="photo-placeholder"
                  role="img"
                  aria-label={`${label} placeholder`}
                >
                  <span className="photo-number">{String(i + 1).padStart(2, '0')}</span>
                  <span className="photo-label">{label}</span>
                </div>
              </li>
            ))}
          </ul>
          <p className="muted center" style={{ marginTop: '1.5rem' }}>
            Real facility photos will replace these placeholders soon.
          </p>
        </div>
      </section>
    </>
  )
}
