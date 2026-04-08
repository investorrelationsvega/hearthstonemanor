import { Link } from 'react-router-dom'

export default function MemoryCare() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>What is Memory Care?</h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="lede">
            At Hearthstone, we provide a safe and caring environment for those
            suffering memory loss and other dementia disorders. Our trained staff will
            help provide the daily needs of your loved ones, including activities to
            stimulate the senses. Additional tools may include pressure sensitive pads
            and motion detection which are tied to our paging system to alert the
            staff.
          </p>

          <div className="inline-cta">
            <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
          </div>
        </div>
      </section>
    </>
  )
}
