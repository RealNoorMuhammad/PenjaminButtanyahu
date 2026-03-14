import './Marquee.css'

function Marquee({ attachTop }) {
  const text = '$PENJAMIN'
  const repeated = Array(12).fill(text).join('  ·  ')

  return (
    <section className={`marquee-section ${attachTop ? 'marquee-attach-top' : ''}`} aria-hidden="true">
      <div className="marquee-border">
        <div className="marquee-track">
          <span className="marquee-text">{repeated}</span>
          <span className="marquee-text" aria-hidden="true">{repeated}</span>
        </div>
      </div>
    </section>
  )
}

export default Marquee
