const activities = [
  { src: '/images/activities/01-chapel-services.jpg', label: 'Religious Services' },
  { src: '/images/activities/02-sun-room-puzzles.jpg', label: 'Puzzles & Games' },
  { src: '/images/activities/03-chapel-gatherings.jpg', label: 'Community Gatherings' },
  { src: '/images/activities/04-lounge-tv.jpg', label: 'Movie Afternoons' },
  { src: '/images/activities/05-sunlit-dining.jpg', label: 'Sunlit Social Dining' },
  { src: '/images/activities/06-gazebo.jpg', label: 'Gazebo Conversations' },
  { src: '/images/activities/07-celebration-dining.jpg', label: 'Celebrations & Birthdays' },
  { src: '/images/activities/08-music-room.jpg', label: 'Music & Devotionals' },
  { src: '/images/activities/09-patio-view.jpg', label: 'Outdoor Patio' },
  { src: '/images/activities/10-common-room.jpg', label: 'Common Room Activities' },
  { src: '/images/activities/11-fireplace-detail.jpg', label: 'Warm Fireside Moments' },
  { src: '/images/activities/12-front-entrance.jpg', label: 'Welcoming Entrance' },
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
            {activities.map((photo) => (
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
