import { useState } from 'react'

/**
 * Reusable Netlify-Forms contact form. Used on the Home page Get in
 * Touch section and on the Contact page. Keeps a single source of
 * truth so the form schema, validation, and submission behavior stay
 * consistent in both places.
 */
export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)

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

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <strong>Thank you!</strong> Your message has been received. We&rsquo;ll
        be in touch shortly.
      </div>
    )
  }

  return (
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
  )
}
