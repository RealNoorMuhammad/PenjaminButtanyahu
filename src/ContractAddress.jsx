import { useState } from 'react'
import './ContractAddress.css'

const PLACEHOLDER_CA = '6pL6aUFiFASsr652J33mJNJvCFNEpXrRaUSW8R2Ppump'

const BOMB_COUNT = 24
const FALL_DURATION_MS = 10000

function ContractAddress() {
  const [copied, setCopied] = useState(false)
  const [bombsActive, setBombsActive] = useState(false)

  function handleCopy() {
    navigator.clipboard.writeText(PLACEHOLDER_CA).then(() => {
      setCopied(true)
      setBombsActive(true)
      setTimeout(() => setCopied(false), 2000)
      setTimeout(() => setBombsActive(false), FALL_DURATION_MS)
    })
  }

  return (
    <section className="contract-section">
      <span className="contract-label">CA</span>
      <code className="contract-address">{PLACEHOLDER_CA}</code>
      <button type="button" className="contract-copy" onClick={handleCopy}>
        {copied ? 'Copied!' : 'Copy'}
      </button>

      {bombsActive && (
        <div className="bombs-overlay" aria-hidden="true">
          {Array.from({ length: BOMB_COUNT }, (_, i) => (
            <span
              key={i}
              className="bomb"
              style={{
                left: `${(i * 4.5 + 2) % 100}%`,
                animationDelay: `${(i * 0.45) % 10}s`,
                animationDuration: '4s',
              }}
            >
              💣
            </span>
          ))}
        </div>
      )}
    </section>
  )
}

export default ContractAddress
