import React from "react"
import CTA from "./CTA"
import HeaderSocials from "./HeaderSocials"
import "../styles/header.css"
import Profile from "../images/profile.png"

function Header({setActive}) {
    return(
        <header id="header">
        <div className="container header-container">
        <h5>Hello I'm</h5>
        <h1>Malik Hannan</h1>
        <h5 className="text-light">Fullstack Developer</h5>
        <CTA setActive={setActive}/>
        <HeaderSocials />
        <div className="profile">
        <img src={Profile} alt="Profile" className="profile-image"/>
        </div>
        <a href="#contact" className="scroll-down"
        onClick={()=> setActive("#contact")}>Scroll Down</a>
        </div>
        </header>
    )
}
export default Header