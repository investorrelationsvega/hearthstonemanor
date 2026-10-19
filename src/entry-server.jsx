import React from 'react'
import { renderToString } from 'react-dom/server'
import { StaticRouter } from 'react-router-dom/server'
import App from './App.jsx'
import { HeadContext } from './hooks/usePageMeta.js'

/**
 * Server entry used only at build time by scripts/prerender.js.
 * Returns the rendered markup for a route plus the head values the
 * page set through usePageMeta.
 */
export function render(url) {
  const head = {}
  const html = renderToString(
    <React.StrictMode>
      <HeadContext.Provider value={head}>
        <StaticRouter location={url}>
          <App />
        </StaticRouter>
      </HeadContext.Provider>
    </React.StrictMode>,
  )
  return { html, head }
}

// Every route that gets its own static HTML file. Keep in sync with
// App.jsx and public/sitemap.xml.
export const routes = [
  '/',
  '/why-hearthstone',
  '/assisted-living',
  '/memory-care',
  '/about',
  '/gallery',
  '/contact',
]
