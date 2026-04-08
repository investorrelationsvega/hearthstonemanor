import { Link } from 'react-router-dom'

export default function AssistedLiving() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>What is Assisted Living?</h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="lede">
            Hearthstone offers an alternative for seniors who may need additional help
            with their day-to-day needs. We provide a home-style environment with
            engaging activities, along with excellent care from our staff. Each
            apartment comes with a kitchenette and a large shower and we encourage you
            to decorate it to make your loved one feel at home. Our goal is to provide
            world-class service and to attend to your loved one&rsquo;s daily needs. We
            promise to provide your loved one with the individual attention they
            deserve. Hearthstone truly provides that home-style feel &mdash; we are
            nestled in a quiet neighborhood, surrounded by majestic mountains. We
            provide stimulating activities and partner with local church volunteers to
            offer religious meetings and programs. Please contact us to schedule a
            tour.
          </p>

          <div className="inline-cta">
            <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
          </div>
        </div>
      </section>
    </>
  )
}
