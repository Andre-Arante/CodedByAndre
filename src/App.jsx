import "./app.scss"
import Navbar from "./components/navbar/Navbar"
import Hero from "./components/hero/Hero"
import Parallax from "./components/parrallax/Parallax"
import Portfolio from "./components/portfolio/Portfolio"
import Contact from "./components/contact/Contact"

function App() {
  return <div>
    <section id="Homepage">
      <Navbar />
      <Hero />
    </section>
    <section id="Services"><Parallax type="services"/></section>
    <Portfolio />
    <section id="Contacts">
      <Contact />
    </section>
  </div>
};

export default App
