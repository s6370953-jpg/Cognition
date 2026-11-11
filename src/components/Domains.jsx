import { useState } from 'react'
import {
  ArrowDownRight,
  ArrowUpRight,
  BrainCircuit,
  Code2,
  Palette,
  ShieldCheck,
  Smartphone,
} from 'lucide-react'
import './Domains.css'

const domains = [
  {
    number: '01',
    title: 'Web Development',
    subtitle: 'Build for the open web',
    description: 'Shape ideas into thoughtful, interactive experiences people can use anywhere.',
    focus: ['Frontend', 'Backend', 'UI engineering'],
    icon: Code2,
    accent: 'red',
  },
  {
    number: '02',
    title: 'AI & Machine Learning',
    subtitle: 'Make intelligence useful',
    description: 'Explore how data and intelligent systems can solve problems and open new possibilities.',
    focus: ['Machine learning', 'Generative AI', 'Computer vision'],
    icon: BrainCircuit,
    accent: 'teal',
  },
  {
    number: '03',
    title: 'App Development',
    subtitle: 'Built for everywhere',
    description: 'Create useful, delightful products that live right in your pocket.',
    focus: ['Android', 'iOS', 'Cross-platform'],
    icon: Smartphone,
    accent: 'pink',
  },
  {
    number: '04',
    title: 'Cybersecurity',
    subtitle: 'Think like a defender',
    description: 'Learn to protect people, information and the systems we rely on every day.',
    focus: ['Network security', 'Ethical hacking', 'Digital forensics'],
    icon: ShieldCheck,
    accent: 'teal',
  },
  {
    number: '05',
    title: 'Design & Creativity',
    subtitle: 'Make ideas tangible',
    description: 'Bring imagination and intention together to create meaningful digital experiences.',
    focus: ['Visual design', 'Product thinking', 'Creative technology'],
    icon: Palette,
    accent: 'pink',
  },
]

function DomainCard({ domain, isExpanded, onToggle }) {
  const { number, title, subtitle, description, focus, icon: Icon, accent } = domain
  const detailsId = `domain-details-${number}`

  return (
    <article
      className={`domain-card domain-card--${accent}${isExpanded ? ' domain-card--expanded' : ''}`}
    >
      <div className="domain-card__top">
        <span className="domain-card__number">{number} / 05</span>
        <Icon size={23} strokeWidth={1.5} aria-hidden="true" />
      </div>

      <h3 className="domain-card__title">
        {title}
        <span>{subtitle}</span>
      </h3>
      <p className="domain-card__description">{description}</p>

      <div className="domain-card__details-wrap">
        <div className="domain-card__details" id={detailsId} hidden={!isExpanded}>
          {focus.map((item) => <span className="domain-card__tag" key={item}>{item}</span>)}
        </div>
      </div>

      <button
        className="domain-card__toggle"
        type="button"
        aria-expanded={isExpanded}
        aria-controls={detailsId}
        onClick={onToggle}
      >
        <span>{isExpanded ? 'Close focus areas' : 'Explore focus areas'}</span>
        {isExpanded
          ? <ArrowDownRight size={17} aria-hidden="true" />
          : <ArrowUpRight size={17} aria-hidden="true" />}
      </button>
    </article>
  )
}

function Domains() {
  const [expandedDomain, setExpandedDomain] = useState(null)

  function toggleDomain(number) {
    setExpandedDomain((current) => current === number ? null : number)
  }

  return (
    <section className="domains section" id="domains" aria-labelledby="domains-title">
      <div className="domains__inner container">
        <div className="domains__header">
          <div>
            <p className="section-kicker">
              <span className="section-kicker__line" />
              WHERE CURIOSITY LEADS <span className="section-kicker__number">/ 02</span>
            </p>
            <h2 className="domains__title" id="domains-title">
              Find your <span>field.</span>
            </h2>
          </div>
          <p className="domains__intro">
            Five fields to explore. Follow what fascinates you, learn alongside
            others, and make something of your own.
          </p>
        </div>

        <div className="domains__grid">
          {domains.map((domain) => (
            <DomainCard
              domain={domain}
              isExpanded={expandedDomain === domain.number}
              key={domain.number}
              onToggle={() => toggleDomain(domain.number)}
            />
          ))}
        </div>

        <div className="domains__footer" aria-hidden="true">
          <span>02 / EXPLORE THE POSSIBILITIES</span>
          <span>SELECT A DOMAIN TO EXPLORE <i /></span>
        </div>
      </div>
    </section>
  )
}

export default Domains
