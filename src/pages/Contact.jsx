import ContactForm from '../components/ContactForm.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Contact() {
  usePageMeta({ title: 'Contact Us', description: 'Contact Hearthstone Manor in Spanish Fork, Utah. Call, text, email, or send a message to schedule a tour of our assisted living community.' })
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Hearthstone Manor</h1>
          <p className="page-hero-sub">
            We know this is a big decision, and we&rsquo;re here to help.
            Whether you have questions, want to see the facility, or just need
            to talk through your options, reach out any way that works for you.
          </p>
        </div>
      </section>

      <section className="section">
        <div className="container contact-grid contact-grid-3col">
          <div className="contact-phones-section contact-info">
            <h2>Get in Touch</h2>
            <ul className="contact-phones">
              <li>
                <span className="phone-label">Call / Text Us</span>
                <div className="phone-row">
                  <span className="phone-number">(801) 606-3388</span>
                  <span className="phone-actions">
                    <a href="tel:+18016063388" aria-label="Call (801) 606-3388">Call</a>
                    <span aria-hidden="true">·</span>
                    <a href="sms:+18016063388" aria-label="Text (801) 606-3388">Text</a>
                  </span>
                </div>
              </li>
              <li>
                <span className="phone-label">Email Us</span>
                <a className="phone-number" href="mailto:hsm.utah@gmail.com">
                  hsm.utah@gmail.com
                </a>
              </li>
              <li>
                <span className="phone-label">Follow Us</span>
                <a
                  className="phone-number contact-facebook"
                  href="https://www.facebook.com/profile.php?id=61585751841057"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <svg className="contact-facebook-icon" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                    <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
                  </svg>
                  Facebook
                </a>
              </li>
            </ul>
          </div>

          <div className="contact-map-section">
            <h2>Visit Us</h2>
            <address className="visit-us-address">
              1424 S 1700 E<br />
              Spanish Fork, UT 84660
            </address>
            <div className="map-wrap">
              <iframe
                title="Hearthstone Manor Location"
                src="https://www.google.com/maps?q=1424+S+1700+E,+Spanish+Fork,+UT+84660&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          <div className="contact-form-section contact-info">
            <h2>Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </section>
    </>
  )
}
