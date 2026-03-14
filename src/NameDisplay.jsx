import './NameDisplay.css'

function NameDisplay() {
  const name = 'Penjamin Buttanyahu'

  return (
    <div className="name-card">
      <h1 className="name-title">{name}</h1>
    </div>
  )
}

export default NameDisplay
