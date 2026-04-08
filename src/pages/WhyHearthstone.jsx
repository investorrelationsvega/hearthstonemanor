function HeartIcon() {
  return (
    <svg
      className="pillar-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
    </svg>
  )
}

function HandsIcon() {
  return (
    <svg
      className="pillar-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M11 14h2a2 2 0 0 0 2-2v-4a2 2 0 0 1 4 0v8a6 6 0 0 1-6 6h-2a6 6 0 0 1-5.66-4H7" />
      <path d="M6 10V4a2 2 0 1 1 4 0v6" />
      <path d="M10 10V2.5a2 2 0 1 1 4 0V10" />
      <path d="M14 10V4a2 2 0 0 1 4 0v6" />
    </svg>
  )
}

function TagIcon() {
  return (
    <svg
      className="pillar-icon-svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.6"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M20.59 13.41 13.42 20.58a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
      <line x1="7" y1="7" x2="7.01" y2="7" />
    </svg>
  )
}

export default function WhyHearthstone() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>The <span className="script">Hearthstone</span> Advantage</h1>
          <p className="page-hero-sub">
            We believe we should be an extension of your home and deliver the same
            unique loving care you would provide for your mom, dad, or loved one. Our
            goal is to make a personal connection with each of our residents and to
            lift their spirits.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="three-col">
            <article className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <HeartIcon />
              </div>
              <h2>Individual Care</h2>
              <p>
                Our vision is to treat you like we would treat our own family. That
                includes quickly responding to your calls, understanding your routines,
                and providing a clean and comfortable environment. We offer exercise
                classes to get the body moving and to mingle with other residents.
                Cleaning and laundry services provided weekly or more frequently as
                needed.
              </p>
            </article>

            <article className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <HandsIcon />
              </div>
              <h2>Staff Support</h2>
              <p>
                At Hearthstone Manor, we believe the best resident experience comes
                from having our staff focus on what they do best. CNAs focus on daily
                needs, kitchen staff focus on the dining experience, and the Activities
                Director focuses on fun. The Administrator and Owner is actively
                engaged and available to residents and their families, even
                after-hours and weekends.
              </p>
            </article>

            <article className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <TagIcon />
              </div>
              <h2>Straight Forward Pricing</h2>
              <p>
                With our competitive pricing on our all-inclusive services, you will
                always know what you are paying. Medicaid New Choice Waiver Accepted.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
