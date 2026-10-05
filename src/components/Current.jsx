export default function Current({ temp, unit, humidity, onToggle }) {
  return (
    <section className="current">
      {/* BUG (issue #3): temperature is not rounded, so it shows values like 21.66666°. */}
      <div className="temp">{temp}°{unit}</div>
      {/* BUG (issue #4): humidity is missing its "%" unit — it just shows a bare number. */}
      <div className="humidity">Humidity: {humidity}%</div>
      <button className="btn btn-primary" onClick={onToggle}>
        Switch to °{unit === 'C' ? 'F' : 'C'}
      </button>
    </section>
  )
}
