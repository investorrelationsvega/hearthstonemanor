import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function MemoryCare() {
  usePageMeta({ title: 'Memory Care in Spanish Fork, UT', description: 'Secure memory care in Spanish Fork, Utah for loved ones living with Alzheimer’s or other forms of dementia. A separate memory care wing at Hearthstone Manor with caregivers around the clock. Schedule a tour.' })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Memory Care in Spanish Fork</h1>
          <p className="page-hero-sub">
            A separate, secure memory care wing where your loved one is known,
            looked after, and treated with dignity every day.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="lede">
            When someone you love begins living with Alzheimer&rsquo;s disease
            or another form of dementia, home can start to feel uncertain for
            everyone. Hearthstone Manor&rsquo;s memory care wing is a
            separate, secure part of our community where residents can move
            through the day safely, with caregivers close by around the clock.
          </p>

          <p className="lede">
            Secure doesn&rsquo;t have to mean cold. Memory care at Hearthstone
            is guided by the same values as the rest of our home: a small,
            locally owned community where staff know residents by name, learn
            their routines and preferences, and pay attention to the little
            things. Familiar faces and a steady, predictable day can bring real
            comfort to someone living with memory loss, and real peace of mind
            to the family who loves them.
          </p>

          <p className="lede">
            Every person&rsquo;s experience with memory loss is different, so
            we start by listening. Tell us who your loved one is, what their
            days look like now, and what worries you most. We&rsquo;ll talk
            honestly with you about whether our memory care wing is the right
            fit.
          </p>

          <p className="lede">
            Because assisted living and memory care are part of the same
            Hearthstone community, you can explore both in a single visit. If
            a loved one&rsquo;s needs change over time, the conversation about
            what comes next happens with people who already know them.
          </p>

          <p className="lede">
            Have questions about cost, care needs, or timing? Call or text us
            at <a href="tel:+18016063388">(801) 606-3388</a>, or schedule a
            tour to see the memory care wing in person.
          </p>

          <div className="inline-cta" style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
            <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
            <Link to="/assisted-living" className="btn btn-ghost btn-ghost-dark">Explore Assisted Living</Link>
          </div>
        </div>
      </section>
    </>
  )
}
