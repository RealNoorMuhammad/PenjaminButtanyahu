import './BigImageSection.css'
import bigImage from './assets/big.jpeg'

function BigImageSection() {
  return (
    <section className="big-image-section" aria-hidden="true">
      <div className="big-image-wrap">
        <img
          src={bigImage}
          alt=""
          className="big-image"
          loading="lazy"
        />
      </div>
    </section>
  )
}

export default BigImageSection
