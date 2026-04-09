import { Link } from 'react-router-dom'

export default function MemoryCare() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Memory Care in Spanish Fork</h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="lede">
            When a loved one is living with Alzheimer&rsquo;s, dementia, or
            other forms of memory loss, finding a place where they&rsquo;ll be
            truly safe and genuinely cared for is everything. At Hearthstone
            Manor, our memory care program is built around dignity, routine,
            and meaningful connection.
          </p>

          <p className="lede">
            Our trained staff provides hands-on daily support, from personal
            care to sensory-stimulating activities designed to engage and
            comfort residents at every stage of memory loss. For added safety,
            we use pressure-sensitive pads and motion detection tied directly
            to our staff paging system, so help is always close.
          </p>

          <p className="lede">
            Memory care at Hearthstone isn&rsquo;t about managing symptoms.
            It&rsquo;s about honoring the whole person.
          </p>

          <div className="inline-cta">
            <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
          </div>
        </div>
      </section>
    </>
  )
}
