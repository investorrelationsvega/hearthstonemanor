import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import './styles/styles.css'

const container = document.getElementById('root')
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
)

// Pages are prerendered at build time (scripts/prerender.js). The
// prerender script stamps #root with the path it rendered. Hydrate
// only when that matches the current URL; otherwise (for example an
// unknown path served by the SPA fallback) render fresh on the client.
const prerenderedPath = container.getAttribute('data-prerendered-path')
const normalize = (p) => (p.length > 1 ? p.replace(/\/+$/, '') : p)

if (
  container.hasChildNodes() &&
  prerenderedPath !== null &&
  normalize(prerenderedPath) === normalize(window.location.pathname)
) {
  ReactDOM.hydrateRoot(container, app)
} else {
  container.textContent = ''
  ReactDOM.createRoot(container).render(app)
}
