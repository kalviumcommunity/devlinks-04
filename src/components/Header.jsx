export default function Header({ city, icon }) {
  return (
    <header>
      {/* BUG (issue #6): weather icon image is missing alt text */}
      <img className="icon" src={icon} />
      {/* BUG (issue #10): "Weather" should be "Weather" */}
      <h1>Weather in {city}</h1>
    </header>
  )
}
