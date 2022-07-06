import React from "react"
import "./app.css"
import Header from "./Components/Header"
import Nav from "./Components/Nav"
import About from "./Components/About"
import Experience from "./Components/Experience"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  const [activeNav, setActiveNav] = React.useState("#header")

  return (
    <div>
      <Header setActive={setActiveNav}/>
      <Nav active={activeNav} setActive={setActiveNav}/>
      <About setActive={setActiveNav}/>
      <Experience />
      <Portfolio />
      <Contact />
      <Footer setActive={setActiveNav}/>
    </div>
  );
}

export default App;
