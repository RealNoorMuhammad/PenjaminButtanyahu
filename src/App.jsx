import Header from './Header'
import HeroSection from './HeroSection'
import ContractAddress from './ContractAddress'
import AboutSection from './AboutSection'
import HowToBuySection from './HowToBuySection'
import TokenomicsSection from './TokenomicsSection'
import MemesSection from './MemesSection'
import FlagMarquee from './FlagMarquee'
import BigImageSection from './BigImageSection'
import DonateSection from './DonateSection'
import CommunitySection from './CommunitySection'
import Marquee from './Marquee'
import Footer from './Footer'
import './App.css'

function App() {
  return (
    <main className="app">
      <Header />
      <HeroSection />
      <ContractAddress />
      <Marquee attachTop />
      <AboutSection />
      <HowToBuySection />

      <MemesSection />
      <FlagMarquee />
      <BigImageSection />
      <Marquee attachTop />
      <Footer />
    </main>
  )
}

export default App
