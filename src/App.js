import React from "react"
import "./app.css"
import Header from "./Components/Header";
import Nav from "./Components/Nav";
import About from "./Components/About"
import Experience from "./Components/Experience"
import Services from "./Components/Services"
import Portfolio from "./Components/Portfolio"
import Contact from "./Components/Contact"
import Footer from "./Components/Footer"

function App() {
  return (
    <div>
      <Header />
      <Nav />
      <About />
      <Experience />
      <Services />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
