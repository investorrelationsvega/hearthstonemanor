import { createContext, useContext, useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export const SITE_URL = 'https://www.hearthstonemanor.com'
export const DEFAULT_TITLE =
  'Hearthstone Manor | Assisted Living & Memory Care in Spanish Fork, UT'
const OG_IMAGE = `${SITE_URL}/images/hero/daylight-entrance.jpg`

/**
 * During build-time prerendering (scripts/prerender.js) the server
 * entry provides a plain object through this context. usePageMeta
 * writes the page's head values into it synchronously so the
 * prerender script can inject the correct per-route <title>, meta
 * description, canonical, Open Graph, and robots tags into the static
 * HTML. In the browser the context is null and the effect below
 * updates document.head as the visitor navigates.
 */
export const HeadContext = createContext(null)

/**
 * Sets <title>, <meta name="description">, <link rel="canonical">,
 * Open Graph / Twitter tags, and (optionally) a noindex robots tag
 * for the current page. Call once at the top of each page component.
 */
export default function usePageMeta({ title, description, noindex = false }) {
  const { pathname } = useLocation()
  const head = useContext(HeadContext)
  const url = `${SITE_URL}${pathname}`
  const fullTitle = title ? `${title} | Hearthstone Manor` : DEFAULT_TITLE
  const robots = noindex ? 'noindex, follow' : 'index, follow'

  if (head) {
    head.title = fullTitle
    head.description = description || ''
    head.url = url
    head.robots = robots
  }

  useEffect(() => {
    document.title = fullTitle
    setMeta('description', description)
    setMeta('robots', robots)
    setLink('canonical', url)

    // Open Graph
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:image', OG_IMAGE, 'property')
    setMeta('og:site_name', 'Hearthstone Manor', 'property')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image', 'name')
    setMeta('twitter:title', fullTitle, 'name')
    setMeta('twitter:description', description, 'name')
    setMeta('twitter:image', OG_IMAGE, 'name')
  }, [fullTitle, description, url, robots])
}

function setMeta(key, value, attr = 'name') {
  let el = document.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', value || '')
}

function setLink(rel, href) {
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}
