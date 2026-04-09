import { useState, useEffect, useRef, useCallback } from 'react'

/**
 * Lightweight crossfade slideshow.
 *
 * - Autoplays every `interval` ms (default 5000)
 * - Pauses on mouse hover and on keyboard focus
 * - Respects prefers-reduced-motion (autoplay off, manual nav still works)
 * - Left/right arrow keys navigate when the slideshow is focused
 * - Click left/right arrow buttons to navigate manually
 * - Click a dot to jump to a specific slide
 *
 * Slides prop: [{ src, alt }]
 */
export default function Slideshow({ slides, interval = 5000 }) {
  const [index, setIndex] = useState(0)
  const [isPaused, setIsPaused] = useState(false)
  const containerRef = useRef(null)

  const count = slides.length

  const next = useCallback(() => {
    setIndex((i) => (i + 1) % count)
  }, [count])

  const prev = useCallback(() => {
    setIndex((i) => (i - 1 + count) % count)
  }, [count])

  // Respect reduced-motion preference: skip autoplay
  const prefersReducedMotion =
    typeof window !== 'undefined' &&
    window.matchMedia &&
    window.matchMedia('(prefers-reduced-motion: reduce)').matches

  // Autoplay
  useEffect(() => {
    if (isPaused || prefersReducedMotion || count <= 1) return
    const id = setInterval(next, interval)
    return () => clearInterval(id)
  }, [isPaused, prefersReducedMotion, count, interval, next])

  // Keyboard arrow nav when the slideshow has focus
  useEffect(() => {
    const el = containerRef.current
    if (!el) return
    const onKey = (e) => {
      if (e.key === 'ArrowLeft') {
        e.preventDefault()
        prev()
      } else if (e.key === 'ArrowRight') {
        e.preventDefault()
        next()
      }
    }
    el.addEventListener('keydown', onKey)
    return () => el.removeEventListener('keydown', onKey)
  }, [next, prev])

  return (
    <div
      ref={containerRef}
      className="slideshow"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocus={() => setIsPaused(true)}
      onBlur={() => setIsPaused(false)}
      role="region"
      aria-roledescription="carousel"
      aria-label="A glimpse of life at Hearthstone Manor"
      tabIndex={0}
    >
      <div className="slideshow-frame">
        {slides.map((slide, i) => (
          <figure
            key={slide.src}
            className={`slideshow-slide ${i === index ? 'is-active' : ''}`}
            aria-hidden={i !== index}
          >
            <img
              src={slide.src}
              alt={slide.alt}
              loading={i === 0 ? 'eager' : 'lazy'}
              draggable={false}
            />
          </figure>
        ))}

        <button
          type="button"
          className="slideshow-arrow slideshow-arrow-prev"
          onClick={prev}
          aria-label="Previous photo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </button>

        <button
          type="button"
          className="slideshow-arrow slideshow-arrow-next"
          onClick={next}
          aria-label="Next photo"
        >
          <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <polyline points="9 18 15 12 9 6" />
          </svg>
        </button>
      </div>

      <div className="slideshow-dots" role="tablist" aria-label="Photo position">
        {slides.map((_, i) => (
          <button
            key={i}
            type="button"
            role="tab"
            aria-selected={i === index}
            aria-label={`Go to photo ${i + 1} of ${count}`}
            className={`slideshow-dot ${i === index ? 'is-active' : ''}`}
            onClick={() => setIndex(i)}
          />
        ))}
      </div>
    </div>
  )
}
