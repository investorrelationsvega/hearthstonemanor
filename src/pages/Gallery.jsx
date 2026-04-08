const gallery = [
  // Welcome / exterior
  { src: '/images/gallery/02-entrance-sign.jpg', label: 'Welcome to Hearthstone Manor' },
  { src: '/images/gallery/01-porch-mountain-view.jpg', label: 'Mountain Views from the Porch' },
  { src: '/images/activities/12-front-entrance.jpg', label: 'Covered Front Entrance' },

  // Common areas & fireplace
  { src: '/images/gallery/03-grand-fireplace.jpg', label: 'Grand Stone Fireplace' },
  { src: '/images/gallery/04-fireplace-lounge.jpg', label: 'Fireside Lounge' },
  { src: '/images/gallery/07-leather-lounge.jpg', label: 'Comfortable Common Area' },
  { src: '/images/activities/10-common-room.jpg', label: 'Bright Common Room' },

  // Dining
  { src: '/images/gallery/05-dining-fireplace.jpg', label: 'Dining by the Fire' },
  { src: '/images/gallery/12-dining-room.jpg', label: 'Home-Style Dining' },
  { src: '/images/activities/07-celebration-dining.jpg', label: 'Celebrations & Birthdays' },
  { src: '/images/activities/05-sunlit-dining.jpg', label: 'Sunlit Social Dining' },
  { src: '/images/gallery/06-sun-room.jpg', label: 'Bright Sun Room' },
  { src: '/images/activities/02-sun-room-puzzles.jpg', label: 'Puzzles & Games' },

  // Entertainment / gatherings
  { src: '/images/activities/04-lounge-tv.jpg', label: 'Movie Afternoons' },
  { src: '/images/activities/01-chapel-services.jpg', label: 'Religious Services' },
  { src: '/images/activities/03-chapel-gatherings.jpg', label: 'Community Gatherings' },
  { src: '/images/activities/08-music-room.jpg', label: 'Music & Devotionals' },
  { src: '/images/activities/11-fireplace-detail.jpg', label: 'Warm Fireside Moments' },

  // Private rooms
  { src: '/images/gallery/10-kitchenette.jpg', label: 'In-Room Kitchenette' },
  { src: '/images/gallery/11-apartment.jpg', label: 'Private Apartment' },

  // Outdoor & scenic
  { src: '/images/gallery/09-mountain-view.jpg', label: 'Spanish Fork Mountains' },
  { src: '/images/gallery/08-covered-porch.jpg', label: 'Covered Front Porch' },
  { src: '/images/activities/06-gazebo.jpg', label: 'Gazebo Conversations' },
  { src: '/images/activities/09-patio-view.jpg', label: 'Outdoor Patio' },
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
