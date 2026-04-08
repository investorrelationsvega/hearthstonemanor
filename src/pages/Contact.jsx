import { useState } from 'react'

export default function Contact() {
  const [submitted, setSubmitted] = useState(false)

  // Netlify Forms: submit via fetch so we can show a nice confirmation
  // while still using Netlify's server-side capture (form is declared
  // statically with data-netlify and the hidden form-name input).
  const encode = (data) =>
    Object.keys(data)
      .map((k) => encodeURIComponent(k) + '=' + encodeURIComponent(data[k]))
      .join('&')

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const data = {
      'form-name': 'contact',
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    }

    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: encode(data),
    })
      .then(() => setSubmitted(true))
      .catch(() => setSubmitted(true))
  }

  return (
    <>
      <section className="page-hero">
        <div className="container">
          <h1>Contact Hearthstone Manor</h1>
          <p className="page-hero-sub">
            We&rsquo;d love to hear from you. Call us, send a message, or schedule a
            tour to see our home in person.
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

            <h2>Call Us</h2>
            <ul className="contact-list">
              <li>
                <strong>Facility:</strong>{' '}
                <a href="tel:+18017981500">(801) 798-1500</a>
              </li>
              <li>
                <strong>Tours:</strong>{' '}
                <a href="tel:+18014205196">(801) 420-5196</a>
              </li>
            </ul>

            <h2>Send a Message</h2>
            {submitted ? (
              <div className="form-success" role="status">
                <strong>Thank you!</strong> Your message has been received. We&rsquo;ll
                be in touch shortly.
              </div>
            ) : (
              <form
                className="contact-form"
                name="contact"
                method="POST"
                data-netlify="true"
                netlify-honeypot="bot-field"
                onSubmit={handleSubmit}
              >
                {/* Netlify needs these hidden fields */}
                <input type="hidden" name="form-name" value="contact" />
                <p className="hp-field">
                  <label>
                    Don&rsquo;t fill this out: <input name="bot-field" />
                  </label>
                </p>

                <label>
                  <span>Name</span>
                  <input type="text" name="name" required autoComplete="name" />
                </label>

                <label>
                  <span>Phone</span>
                  <input type="tel" name="phone" required autoComplete="tel" />
                </label>

                <label>
                  <span>Email</span>
                  <input type="email" name="email" required autoComplete="email" />
                </label>

                <label>
                  <span>Message</span>
                  <textarea name="message" rows="5" required></textarea>
                </label>

                <button type="submit" className="btn btn-primary">Send Message</button>
              </form>
            )}
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
