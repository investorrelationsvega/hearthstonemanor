import ContactForm from '../components/ContactForm.jsx'
import usePageMeta from '../hooks/usePageMeta.js'

export default function Contact() {
  usePageMeta({ title: 'Contact Us', description: 'Contact Hearthstone Manor in Spanish Fork, Utah. Call, text, email, or send a message to schedule a tour of our assisted living and memory care community.' })
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
                  <span className="phone-number">(801) 798-1500</span>
                  <span className="phone-actions">
                    <a href="tel:+18017981500" aria-label="Call (801) 798-1500">Call</a>
                    <span aria-hidden="true">·</span>
                    <a href="sms:+18017981500" aria-label="Text (801) 798-1500">Text</a>
                  </span>
                </div>
                <div className="phone-row">
                  <span className="phone-number">(801) 420-5196</span>
                  <span className="phone-actions">
                    <a href="tel:+18014205196" aria-label="Call (801) 420-5196">Call</a>
                    <span aria-hidden="true">·</span>
                    <a href="sms:+18014205196" aria-label="Text (801) 420-5196">Text</a>
                  </span>
                </div>
              </li>
              <li>
                <span className="phone-label">Email Us</span>
                <a className="phone-number" href="mailto:hsm.utah@gmail.com">
                  hsm.utah@gmail.com
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
