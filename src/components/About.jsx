import { ArrowDownRight, Compass, Eye, Sparkles } from 'lucide-react'
import './About.css'

const principles = [
  {
    number: '01',
    title: 'Mission',
    icon: Compass,
    text: 'Make technology an open field of possibility—where every member can learn by doing, share what they know, and turn curiosity into meaningful work.',
    accent: 'teal',
  },
  {
    number: '02',
    title: 'Vision',
    icon: Eye,
    text: 'Build a future-ready community that creates with purpose, thinks beyond the obvious, and leaves a positive mark on the world around us.',
    accent: 'pink',
  },
]

function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="about__inner container">
        <div className="about__masthead">
          <p className="section-kicker">
            <span className="section-kicker__line" />
            A LITTLE ABOUT US <span className="section-kicker__number">/ 01</span>
          </p>
          <span className="about__side-note">CURIOUS BY NATURE. CONNECTED BY DESIGN.</span>
        </div>

        <div className="about__intro">
          <div className="about__title-wrap">
            <span className="about__index" aria-hidden="true">01 —</span>
            <h2 className="about__title" id="about-title">
              Not just keeping up.
              <span> Creating what&apos;s next.</span>
            </h2>
          </div>
          <div className="about__copy">
            <p className="about__lead">
              INFINITY is the technology society of{' '}
              <strong>Sri Guru Gobind Singh College of Commerce.</strong>
            </p>
            <p>
              A community where technology meets creativity, innovation grows
              through collaboration, and curious minds find room to explore.
            </p>
            <blockquote className="about__quote">
              <span className="about__quote-symbol" aria-hidden="true">∞</span>
              <p>
                With minds to explore and tech as our guide, curiosity fuels us,
                side by side.
              </p>
            </blockquote>
            <a className="about__link" href="#domains">
              Find your domain <ArrowDownRight aria-hidden="true" size={17} />
            </a>
          </div>
        </div>

        <div className="about__principles">
          {principles.map(({ number, title, icon: Icon, text, accent }) => (
            <article className={`principle-card principle-card--${accent}`} key={title}>
              <div className="principle-card__top">
                <span className="principle-card__number">{number}</span>
                <Icon size={21} strokeWidth={1.5} aria-hidden="true" />
              </div>
              <h3>{title}</h3>
              <p>{text}</p>
            </article>
          ))}
          <article className="principle-card principle-card--different">
            <div className="principle-card__top">
              <span className="principle-card__number">03</span>
              <Sparkles size={21} strokeWidth={1.5} aria-hidden="true" />
            </div>
            <h3>What makes us different</h3>
            <p>
              We connect disciplines, not just people. Ideas move from a
              conversation to a collaboration—and from a first attempt to
              something real.
            </p>
          </article>
        </div>

        <div className="about__footer" aria-hidden="true">
          <span>01 / WHO WE ARE</span>
          <span>SGGSCC · NEW DELHI</span>
        </div>
      </div>
    </section>
  )
}

export default About
