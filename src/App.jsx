import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Education from './components/Education'
import Extracurricular from './components/Extracurricular'
import Projects from './components/Projects'
import Contact from './components/Contact'
import Footer from './components/Footer'
import SandSimulation from './components/SandSimulation'

function App() {
  const [isSandSimOpen, setIsSandSimOpen] = useState(false)

  return (
    <>
      <Navbar />
      <Hero onOpenSandSim={() => setIsSandSimOpen(true)} />
      <About />
      <Experience />
      <Education />
      <Extracurricular />
      <Projects />
      <Contact />
      <Footer />
      <SandSimulation isOpen={isSandSimOpen} onClose={() => setIsSandSimOpen(false)} />
    </>
  )
}

export default App
