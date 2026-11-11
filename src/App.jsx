import About from './components/About.jsx'
import Achievements from './components/Achievements.jsx'
import Domains from './components/Domains.jsx'
import Events from './components/Events.jsx'
import Footer from './components/Footer.jsx'
import Gallery from './components/Gallery.jsx'
import Hero from './components/Hero.jsx'
import JoinInfinity from './components/JoinInfinity.jsx'
import Navbar from './components/Navbar.jsx'
import Team from './components/Team.jsx'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <About />
        <Domains />
        <Events />
        <Achievements />
        <Team />
        <Gallery />
        <JoinInfinity />
      </main>
      <Footer />
    </>
  )
}

export default App
