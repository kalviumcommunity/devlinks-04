export default function Header({ city, icon }) {
  return (
    <header>
      {/* BUG (issue #6): weather icon image is missing alt text */}
      <img className="icon" src={icon} alt="Weather icon" />
      {/* BUG (issue #10): "Wether" should be "Weather" */}
      <h1>Wether in {city}</h1>
    </header>
  )
}
