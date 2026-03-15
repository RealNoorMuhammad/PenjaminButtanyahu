import { useState } from 'react'
import './Header.css'
import navLogo from './assets/navlogo.png'
import twitterIcon from './assets/twitterp.png'
import dexpIcon from './assets/dexp.png'

function Header() {
  const [logoError, setLogoError] = useState(false)

  return (
    <header className="site-header">
      <a href="https://x.com/i/communities/2032850146296295488" className="header-side header-left" aria-label="X Twitter" target="_blank" rel="noopener noreferrer">
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

      <a href="https://dexscreener.com/solana/6MUQneA8iGgfKrxkZQxg4zw4S1hrCav53nNgtYVJaUVK" className="header-side header-right" aria-label="DexScreener" target="_blank" rel="noopener noreferrer">
        <img src={dexpIcon} alt="DEX" className="header-side-icon" />
       
      </a>
    </header>
  )
}

export default Header
