export async function onRequestPost(context) {
  const { env, request } = context

  try {
    const body = await request.json()
    const { name, phone, email, message, company } = body

    // Honeypot — if the invisible "company" field is filled, it's a bot
    if (company) {
      return new Response(JSON.stringify({ ok: true }), {
        status: 200,
        headers: { 'Content-Type': 'application/json' },
      })
    }

    // Validate required fields
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ ok: false, error: 'Name, email, and message are required.' }),
        { status: 400, headers: { 'Content-Type': 'application/json' } }
      )
    }

    // Capture metadata from the request
    const userAgent = request.headers.get('user-agent') || ''
    const ip = request.headers.get('cf-connecting-ip') || ''
    const country = request.headers.get('cf-ipcountry') || ''

    // Insert into D1
    await env.DB.prepare(
      `INSERT INTO submissions (name, phone, email, message, user_agent, ip_address, country)
       VALUES (?, ?, ?, ?, ?, ?, ?)`
    )
      .bind(name, phone || '', email, message, userAgent, ip, country)
      .run()

    // Fan-out to downstream destinations (dashboards, CRMs, webhooks)
    // Each is guarded by an env var — if unset, skipped silently.
    const promises = []

    if (env.DASHBOARD_URL) {
      promises.push(
        fetch(env.DASHBOARD_URL, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            ...(env.DASHBOARD_KEY && { Authorization: `Bearer ${env.DASHBOARD_KEY}` }),
          },
          body: JSON.stringify({
            facility_id: 'hearthstone-manor',
            name,
            phone,
            email,
            message,
          }),
        })
      )
    }

    if (promises.length) {
      await Promise.allSettled(promises)
    }

    return new Response(JSON.stringify({ ok: true }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    })
  } catch (err) {
    return new Response(
      JSON.stringify({ ok: false, error: 'Server error. Please try again.' }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    )
  }
}
