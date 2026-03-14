import './HeroSection.css'
import heroImage from './assets/hero.png'

function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-inner">
        <div className="hero-left">
          <h1 className="hero-title">Penjamin Buttanyahu</h1>
          <p className="hero-tagline">Negotiating With The Market</p>
        </div>
        <div className="hero-right">
          <img src={heroImage} alt="Penjamin Buttanyahu" className="hero-image" />
        </div>
      </div>
    </section>
  )
}

export default HeroSection
