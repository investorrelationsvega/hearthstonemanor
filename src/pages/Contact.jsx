import ContactForm from '../components/ContactForm.jsx'

export default function Contact() {
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
        <div className="container contact-grid">
          <div className="contact-info">
            <h2>Visit Us</h2>
            <address>
              1424 S 1700 E<br />
              Spanish Fork, UT 84660
            </address>

            <h2>Get in Touch</h2>
            <ul className="contact-phones">
              <li>
                <span className="phone-label">Call us</span>
                <a className="phone-number" href="tel:+18017981500">
                  (801) 798-1500
                </a>
                <a className="phone-number" href="tel:+18014205196">
                  (801) 420-5196
                </a>
              </li>
              <li>
                <span className="phone-label">Text us</span>
                <a className="phone-number" href="sms:+18017981500">
                  (801) 798-1500
                </a>
                <a className="phone-number" href="sms:+18014205196">
                  (801) 420-5196
                </a>
              </li>
              <li>
                <span className="phone-label">Email us</span>
                <a className="phone-number" href="mailto:hsm.utah@gmail.com">
                  hsm.utah@gmail.com
                </a>
              </li>
            </ul>

            <h2>Send a Message</h2>
            <ContactForm />
          </div>

          <div className="contact-map">
            <h2>Find Us</h2>
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
        </div>
      </section>
    </>
  )
}
