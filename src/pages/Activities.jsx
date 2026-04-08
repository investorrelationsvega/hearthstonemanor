const placeholders = [
  'Music Hour',
  'Arts & Crafts',
  'Bingo Night',
  'Birthday Celebrations',
  'Exercise Class',
  'Movie Afternoon',
  'Holiday Gathering',
  'Outdoor Stroll',
  'Card Games',
  'Baking Together',
  'Gardening',
  'Church Services',
]

export default function Activities() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Activities</h1>
          <p className="page-hero-sub">
            Days at Hearthstone are full of connection, laughter, and little
            adventures. Our Activities Director plans something for everyone.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <ul className="photo-grid">
            {placeholders.map((label, i) => (
              <li key={label} className="photo-tile">
                <div
                  className="photo-placeholder activities"
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
            Real activity photos will replace these placeholders soon.
          </p>
        </div>
      </section>
    </>
  )
}
