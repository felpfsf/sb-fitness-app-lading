import About from "./components/about/About"
import Contact from "./components/contact/Contact"
import Footer from "./components/footer/Footer"
import Hero from "./components/hero/Hero"
import Navbar from "./components/navbar/Navbar"
import Results from "./components/results/Results"
import Testimonials from "./components/testimonials/Testimonials"


function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Results />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  )
}

export default App
