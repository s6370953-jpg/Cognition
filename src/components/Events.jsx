import { useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import events from '../data/events.js'
import './Events.css'

function EventPoster({ event, className = '' }) {
  const [imageFailed, setImageFailed] = useState(false)

  if (!event.image || imageFailed) {
    return (
      <div className={`event-poster event-poster--fallback ${className}`} role="img" aria-label={`${event.title} poster unavailable`}>
        <span className="event-poster__mark" aria-hidden="true">∞</span>
        <span className="event-poster__fallback-label">POSTER UNAVAILABLE</span>
      </div>
    )
  }

  return (
    <img
      className={`event-poster ${className}`}
      src={event.image}
      alt={`${event.title} event poster`}
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  )
}

function EventCard({ event, index, onOpen }) {
  return (
    <article className={`event-card event-card--${event.accent}`}>
      <button
        className="event-card__open"
        type="button"
        aria-label={`View details for ${event.title}`}
        onClick={() => onOpen(event)}
      >
        <span className="event-card__poster-wrap">
          <EventPoster event={event} />
          <span className="event-card__index" aria-hidden="true">
            INFINITY / {String(index + 1).padStart(2, '0')}
          </span>
          <span className="event-card__poster-action" aria-hidden="true">
            <ArrowUpRight size={18} />
          </span>
        </span>
        <span className="event-card__body">
          <span className="event-card__title">{event.title}</span>
          <span className="event-card__details">
            View Details <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </span>
      </button>
    </article>
  )
}

function EventDetails({ event, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousActiveElement = document.activeElement

    closeButtonRef.current?.focus()
    document.body.classList.add('event-modal-open')

    function handleKeyDown(keyEvent) {
      if (keyEvent.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('event-modal-open')
      previousActiveElement?.focus()
    }
  }, [onClose])

  return (
    <div className="event-modal" onClick={onClose}>
      <section
        className="event-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="event-modal-title"
        onClick={(clickEvent) => clickEvent.stopPropagation()}
      >
        <button
          className="event-modal__close"
          type="button"
          aria-label="Close event details"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <X size={20} aria-hidden="true" />
        </button>
        <EventPoster event={event} className="event-modal__poster" />
        <div className="event-modal__caption">
          <span>INFINITY / EVENT</span>
          <h3 id="event-modal-title">{event.title}</h3>
        </div>
      </section>
    </div>
  )
}

function Events() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <section className="events section" id="events" aria-labelledby="events-title">
      <div className="events__inner container">
        <div className="events__header">
          <p className="section-kicker">
            <span className="section-kicker__line" />
            GATHER. LEARN. MAKE. <span className="section-kicker__number">/ 03</span>
          </p>
          <span className="events__edition">INFINITY / EVENTS</span>
        </div>

        <div className="events__intro">
          <h2 className="events__title" id="events-title">OUR EVENTS</h2>
          <p className="events__description">
            Explore the events, experiences and activities organised by INFINITY.
          </p>
        </div>

        <div className="events__grid">
          {events.map((event, index) => (
            <EventCard
              event={event}
              index={index}
              key={event.id}
              onOpen={setSelectedEvent}
            />
          ))}
        </div>
      </div>

      {selectedEvent && (
        <EventDetails
          event={selectedEvent}
          onClose={() => setSelectedEvent(null)}
        />
      )}
    </section>
  )
}

export default Events
