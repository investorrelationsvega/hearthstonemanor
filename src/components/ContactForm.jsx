import { useState } from 'react'

export default function ContactForm() {
  const [submitted, setSubmitted] = useState(false)
  const [error, setError] = useState(false)
  const [phone, setPhone] = useState('')

  function formatPhone(value) {
    const digits = value.replace(/\D/g, '').slice(0, 10)
    if (digits.length <= 3) return digits.length ? `(${digits}` : ''
    if (digits.length <= 6) return `(${digits.slice(0, 3)}) ${digits.slice(3)}`
    return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6)}`
  }

  const handlePhoneChange = (e) => {
    setPhone(formatPhone(e.target.value))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const payload = Object.fromEntries(new FormData(e.target))
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      })
      if (res.ok) {
        setSubmitted(true)
      } else {
        setError(true)
      }
    } catch {
      setError(true)
    }
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
      onSubmit={handleSubmit}
    >
      {/* Honeypot — bots fill this, humans don't see it */}
      <p className="hp-field">
        <label>
          Company <input type="text" name="company" autoComplete="off" tabIndex={-1} />
        </label>
      </p>

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
