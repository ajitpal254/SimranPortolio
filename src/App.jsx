import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Experience from './components/Experience'
import Skills from './components/Skills'
import Education from './components/Education'
import Contact from './components/Contact'
import Footer from './components/Footer'
import './App.css'

const staticParticles = Array.from({ length: 20 }, (_, i) => ({
  id: i,
  left: `${(i * 7.7) % 100}%`,
  top: `${(i * 13.3) % 100}%`,
  delay: `${(i * 0.25) % 5}s`,
  duration: `${3 + ((i * 0.35) % 7)}s`,
  size: `${2 + ((i * 0.2) % 4)}px`,
}));

function App() {
  useEffect(() => {
    // Intersection Observer for scroll animations
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible')
          }
        })
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    )

    // Observe all animate-in elements
    const elements = document.querySelectorAll('.animate-in')
    elements.forEach((el) => observer.observe(el))

    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    // Custom cursor glow effect
    const handleMouseMove = (e) => {
      const cursor = document.querySelector('.cursor-glow')
      if (cursor) {
        cursor.style.left = e.clientX + 'px'
        cursor.style.top = e.clientY + 'px'
      }
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [])

  return (
    <div className="app">
      {/* Background Effects */}
      <div className="bg-grid" />
      <div className="bg-glow bg-glow-1" />
      <div className="bg-glow bg-glow-2" />
      <div className="bg-glow bg-glow-3" />
      <div className="cursor-glow" />

      {/* Particle effect */}
      <div className="particles">
        {staticParticles.map((p) => (
          <div
            key={p.id}
            className="particle"
            style={{
              left: p.left,
              top: p.top,
              animationDelay: p.delay,
              animationDuration: p.duration,
              width: p.size,
              height: p.size,
            }}
          />
        ))}
      </div>

      {/* Components */}
      <Navbar />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
