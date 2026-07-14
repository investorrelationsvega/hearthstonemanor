import { useState } from 'react'

const NETLIFY_FORM_URL = 'https://hearthstonemanor.netlify.app/'

function formatPhone(value) {
  const digits = value.replace(/\D/g, '').slice(0, 10)
  if (digits.length <= 3) return digits.length ? `(${digits}` : ''
  if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
  return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
}

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [phone, setPhone] = useState('')

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const form = e.target
    const formData = new URLSearchParams({
      'form-name': 'contact',
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value,
    })

    fetch(NETLIFY_FORM_URL, {
      method: 'POST',
      mode: 'no-cors',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: formData.toString(),
    })
      .then(() => setSubmitted(true))
      .catch(() => setError(true))
  }

  if (submitted) {
    return (
      <div className="form-success" role="status">
        <strong>Thank you!</strong> Your message has been received. We&rsquo;ll
        be in touch shortly.
      </div>
    )
  }

  if (error) {
    return (
      <div className="form-success" role="status" style={{ borderColor: '#c44', color: '#c44' }}>
        <strong>Something went wrong.</strong> Please call us at (801) 606-3388
        or email hsm.utah@gmail.com.
      </div>
    )
  }

  return (
    <form
      className="contact-form"
      action={NETLIFY_FORM_URL}
      method="POST"
      onSubmit={handleSubmit}
    >
      <input type="hidden" name="form-name" value="contact" />

      <label>
        <span>Name</span>
        <input type="text" name="name" required autoComplete="name" />
      </label>

      <label>
        <span>Phone</span>
        <input
          type="tel"
          name="phone"
          required
          autoComplete="tel"
          placeholder="(801) 555-1234"
          value={phone}
          onChange={handlePhoneChange}
          pattern="\(\d{3}\) \d{3}-\d{4}"
          title="10-digit phone number"
        />
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
