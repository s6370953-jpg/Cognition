import { useRef, useState } from 'react'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import team from '../data/team.js'
import TeamMemberCard from './TeamMemberCard.jsx'
import './Team.css'

function Team() {
  const carouselRef = useRef(null)
  const [selectedIndex, setSelectedIndex] = useState(null)
  const members = team.flatMap((group) => group.members)

  function selectMember(index, card) {
    setSelectedIndex(index)
    card.scrollIntoView({
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth',
      block: 'nearest',
      inline: 'nearest',
    })
  }

  function scrollCarousel(direction) {
    const carousel = carouselRef.current
    if (!carousel) {
      return
    }

    const card = carousel.querySelector('.team-member')
    const gap = Number.parseFloat(window.getComputedStyle(carousel).columnGap) || 0
    const distance = card ? card.getBoundingClientRect().width + gap : carousel.clientWidth

    carousel.scrollBy({
      left: direction * distance,
      behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches
        ? 'auto'
        : 'smooth',
    })
  }

  return (
    <section className="team section" id="team" aria-labelledby="team-title">
      <div className="team__inner container">
        <div className="team__masthead">
          <p className="section-kicker">
            <span className="section-kicker__line" />
            THE PEOPLE BEHIND INFINITY <span className="section-kicker__number">/ 05</span>
          </p>
          <span className="team__edition">SGGSCC · INFINITY</span>
        </div>

        <div className="team__intro">
          <h2 className="team__title" id="team-title">
            MEET THE <span>TEAM.</span>
          </h2>
          <p className="team__description">
            Different strengths. Shared curiosity. Meet the people who bring
            ideas, collaboration and community to life at INFINITY.
          </p>
        </div>

        <div className="team__carousel-controls">
          <span className="team__carousel-count">14 PEOPLE · ONE INFINITY</span>
          <div className="team__carousel-buttons">
            <button
              className="team__carousel-button"
              type="button"
              aria-label="Scroll team members left"
              onClick={() => scrollCarousel(-1)}
            >
              <ArrowLeft size={18} aria-hidden="true" />
            </button>
            <button
              className="team__carousel-button"
              type="button"
              aria-label="Scroll team members right"
              onClick={() => scrollCarousel(1)}
            >
              <ArrowRight size={18} aria-hidden="true" />
            </button>
          </div>
        </div>

        <div
          className="team__carousel"
          ref={carouselRef}
          role="region"
          aria-label="INFINITY team members"
          tabIndex={0}
        >
          {members.map((member, index) => (
            <TeamMemberCard
              index={index + 1}
              isAdjacent={selectedIndex !== null && Math.abs(index - selectedIndex) === 1}
              isSelected={selectedIndex === index}
              key={member.name}
              member={member}
              onSelect={(card) => selectMember(index, card)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Team
