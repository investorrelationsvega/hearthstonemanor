export async function onRequestGet(context) {
  const { env, request } = context

  // Basic Auth
  const auth = request.headers.get('Authorization')
  if (!auth || !auth.startsWith('Basic ')) {
    return unauthorized()
  }

  const [user, pass] = atob(auth.slice(6)).split(':')
  if (user !== env.ADMIN_USER || pass !== env.ADMIN_PASS) {
    return unauthorized()
  }

  // Query recent submissions
  const { results } = await env.DB.prepare(
    'SELECT * FROM submissions ORDER BY created_at DESC LIMIT 100'
  ).all()

  const rows = results
    .map(
      (r) => `
      <tr>
        <td>${esc(r.created_at)}</td>
        <td>${esc(r.name)}</td>
        <td><a href="tel:${esc(r.phone)}">${esc(r.phone)}</a></td>
        <td><a href="mailto:${esc(r.email)}">${esc(r.email)}</a></td>
        <td>${esc(r.message)}</td>
        <td>${esc(r.country)}</td>
      </tr>`
    )
    .join('')

  const html = `<!doctype html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1">
  <title>Hearthstone Manor — Lead Submissions</title>
  <style>
    *, *::before, *::after { box-sizing: border-box; }
    body { font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
           margin: 0; padding: 2rem; background: #f7f3ec; color: #2d4a35; }
    h1 { font-size: 1.5rem; margin-bottom: 1.5rem; }
    table { width: 100%; border-collapse: collapse; background: #fff;
            border-radius: 8px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,.08); }
    th, td { padding: .75rem 1rem; text-align: left; border-bottom: 1px solid #e3dccb;
             font-size: .9rem; vertical-align: top; }
    th { background: #2d4a35; color: #f7f3ec; font-weight: 600; font-size: .8rem;
         letter-spacing: .05em; text-transform: uppercase; }
    tr:last-child td { border-bottom: none; }
    a { color: #2d4a35; }
    .count { font-size: .85rem; color: #5f6a5c; margin-bottom: 1rem; }
  </style>
</head>
<body>
  <h1>Hearthstone Manor — Lead Submissions</h1>
  <p class="count">${results.length} submission${results.length !== 1 ? 's' : ''}</p>
  <table>
    <thead>
      <tr>
        <th>Date</th><th>Name</th><th>Phone</th><th>Email</th><th>Message</th><th>Country</th>
      </tr>
    </thead>
    <tbody>${rows || '<tr><td colspan="6">No submissions yet.</td></tr>'}</tbody>
  </table>
</body>
</html>`

  return new Response(html, {
    status: 200,
    headers: { 'Content-Type': 'text/html; charset=utf-8' },
  })
}

function unauthorized() {
  return new Response('Unauthorized', {
    status: 401,
    headers: { 'WWW-Authenticate': 'Basic realm="Hearthstone Admin"' },
  })
}

function esc(str) {
  if (!str) return ''
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}
