import { Link } from 'react-router-dom'

export default function AboutUs() {
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
            Hearthstone Manor has served Spanish Fork and the surrounding community
            since 2000. As a locally owned and operated assisted living facility, we
            offer quality home-style living as an alternative to traditional nursing
            homes or larger corporate facilities. Hearthstone values your input and
            will quickly make adjustments to ensure our activities, meals, and services
            are tailored around those things you enjoy.
          </p>

          <div className="inline-cta">
            <Link to="/contact" className="btn btn-primary">Get in Touch</Link>
          </div>
        </div>
      </section>
    </>
  )
}
