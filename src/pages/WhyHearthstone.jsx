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

import usePageMeta from '../hooks/usePageMeta.js'

export default function WhyHearthstone() {
  usePageMeta({ title: 'Why Hearthstone', description: 'Individual care, dedicated staff, and transparent all-inclusive pricing. Learn what makes Hearthstone Manor different from other assisted living facilities in Utah County.' })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>The Hearthstone Advantage</h1>
          <p className="page-hero-sub">
            Choosing the right assisted living or memory care community is one
            of the most important decisions your family will make. At
            Hearthstone Manor, we&rsquo;ve built everything around one idea:
            your loved one deserves to feel at home.
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
                Here, care is personal. Our staff gets to know each resident,
                their routines, their preferences, and the little things that
                make them feel comfortable and loved.
              </p>
            </article>

            <article className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <HandsIcon />
              </div>
              <h2>Dedicated Staff</h2>
              <p>
                Great care happens when everyone on the team can focus on what
                they do best. CNAs are devoted to personal daily care. Our
                kitchen team is focused on nourishing, enjoyable meals. Our
                Activities Director keeps life full and fun. Residents and
                families can count on attentive, around-the-clock care and
                support.
              </p>
            </article>

            <article className="pillar">
              <div className="pillar-icon" aria-hidden="true">
                <TagIcon />
              </div>
              <h2>Transparent Pricing</h2>
              <p>
                No surprises. Our all-inclusive pricing covers the care and
                services your loved one needs, so you always know what to
                expect. We accept Medicaid New Choice Waiver and are happy to
                walk you through costs and what&rsquo;s included before you
                ever commit to anything.
              </p>
            </article>
          </div>
        </div>
      </section>
    </>
  )
}
