export default function Header({ city, icon }) {
  return (
    <header>
      {/* BUG (issue #6): weather icon image is missing alt text */}
      <img className="icon" src={icon} />
      <h1>Weather in {city}</h1>
    </header>
  )
}
