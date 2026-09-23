export default function Header({ city, icon }) {
  return (
    <header>
      {/* Fixed (issue #6): added alt text for accessibility */}
      <img className="icon" src={icon} alt="Weather icon" />
      {/* Fixed (issue #10): corrected "Wether" spelling to "Weather" */}
      <h1>Weather in {city}</h1>
    </header>
  )
}
