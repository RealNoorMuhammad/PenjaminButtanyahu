import { useState } from 'react'
import './Header.css'
import navLogo from './assets/navlogo.png'
import twitterIcon from './assets/twitterp.png'
import dexpIcon from './assets/dexp.png'

function Header() {
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="site-header">
      <a href="#x" className="header-side header-left" aria-label="X Twitter">
        <img src={twitterIcon} alt="X" className="header-side-icon" />
     
      </a>

      <a href="#" className="header-logo-wrap">
        {!logoError ? (
          <img
            src={navLogo}
            alt="Penjamin Buttanyahu"
            className="header-logo"
            onError={() => setLogoError(true)}
          />
        ) : (
          <span className="header-logo-fallback">PB</span>
        )}
      </a>

      <a href="#dex" className="header-side header-right">
        <img src={dexpIcon} alt="DEX" className="header-side-icon" />
       
      </a>
    </header>
  )
}

export default Header
