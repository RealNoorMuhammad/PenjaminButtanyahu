import './HowToBuySection.css'

const steps = [
  {
    num: '1',
    title: 'Get a wallet',
    text: 'Grab Phantom or any Solana wallet from the app store. Super easy and free!',
  },
  {
    num: '2',
    title: 'Get some SOL',
    text: 'Put some $SOL in your wallet. You can buy it in Phantom or send it from somewhere else.',
  },
  {
    num: '3',
    title: 'Swap for PENJAMIN',
    text: 'Open a DEX, paste the $PENJAMIN address, and swap. Sign when it asks—you’re in!',
  },
]

function HowToBuySection() {
  return (
    <section className="how-section" id="how-to-buy">
      <h2 className="how-heading">How to buy</h2>
      <p className="how-intro">Three easy steps. You got this!</p>
      <div className="how-steps">
        {steps.map((step) => (
          <div key={step.num} className="how-step">
            <span className="how-num">{step.num}</span>
            <h3 className="how-title">{step.title}</h3>
            <p className="how-text">{step.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default HowToBuySection
