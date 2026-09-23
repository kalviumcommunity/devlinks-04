
export default function Forecast({ days, toDisplay, unit }) {
  return (
    <section className="forecast">
      {days.map((d) => (
        // Fixed (issue #9): added unique "key" prop to mapped forecast item
        // Fixed (issue #5): sub-zero temperatures now get a 'freezing' class and snowflake visual cue
        <div key={d.day} className={`day ${d.tempC < 0 ? 'freezing' : ''}`}>
          <span>{d.day} {d.tempC < 0 ? '❄️' : ''}</span>
          <strong>{toDisplay(d.tempC)}°{unit}</strong>
        </div>
      ))}
    </section>
  )
}
