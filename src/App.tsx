import { useEffect } from 'react'
import Navigation from './components/layout/Navigation'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import About from './components/sections/About'
import Projects from './components/sections/Projects'
import Contact from './components/sections/Contact'

function App() {
  useEffect(() => {
    // Set initial theme
    document.documentElement.setAttribute('data-theme', 'dark')
  }, [])

  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans">
      <Navigation />
      
      <main>
        {/* Hero Section */}
        <section id="hero">
          <Hero />
        </section>

        {/* About Section */}
        <About />

        {/* Projects Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </main>

      <Footer />
    </div>
  )
}

export default App
