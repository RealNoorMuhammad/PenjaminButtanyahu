import { useState, useEffect } from 'react'
import './MemesSection.css'
import meme1 from './assets/meme1.jpeg'
import meme2 from './assets/meme2.jpeg'
import meme3 from './assets/meme3.jpeg'

const MEMES = [
  { id: 1, label: 'Meme 1', src: meme1 },
  { id: 2, label: 'Meme 2', src: meme2 },
  { id: 3, label: 'Meme 3', src: meme3 },
]

function MemesSection() {
  const [lightboxSrc, setLightboxSrc] = useState(null)

  function openLightbox(src) {
    setLightboxSrc(src)
  }

  function closeLightbox() {
    setLightboxSrc(null)
  }

  useEffect(() => {
    if (!lightboxSrc) return
    const handleEscape = (e) => {
      if (e.key === 'Escape') closeLightbox()
    }
    document.addEventListener('keydown', handleEscape)
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', handleEscape)
      document.body.style.overflow = ''
    }
  }, [lightboxSrc])

  return (
    <section className="memes-section" id="memes">
      <h2 className="section-heading">MEMES</h2>
      <div className="memes-grid">
        {MEMES.map((m) => (
          <button
            key={m.id}
            type="button"
            className="meme-card"
            onClick={() => openLightbox(m.src)}
            aria-label={`View ${m.label}`}
          >
            <img src={m.src} alt={m.label} className="meme-img" />
          </button>
        ))}
      </div>

      {lightboxSrc && (
        <div
          className="meme-lightbox-overlay"
          onClick={closeLightbox}
          role="dialog"
          aria-modal="true"
          aria-label="Meme view"
        >
          <div className="meme-lightbox-inner" onClick={(e) => e.stopPropagation()}>
            <button
              type="button"
              className="meme-lightbox-close"
              onClick={closeLightbox}
              aria-label="Close"
            >
              <span aria-hidden="true">×</span>
            </button>
            <img src={lightboxSrc} alt="" className="meme-lightbox-img" />
          </div>
        </div>
      )}
    </section>
  )
}

export default MemesSection
