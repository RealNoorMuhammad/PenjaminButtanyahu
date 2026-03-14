import './AboutSection.css'
import aboutImage from './assets/iran.png'

function AboutSection() {
  return (
    <section className="about-section" id="about">
      <h2 className="about-heading">About Penjamin</h2>
      <div className="about-row">
        <div className="about-image-wrap">
          <img src={aboutImage} alt="Penjamin Buttanyahu" className="about-image" />
        </div>
        <div className="about-content">
          <p className="about-text">
            Penjamin Buttanyahu steps in as the self proclaimed Prime Minister
            negotiating with the charts leading the degen economy and always ready
            to BOMB.
          </p>
         
        </div>
      </div>
    </section>
  )
}

export default AboutSection
