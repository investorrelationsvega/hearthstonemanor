import { Link } from 'react-router-dom'
import usePageMeta from '../hooks/usePageMeta.js'

export default function NotFound() {
  usePageMeta({ title: 'Page Not Found', description: 'The page you are looking for could not be found. Visit Hearthstone Manor, assisted living and memory care in Spanish Fork, Utah.', noindex: true })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Page Not Found</h1>
          <p className="page-hero-sub">
            The page you&rsquo;re looking for doesn&rsquo;t exist or has been moved.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container narrow center">
          <p className="lede">
            Let us help you find what you need.
          </p>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', justifyContent: 'center', marginTop: '1.5rem' }}>
            <Link to="/" className="btn btn-primary">Back to Home</Link>
            <Link to="/contact" className="btn btn-ghost-dark">Contact Us</Link>
          </div>
        </div>
      </section>
    </>
  )
}
