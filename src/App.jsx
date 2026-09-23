import { useState } from 'react'
import Header from './components/Header.jsx'
import Current from './components/Current.jsx'
import Forecast from './components/Forecast.jsx'
import Footer from './components/Footer.jsx'
// Fixed (issue #11): removed unused useRef import

// Temperatures are stored in Celsius.
const weather = {
  city: 'Reykjavik',
  tempC: 21.66666,
  humidity: 50,
  icon: '/sun.png',
  forecast: [
    { day: 'Mon', tempC: 19 },
    { day: 'Tue', tempC: 3 },
    { day: 'Wed', tempC: -4 },
    { day: 'Thu', tempC: 0 },
  ],
}

export default function App() {
  const [unit, setUnit] = useState('C')
  // Fixed (issue #7): removed leftover debug console.log

  // Fixed (issue #1): Added + 32 to complete the Celsius to Fahrenheit formula
  function toDisplay(tempC) {
    return unit === 'F' ? tempC * (9 / 5) + 32 : tempC
  }

  // Fixed (issue #2): Properly toggle between 'C' and 'F'
  function toggleUnit() {
    setUnit(unit === 'C' ? 'F' : 'C')
  }

  return (
    <main className="card">
      <Header city={weather.city} icon={weather.icon} />
      <Current
        temp={toDisplay(weather.tempC)}
        unit={unit}
        humidity={weather.humidity}
        onToggle={toggleUnit}
      />
      <Forecast days={weather.forecast} toDisplay={toDisplay} unit={unit} />
      <Footer />
    </main>
  )
}
