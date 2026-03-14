import './TokenomicsSection.css'

const items = [
  { title: 'LP BURNT', desc: 'Liquidity locked' },
  { title: 'MINT REVOKED', desc: 'No new supply' },
  { title: '0% TAX', desc: 'Zero fees' },
]

function TokenomicsSection() {
  return (
    <section className="tokenomics-section" id="tokenomics">
      <h2 className="section-heading">Tokenomics</h2>
      <div className="tokenomics-grid">
        {items.map((item) => (
          <div key={item.title} className="tokenomics-card">
            <h3 className="tokenomics-title">{item.title}</h3>
            <p className="tokenomics-desc">{item.desc}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default TokenomicsSection
