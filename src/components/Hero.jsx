import Button from './ui/Button.jsx'
import './Hero.css'

function Hero() {
  return (
    <section className="hero section" id="home" aria-labelledby="hero-title">
      <div className="hero__inner container">
        <div className="hero__intro">
          <div className="hero__content">
            <div className="hero__brand">
              <svg
                className="hero__infinity-mark"
                viewBox="0 0 220 120"
                role="img"
                aria-labelledby="hero-infinity-title hero-infinity-description"
                xmlns="http://www.w3.org/2000/svg"
              >
                <title id="hero-infinity-title">INFINITY symbol</title>
                <desc id="hero-infinity-description">
                  A continuous teal infinity mark.
                </desc>
                <path
                  d="M110 60C88 33 72 16 51 16 28 16 12 34 12 60s16 44 39 44c21 0 38-18 59-44s38-44 59-44c23 0 39 18 39 44s-16 44-39 44c-21 0-37-17-59-44Z"
                  fill="none"
                  stroke="#247C78"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="10"
                />
              </svg>
              <h1 className="hero__title" id="hero-title">
                INFINITY
              </h1>
            </div>
            <p className="hero__eyebrow">
              <span className="hero__eyebrow-mark" aria-hidden="true" />
              THE TECH SOCIETY <span aria-hidden="true">|</span> SGGSCC
            </p>
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

          <div className="hero-art">
            <img
              className="hero-art__image"
              src="/images/infinity-home-team.jpg"
              alt="The INFINITY team at Sri Guru Gobind Singh College of Commerce"
              width="477"
              height="523"
            />
            <div className="hero-art__caption">
              <h2 className="hero-art__title">MEET TEAM INFINITY</h2>
              <p>ONE TEAM. INFINITE POSSIBILITIES.</p>
            </div>
          </div>
        </div>
      </div>

      <a className="hero__scroll" href="#about">
        <span className="hero__scroll-line" aria-hidden="true" />
        <span>Scroll to explore</span>
      </a>

    </section>
  )
}

export default Hero
