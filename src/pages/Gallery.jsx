const galleryGroups = [
  {
    heading: 'Outdoor Spaces',
    items: [
      { src: '/images/hero/daylight-entrance.jpg', caption: 'Welcome to Hearthstone Manor' },
      { src: '/images/hero/twilight-entrance.jpg', caption: 'Twilight at the front entrance' },
      { src: '/images/gallery/01-porch-mountain-view.jpg', caption: 'Mountain views from the covered porch' },
      { src: '/images/activities/12-front-entrance.jpg', caption: 'Covered front entrance' },
      { src: '/images/gallery/08-covered-porch.jpg', caption: 'Front porch in the afternoon light' },
      { src: '/images/gallery/09-mountain-view.jpg', caption: 'The Wasatch Mountains from our street' },
      { src: '/images/activities/06-gazebo.jpg', caption: 'Backyard gazebo for conversation and quiet' },
      { src: '/images/activities/09-patio-view.jpg', caption: 'Outdoor patio' },
    ],
  },
  {
    heading: 'Common Areas',
    items: [
      { src: '/images/gallery/03-grand-fireplace.jpg', caption: 'The grand stone fireplace in the lobby' },
      { src: '/images/gallery/04-fireplace-lounge.jpg', caption: 'Fireside lounge with dining tables' },
      { src: '/images/gallery/07-leather-lounge.jpg', caption: 'Leather sofas and the stone hearth' },
      { src: '/images/activities/10-common-room.jpg', caption: 'Open common room looking onto the hearth' },
      { src: '/images/activities/11-fireplace-detail.jpg', caption: 'Warm fireside moments' },
      { src: '/images/activities/04-lounge-tv.jpg', caption: 'Lounge with TV for movie afternoons' },
      { src: '/images/gallery/06-sun-room.jpg', caption: 'Bright sun room with vaulted ceilings' },
      { src: '/images/gallery/05-dining-fireplace.jpg', caption: 'Dining by the fire' },
      { src: '/images/gallery/12-dining-room.jpg', caption: 'Home-style dining room' },
      { src: '/images/activities/07-celebration-dining.jpg', caption: 'Birthdays and celebrations together' },
      { src: '/images/activities/05-sunlit-dining.jpg', caption: 'Sunlit social dining' },
    ],
  },
  {
    heading: 'Private Apartments',
    items: [
      { src: '/images/gallery/11-apartment.jpg', caption: 'A private furnished apartment' },
      { src: '/images/gallery/10-kitchenette.jpg', caption: 'In-room kitchenette with custom wood cabinetry' },
    ],
  },
  {
    heading: 'Life at Hearthstone',
    items: [
      { src: '/images/activities/01-chapel-services.jpg', caption: 'Religious services in the chapel' },
      { src: '/images/activities/03-chapel-gatherings.jpg', caption: 'Community gatherings' },
      { src: '/images/activities/08-music-room.jpg', caption: 'Music and devotionals' },
      { src: '/images/activities/02-sun-room-puzzles.jpg', caption: 'Puzzles and games in the sun room' },
    ],
  },
]

import usePageMeta from '../hooks/usePageMeta.js'

export default function Gallery() {
  usePageMeta({ title: 'Gallery', description: 'Take a look inside Hearthstone Manor. Photos of our common areas, private apartments, outdoor spaces, chapel, and daily life at our Spanish Fork assisted living community.' })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Gallery</h1>
          <p className="page-hero-sub">
            Take a look inside our home. Warm, welcoming, and designed with
            comfort in mind.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          {galleryGroups.map((group) => (
            <div key={group.heading} className="gallery-group">
              <h2 className="gallery-group-heading">{group.heading}</h2>
              <div className="gallery-grid">
                {group.items.map((item) => (
                  <figure
                    key={item.src}
                    className="gallery-item"
                    tabIndex={0}
                  >
                    <img
                      src={item.src}
                      alt={item.caption}
                      loading="lazy"
                    />
                    <figcaption className="gallery-caption">
                      <span>{item.caption}</span>
                    </figcaption>
                  </figure>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  )
}
