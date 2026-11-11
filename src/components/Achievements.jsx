import { useCallback, useEffect, useRef, useState } from 'react'
import { ArrowUpRight, X } from 'lucide-react'
import achievements from '../data/achievements.js'
import './Achievements.css'

function AchievementCard({ achievement, featured, onOpen }) {
  return (
    <article className={`achievement-card${featured ? ' achievement-card--featured' : ''}`}>
      <button
        className="achievement-card__open"
        type="button"
        aria-label={`View details for ${achievement.title}`}
        onClick={() => onOpen(achievement)}
      >
        <span className="achievement-card__visual">
          <img
            className={`achievement-card__image${achievement.imageFit === 'contain' ? ' achievement-card__image--contain' : ''}`}
            src={achievement.image}
            alt={achievement.imageAlt}
            loading="lazy"
          />
          <span className="achievement-card__visual-index" aria-hidden="true">
            INFINITY / {achievement.number}
          </span>
          <span className="achievement-card__image-action" aria-hidden="true">
            <ArrowUpRight size={19} />
          </span>
        </span>

        <span className="achievement-card__body">
          <span className="achievement-card__category">{achievement.category}</span>
          <span className="achievement-card__title">{achievement.title}</span>
          <span className="achievement-card__description">{achievement.description}</span>
          <span className="achievement-card__details">
            View Details <ArrowUpRight size={15} aria-hidden="true" />
          </span>
        </span>
      </button>
    </article>
  )
}

function AchievementDetails({ achievement, onClose }) {
  const closeButtonRef = useRef(null)

  useEffect(() => {
    const previousActiveElement = document.activeElement
    closeButtonRef.current?.focus()
    document.body.classList.add('achievement-modal-open')

    function handleKeyDown(keyEvent) {
      if (keyEvent.key === 'Escape') {
        onClose()
      }
    }

    document.addEventListener('keydown', handleKeyDown)
    return () => {
      document.removeEventListener('keydown', handleKeyDown)
      document.body.classList.remove('achievement-modal-open')
      previousActiveElement?.focus()
    }
  }, [onClose])

  return (
    <div className="achievement-modal" onClick={onClose}>
      <section
        className="achievement-modal__dialog"
        role="dialog"
        aria-modal="true"
        aria-labelledby="achievement-modal-title"
        onClick={(clickEvent) => clickEvent.stopPropagation()}
      >
        <button
          className="achievement-modal__close"
          type="button"
          aria-label="Close achievement details"
          onClick={onClose}
          ref={closeButtonRef}
        >
          <X size={20} aria-hidden="true" />
        </button>
        <img
          className={`achievement-modal__image${achievement.imageFit === 'contain' ? ' achievement-modal__image--contain' : ''}`}
          src={achievement.image}
          alt={achievement.imageAlt}
        />
        <div className="achievement-modal__caption">
          <span>{achievement.category}</span>
          <h3 id="achievement-modal-title">{achievement.title}</h3>
          <p>{achievement.description}</p>
        </div>
      </section>
    </div>
  )
}

function Achievements() {
  const [featuredAchievement, mediaRecognition] = achievements
  const [selectedAchievement, setSelectedAchievement] = useState(null)
  const closeDetails = useCallback(() => setSelectedAchievement(null), [])

  return (
    <section
      className="achievements section"
      id="achievements"
      aria-labelledby="achievements-title"
    >
      <div className="achievements__inner container">
        <div className="achievements__masthead">
          <p className="section-kicker">
            <span className="section-kicker__line" />
            RECOGNITION &amp; MEDIA
          </p>
          <span className="achievements__edition">INFINITY / MILESTONES</span>
        </div>

        <div className="achievements__intro">
          <h2 className="achievements__title" id="achievements-title">
            MILESTONES <span>&amp; ACHIEVEMENTS</span>
          </h2>
        </div>

        <div className="achievements__layout">
          <AchievementCard
            achievement={featuredAchievement}
            featured
            onOpen={setSelectedAchievement}
          />
          <AchievementCard
            achievement={mediaRecognition}
            onOpen={setSelectedAchievement}
          />
        </div>

        <div className="achievements__footer">
          <span>PHOTOGRAPHS &amp; COVERAGE FROM SUPPLIED MATERIAL</span>
          <span>INFINITY / SGGSCC <i /></span>
        </div>
      </div>

      {selectedAchievement && (
        <AchievementDetails
          achievement={selectedAchievement}
          onClose={closeDetails}
        />
      )}
    </section>
  )
}

export default Achievements
