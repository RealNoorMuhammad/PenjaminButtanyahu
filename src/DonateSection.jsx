import './DonateSection.css'

function DonateSection() {
  return (
    <section className="donate-section" id="donate">
      <h2 className="section-heading">Donate</h2>
      <p className="donate-text">
        This wallet belongs to the Penjamin Buttanyahu treasury and community.
        Any funds donated will be put towards marketing, listings, giveaways,
        etc. Thank you for believing in this community. Let's build back better.
      </p>
      <a href="#donate" className="donate-button">
        Donate
      </a>
    </section>
  )
}

export default DonateSection
