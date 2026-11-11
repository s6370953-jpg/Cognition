import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowLeft, ArrowRight, X } from 'lucide-react'
import gallery from '../data/gallery.js'
import './Gallery.css'

function GalleryCard({ item, onOpen, index }) {
  return (
    <button
      className={`gallery-card gallery-card--${item.layout} gallery-card--${item.accent}`}
      type="button"
      onClick={() => onOpen(index)}
      aria-label={`Preview ${item.title}, ${item.category}`}
    >
      <img className="gallery-card__image" src={item.image} alt="" loading="lazy" />
      <span className="gallery-card__shade" aria-hidden="true" />
      <span className="gallery-card__index" aria-hidden="true">
        INFINITY / {String(index + 1).padStart(2, '0')}
      </span>
      <span className="gallery-card__label">
        <span className="gallery-card__category">{item.category}</span>
        <span className="gallery-card__title">{item.title}</span>
      </span>
      <span className="gallery-card__open-mark" aria-hidden="true">↗</span>
    </button>
  )
}

function GalleryPreview({ items, index, onIndexChange, onClose }) {
  const closeButtonRef = useRef(null)
  const touchStartX = useRef(null)
  const item = items[index]
  const showNavigation = items.length > 1

  const showPrevious = useCallback(() => {
    onIndexChange((currentIndex) => (currentIndex - 1 + items.length) % items.length)
  }, [items.length, onIndexChange])

  const showNext = useCallback(() => {
    onIndexChange((currentIndex) => (currentIndex + 1) % items.length)
  }, [items.length, onIndexChange])

  useEffect(() => {
    const previousActiveElement = document.activeElement
    closeButtonRef.current?.focus()
    document.body.classList.add('gallery-preview-open')

    function handleKeyDown(event) {
      if (event.key === 'Escape') {
        onClose()
      } else if (event.key === 'ArrowLeft' && showNavigation) {
        showPrevious()
      } else if (event.key === 'ArrowRight' && showNavigation) {
        showNext()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('gallery-preview-open')
      previousActiveElement?.focus()
    }
  }, [onClose, showNavigation, showNext, showPrevious])

  function handlePointerDown(event) {
    if (event.pointerType === 'touch') {
      touchStartX.current = event.clientX
    }
  }

  function handlePointerUp(event) {
    if (event.pointerType !== 'touch' || touchStartX.current === null) {
      return
    }

    const distance = event.clientX - touchStartX.current
    touchStartX.current = null

    if (Math.abs(distance) > 55) {
      distance > 0 ? showPrevious() : showNext()
    }
  }

  return (
    <div className="gallery-preview" onClick={onClose}>
      <div
        className="gallery-preview__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="gallery-preview-title"
        onClick={(event) => event.stopPropagation()}
        onPointerDown={handlePointerDown}
        onPointerUp={handlePointerUp}
        onPointerCancel={() => { touchStartX.current = null }}
      >
        <button
          className="gallery-preview__close"
          type="button"
          aria-label="Close image preview"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <X size={20} aria-hidden="true" />
        </button>

        <div className="gallery-preview__media">
          <img className="gallery-preview__image" src={item.image} alt={item.caption} />
          {showNavigation && (
            <>
              <button
                className="gallery-preview__nav gallery-preview__nav--previous"
                type="button"
                aria-label="Previous image"
                onClick={showPrevious}
              >
                <ArrowLeft size={20} aria-hidden="true" />
              </button>
              <button
                className="gallery-preview__nav gallery-preview__nav--next"
                type="button"
                aria-label="Next image"
                onClick={showNext}
              >
                <ArrowRight size={20} aria-hidden="true" />
              </button>
            </>
          )}
        </div>

        <div className="gallery-preview__info">
          <div>
            <p className="gallery-preview__category">
              {item.category} <span>{String(index + 1).padStart(2, '0')} / {String(items.length).padStart(2, '0')}</span>
            </p>
            <h3 id="gallery-preview-title">{item.title}</h3>
          </div>
          <p>{item.caption}</p>
        </div>
      </div>
    </div>
  )
}

function Gallery() {
  const [activeCategory, setActiveCategory] = useState('All')
  const [previewIndex, setPreviewIndex] = useState(null)
  const categories = [...new Set(gallery.map((item) => item.category))]
  const visibleItems = activeCategory === 'All'
    ? gallery
    : gallery.filter((item) => item.category === activeCategory)

  return (
    <section className="gallery section" id="gallery" aria-labelledby="gallery-title">
      <div className="gallery__inner container">
        <div className="gallery__masthead">
          <p className="section-kicker">
            <span className="section-kicker__line" />
            A VISUAL JOURNEY <span className="section-kicker__number">/ 06</span>
          </p>
          <span className="gallery__edition">INFINITY / ARCHIVE</span>
        </div>

        <div className="gallery__intro">
          <h2 className="gallery__title" id="gallery-title">
            MOMENTS THAT <span>DEFINE US</span>
          </h2>
          <p className="gallery__description">
            Every event, every collaboration and every achievement becomes a part of our journey.
          </p>
        </div>

        <div className="gallery__controls" aria-label="Filter gallery by category">
          {['All', ...categories].map((category) => (
            <button
              className={`gallery__filter${activeCategory === category ? ' is-active' : ''}`}
              type="button"
              key={category}
              aria-pressed={activeCategory === category}
              onClick={() => setActiveCategory(category)}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="gallery__grid" aria-label="Gallery photographs">
          {visibleItems.map((item) => (
            <GalleryCard
              index={gallery.indexOf(item)}
              item={item}
              key={item.id}
              onOpen={() => setPreviewIndex(visibleItems.indexOf(item))}
            />
          ))}
        </div>

        <div className="gallery__footer" aria-hidden="true">
          <span>{gallery.length} PHOTOGRAPHS / INFINITY VISUAL ARCHIVE</span>
          <span>INFINITY / SGGSCC <i /></span>
        </div>
      </div>

      {previewIndex !== null && (
        <GalleryPreview
          items={visibleItems}
          index={previewIndex}
          onIndexChange={setPreviewIndex}
          onClose={() => setPreviewIndex(null)}
        />
      )}
    </section>
  )
}

export default Gallery
