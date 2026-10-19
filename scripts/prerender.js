/**
 * Build-time prerender. Runs after `vite build` (client) and
 * `vite build --ssr` (server entry). For every route it renders the
 * React tree to HTML, injects it into #root of the built index.html,
 * swaps in the page's own <title> / description / canonical / Open
 * Graph / robots tags, and writes a static file crawlers can read
 * without running JavaScript.
 *
 * Output naming follows Cloudflare Pages route matching:
 *   /            -> dist/index.html
 *   /about       -> dist/about.html   (served at /about, no trailing slash)
 *   unknown path -> dist/404.html     (noindex)
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath, pathToFileURL } from 'node:url'

const root = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..')
const distDir = path.join(root, 'dist')
const ssrDir = path.join(root, 'dist-ssr')

const template = fs.readFileSync(path.join(distDir, 'index.html'), 'utf8')
const { render, routes } = await import(
  pathToFileURL(path.join(ssrDir, 'entry-server.js')).href
)

const escapeAttr = (s) =>
  String(s)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')

function replaceOrFail(html, pattern, replacement, label) {
  if (!pattern.test(html)) {
    throw new Error(`prerender: could not find ${label} in dist/index.html`)
  }
  return html.replace(pattern, replacement)
}

function buildPage(url, outPath) {
  const { html: appHtml, head } = render(url)
  if (!head.title) throw new Error(`prerender: ${url} did not call usePageMeta`)

  const t = escapeAttr(head.title)
  const d = escapeAttr(head.description)
  const u = escapeAttr(head.url)
  let page = template

  page = replaceOrFail(page, /<title>[\s\S]*?<\/title>/, `<title>${t}</title>`, '<title>')
  page = replaceOrFail(page, /<meta name="description" content="[^"]*"\s*\/?>/, `<meta name="description" content="${d}" />`, 'meta description')
  page = replaceOrFail(page, /<meta name="robots" content="[^"]*"\s*\/?>/, `<meta name="robots" content="${escapeAttr(head.robots)}" />`, 'meta robots')
  page = replaceOrFail(page, /<link rel="canonical" href="[^"]*"\s*\/?>/, `<link rel="canonical" href="${u}" />`, 'canonical')
  page = replaceOrFail(page, /<meta property="og:title" content="[^"]*"\s*\/?>/, `<meta property="og:title" content="${t}" />`, 'og:title')
  page = replaceOrFail(page, /<meta property="og:description" content="[^"]*"\s*\/?>/, `<meta property="og:description" content="${d}" />`, 'og:description')
  page = replaceOrFail(page, /<meta property="og:url" content="[^"]*"\s*\/?>/, `<meta property="og:url" content="${u}" />`, 'og:url')
  page = replaceOrFail(page, /<meta name="twitter:title" content="[^"]*"\s*\/?>/, `<meta name="twitter:title" content="${t}" />`, 'twitter:title')
  page = replaceOrFail(page, /<meta name="twitter:description" content="[^"]*"\s*\/?>/, `<meta name="twitter:description" content="${d}" />`, 'twitter:description')

  const pathAttr = url === '/404' ? '/404' : url
  page = replaceOrFail(
    page,
    /<div id="root"><\/div>/,
    `<div id="root" data-prerendered-path="${escapeAttr(pathAttr)}">${appHtml}</div>`,
    '<div id="root"></div>',
  )

  fs.mkdirSync(path.dirname(outPath), { recursive: true })
  fs.writeFileSync(outPath, page)
  console.log(`prerendered ${url.padEnd(18)} -> ${path.relative(root, outPath)}`)
}

for (const url of routes) {
  const file = url === '/' ? 'index.html' : `${url.slice(1)}.html`
  buildPage(url, path.join(distDir, file))
}

// Not-found page (rendered by the catch-all route). Served by
// Cloudflare Pages for unknown paths when no redirect rule matches.
buildPage('/404', path.join(distDir, '404.html'))

fs.rmSync(ssrDir, { recursive: true, force: true })
