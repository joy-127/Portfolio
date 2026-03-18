import Navbar from "./components/Navbar"
import Hero from "./sections/Hero"
import About from "./sections/About"
import Skills from "./sections/Skills"
import Projects from "./sections/Projects"
import Experience from "./components/Experience"
import Contact from "./sections/Contact"
import StarsCanvas from "./components/StarsCanvas"




function App() {
  return (
    <div className="relative bg-black">



      <StarsCanvas />

      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Experience />
      <Contact />

    </div>
  )
}

export default App
