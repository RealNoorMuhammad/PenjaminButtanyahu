import './Footer.css'
import footerImage from './assets/footers.png'
import twitterIcon from './assets/twitterp.png'
import dexpIcon from './assets/dexp.png'

function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-main">
        <div className="footer-left">
          <img src={footerImage} alt="Penjamin Buttanyahu" className="footer-image" />
        </div>
        <div className="footer-right">
          <h3 className="footer-heading">Socials</h3>
          <div className="footer-socials">
            <a href="https://x.com/i/communities/2032850146296295488" className="footer-social-link" aria-label="X Twitter" target="_blank" rel="noopener noreferrer">
              <img src={twitterIcon} alt="X" className="footer-social-icon" />
            </a>
            <a href="#dex" className="footer-social-link" aria-label="DEX">
              <img src={dexpIcon} alt="DEX" className="footer-social-icon" />
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p className="footer-copyright">Copyright ©2026 Penjamin Buttanyahu</p>
        <p className="footer-disclaimer">
          Legal Disclaimer: $PENJAMIN is a meme coin with no intrinsic value or
          expectation of financial return. $PENJAMIN is for entertainment
          purposes only. When you purchase $PENJAMIN, you are agreeing that you
          have seen this disclaimer.
        </p>
      </div>
    </footer>
  )
}

export default Footer
