import './FlagMarquee.css'
import flagImage from './assets/flagmarquee.png'

const COPY_COUNT = 16

function FlagMarquee() {
  return (
    <section className="flag-marquee-section" aria-hidden="true">
      <div className="flag-marquee-border">
        <div className="flag-marquee-wrapper">
          <div className="flag-marquee-track">
            {Array.from({ length: COPY_COUNT }, (_, i) => (
              <img key={i} src={flagImage} alt="" className="flag-marquee-img" />
            ))}
          </div>
          <div className="flag-marquee-track" aria-hidden="true">
            {Array.from({ length: COPY_COUNT }, (_, i) => (
              <img key={i} src={flagImage} alt="" className="flag-marquee-img" />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default FlagMarquee
