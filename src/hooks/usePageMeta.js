import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

/**
 * Sets <title>, <meta name="description">, and <link rel="canonical">
 * for the current page. Call once at the top of each page component.
 *
 * Also updates Open Graph tags so social-media shares always show
 * the correct title/description/URL for the page the user linked to,
 * not just the Home page defaults from index.html.
 */
export default function usePageMeta({ title, description }) {
  const { pathname } = useLocation()
  const url = `https://www.hearthstonemanor.com${pathname}`
  const fullTitle = title
    ? `${title} | Hearthstone Manor`
    : 'Hearthstone Manor | Assisted Living & Memory Care in Spanish Fork, UT'

  useEffect(() => {
    // <title>
    document.title = fullTitle

    // <meta name="description">
    setMeta('description', description)

    // <link rel="canonical">
    setLink('canonical', url)

    // Open Graph
    setMeta('og:title', fullTitle, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:type', 'website', 'property')
    setMeta('og:image', 'https://www.hearthstonemanor.com/images/hero/daylight-entrance.jpg', 'property')
    setMeta('og:site_name', 'Hearthstone Manor', 'property')

    // Twitter Card
    setMeta('twitter:card', 'summary_large_image', 'name')
    setMeta('twitter:title', fullTitle, 'name')
    setMeta('twitter:description', description, 'name')
    setMeta('twitter:image', 'https://www.hearthstonemanor.com/images/hero/daylight-entrance.jpg', 'name')
  }, [fullTitle, description, url])
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
