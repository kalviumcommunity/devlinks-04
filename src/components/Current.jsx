export default function Current({ temp, unit, humidity, onToggle }) {
  return (
    <section className="current">
      {/* Fixed (issue #3): temperature is rounded to nearest integer */}
      <div className="temp">{Math.round(temp)}°{unit}</div>
      {/* Fixed (issue #4): humidity has "%" unit appended */}
      <div className="humidity">Humidity: {humidity}%</div>
      <button className="btn btn-primary" onClick={onToggle}>
        Switch to °{unit === 'C' ? 'F' : 'C'}
      </button>
    </section>
  )
}
