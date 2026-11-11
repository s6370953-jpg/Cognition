import Button from './ui/Button.jsx'
import './Hero.css'

function InfinityArtwork() {
  return (
    <svg
      className="hero-art__infinity"
      viewBox="0 0 640 360"
      fill="none"
      role="img"
      aria-label="Teal and pink infinity symbol"
    >
      <defs>
        <linearGradient id="infinity-gradient" x1="70" y1="70" x2="570" y2="290" gradientUnits="userSpaceOnUse">
          <stop stopColor="var(--color-teal)" />
          <stop offset=".48" stopColor="#9b9bff" />
          <stop offset="1" stopColor="var(--color-pink)" />
        </linearGradient>
        <filter id="infinity-glow" x="0" y="0" width="640" height="360" filterUnits="userSpaceOnUse">
          <feGaussianBlur stdDeviation="13" />
        </filter>
      </defs>
      <path
        className="hero-art__glow"
        d="M320 180c-55-64-94-91-140-91-50 0-90 40-90 91s40 91 90 91c46 0 85-27 140-91Zm0 0c55-64 94-91 140-91 50 0 90 40 90 91s-40 91-90 91c-46 0-85-27-140-91Z"
        stroke="url(#infinity-gradient)"
        strokeWidth="13"
        filter="url(#infinity-glow)"
      />
      <path
        className="hero-art__stroke"
        d="M320 180c-55-64-94-91-140-91-50 0-90 40-90 91s40 91 90 91c46 0 85-27 140-91Zm0 0c55-64 94-91 140-91 50 0 90 40 90 91s-40 91-90 91c-46 0-85-27-140-91Z"
        stroke="url(#infinity-gradient)"
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero__grid" aria-hidden="true" />
      <div className="hero__orbit hero__orbit--one" aria-hidden="true" />
      <div className="hero__orbit hero__orbit--two" aria-hidden="true" />

      <div className="hero__inner container">
        <div className="hero__intro">
          <div className="hero__content">
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-mark" aria-hidden="true" />
              THE TECH SOCIETY <span aria-hidden="true">|</span> SGGSCC
            </p>
            <h1 className="hero__title" id="hero-title">
              INFINITY<span className="hero__period">.</span>
            </h1>

            <p className="hero__tagline">
              With minds to explore and tech as our guide,
              <span> curiosity fuels us, side by side.</span>
            </p>
            <p className="hero__description">
              A community of curious minds exploring technology, creativity and
              innovation together.
            </p>

            <div className="hero__actions">
              <Button href="#about" className="hero__button">
                Explore Infinity <span aria-hidden="true">↗</span>
              </Button>
              <Button href="#events" variant="secondary" className="hero__button">
                Discover Events <span aria-hidden="true">↗</span>
              </Button>
            </div>
          </div>

          <div className="hero-art" aria-hidden="false">
            <div className="hero-art__frame">
              <span className="hero-art__corner hero-art__corner--top" aria-hidden="true" />
              <span className="hero-art__corner hero-art__corner--bottom" aria-hidden="true" />
              <InfinityArtwork />
              <span className="hero-art__index" aria-hidden="true">IN / 01</span>
              <span className="hero-art__caption" aria-hidden="true">
                ALWAYS IN MOTION <i />
              </span>
            </div>
            <span className="hero-art__vertical" aria-hidden="true">SGGSCC · TECH SOCIETY</span>
          </div>
        </div>

        <div className="hero__team">
          <div className="hero__team-heading">
            <h2 className="hero__team-title">MEET TEAM INFINITY</h2>
            <p className="hero__team-slogan">ONE TEAM. INFINITE POSSIBILITIES.</p>
          </div>
          <span className="hero__team-glow" aria-hidden="true" />
          <div className="hero__team-photo">
            <img
              className="hero__team-image"
              src="/images/infinity-team.png"
              alt="The INFINITY team together"
            />
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <span className="hero__scroll-line" aria-hidden="true" />
        <span>Scroll to explore</span>
      </a>

      <div className="hero__serial" aria-hidden="true">
        <span>INFINITY / SGGSCC</span>
        <span>EST. FOR THE CURIOUS</span>
      </div>
    </section>
  )
}

export default Hero
