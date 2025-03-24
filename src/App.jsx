import Benefits from "./components/Benefits"
import CallToAction from "./components/CallToAction"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Info from "./components/Info"
import Kit from "./components/Kit"
import NavBar from "./components/NavBar"
import Recovery from "./components/Recovery"
import SmartHit from "./components/SmartHit"
import WhyChoose from "./components/WhyChoose"

function App() {

  return (
    <div style={{overflowX: 'hidden'}}>
      <NavBar />
      <Hero />
      <Info />
      <WhyChoose />
      <Benefits />
      <SmartHit />
      <Kit />
      <Recovery />
      <CallToAction />
      <Footer />
      
    </div>
  )
}

export default App
