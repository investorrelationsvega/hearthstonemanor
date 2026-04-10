import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function AssistedLiving() {
  usePageMeta({ title: 'Assisted Living', description: 'Assisted living in Spanish Fork, Utah with private apartments, kitchenettes, walk-in showers, daily activities, and around-the-clock care. Medicaid New Choice Waiver accepted.' })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Assisted Living in Spanish Fork</h1>
        </div>
      </section>

      <section className="section">
        <div className="container narrow">
          <p className="lede">
            If your loved one needs a little extra help day-to-day, Hearthstone
            Manor is worth a close look. Our assisted living community in
            Spanish Fork offers the independence of home with the reassurance
            of dedicated, around-the-clock care.
          </p>

          <p className="lede">
            Each private apartment includes a kitchenette and a large walk-in
            shower. We encourage residents to bring their own furnishings and
            d&eacute;cor, because a space that feels familiar makes all the
            difference. Staff attends to daily needs, medication reminders,
            personal care, meals, and housekeeping, so residents can focus on
            living.
          </p>

          <p className="lede">
            We&rsquo;re nestled in a quiet Spanish Fork neighborhood with the
            Wasatch Mountains right out the window. We host engaging daily
            activities and partner with local church volunteers to provide
            regular religious services and programs for those who want them.
          </p>

          <p className="lede">
            We accept Medicaid New Choice Waiver. Come see it for yourself.
          </p>

          <div className="inline-cta">
            <Link to="/contact" className="btn btn-primary">Schedule a Tour</Link>
          </div>
        </div>
      </section>
    </>
  )
}
