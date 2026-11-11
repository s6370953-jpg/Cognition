import { UserRound } from 'lucide-react'

function TeamMemberCard({ member, index, isSelected, isAdjacent, onSelect }) {
  const { name, role, image, accent } = member

  return (
    <article
      className={[
        'team-member',
        `team-member--${accent}`,
        isSelected && 'team-member--selected',
        isAdjacent && 'team-member--adjacent',
      ].filter(Boolean).join(' ')}
    >
      <button
        className="team-member__select"
        type="button"
        aria-label={`${name}, ${role}`}
        aria-pressed={isSelected}
        onClick={(event) => onSelect(event.currentTarget)}
      />
      <div className="team-member__photo">
        {image ? (
          <img
            className="team-member__image"
            src={image}
            alt=""
            loading="lazy"
          />
        ) : (
          <div
            className="team-member__placeholder"
            role="img"
            aria-label={`Photo placeholder for ${name}`}
          >
            <span className="team-member__photo-index" aria-hidden="true">
              IN / {String(index).padStart(2, '0')}
            </span>
            <UserRound
              className="team-member__placeholder-icon"
              size={42}
              strokeWidth={1}
              aria-hidden="true"
            />
            <span className="team-member__photo-label" aria-hidden="true">
              PHOTO TO BE ADDED
            </span>
          </div>
        )}
        <span className="team-member__accent" aria-hidden="true" />
      </div>

      <div className="team-member__info">
        <h4 className="team-member__name">{name}</h4>
        <p className="team-member__role">{role}</p>
      </div>
    </article>
  )
}

export default TeamMemberCard
