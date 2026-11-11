import { ArrowUpRight } from 'lucide-react'
import Button from './ui/Button.jsx'
import { JOIN_FORM_URL } from '../data/siteLinks.js'
import './JoinInfinity.css'

function JoinInfinity() {
  return (
    <section className="join-infinity section" id="join" aria-labelledby="join-title">
      <div className="join-infinity__grid" aria-hidden="true" />
      <div className="join-infinity__orbit join-infinity__orbit--one" aria-hidden="true" />
      <div className="join-infinity__orbit join-infinity__orbit--two" aria-hidden="true" />

      <div className="join-infinity__inner container">
        <p className="join-infinity__eyebrow">
          <span />
          THE NEXT CHAPTER STARTS HERE
        </p>

        <div className="join-infinity__content">
          <h2 className="join-infinity__title" id="join-title">
            JOIN THE <span>INFINITY.</span>
          </h2>
          <p className="join-infinity__description">
            Have an idea? A skill? Or simply the curiosity to explore technology
            and create something meaningful? There is a place for you at INFINITY.
          </p>
          <Button
            className="join-infinity__button"
            href={JOIN_FORM_URL}
            target="_blank"
            rel="noopener noreferrer"
          >
            JOIN INFINITY <ArrowUpRight size={19} aria-hidden="true" />
          </Button>
        </div>

        <div className="join-infinity__symbol" aria-hidden="true">∞</div>
        <span className="join-infinity__serial" aria-hidden="true">IN / SGGSCC / 2026</span>
      </div>
    </section>
  )
}

export default JoinInfinity
