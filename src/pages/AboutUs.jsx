import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function AboutUs() {
  usePageMeta({ title: 'About Us', description: 'Hearthstone Manor has served Spanish Fork and Utah County since 2000. Locally owned, family-focused senior care with transparent pricing and a dedicated staff.' })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>About Hearthstone Manor</h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="lede">
            Hearthstone Manor has been caring for seniors in Spanish Fork
            since 2000. We&rsquo;re locally owned and operated, and that
            difference shows in how we run things.
          </p>

          <p className="lede">
            Families choose Hearthstone because we listen. If a meal
            isn&rsquo;t quite right, we fix it. If a resident wants a new
            activity, we find a way. Our residents aren&rsquo;t numbers in a
            file, they&rsquo;re people we know by name and genuinely care
            about.
          </p>

          <p className="lede">
            We offer both assisted living and memory care, with transparent
            pricing and a stable, dedicated staff. If you&rsquo;re exploring
            your options, we&rsquo;d love to show you around and answer any
            questions.
          </p>

          <div className="inline-cta">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
