import Benefits from "./components/Benefits"
import CallToAction from "./components/CallToAction"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Kit from "./components/Kit"
import NavBar from "./components/NavBar"
import Recovery from "./components/Recovery"
import SmartHit from "./components/SmartHit"
import WhyChoose from "./components/WhyChoose"

function App() {

  return (
    <div>
      <NavBar />
      <Hero />
      <Info />
      <WhyChoose />
      <Benefits />
      <SmartHit />
      <Kit />
      <Recovery />
      <CallToAction />
    </div>
  )
}

export default App
