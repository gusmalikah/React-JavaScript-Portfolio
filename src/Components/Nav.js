import React from "react"
import "../styles/nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {MdOutlineSegment} from "react-icons/md"
import {BiMessageSquareDetail} from "react-icons/bi"
import {FaArrowAltCircleDown} from "react-icons/fa"

function Nav() {
    const [activeNav, setActiveNav] = React.useState("#header")
    return(
        <nav>

            <a href="#header" 
            onClick={() => setActiveNav("#header")} 
            className={activeNav === "#header" ? "active" : ""}>
            <AiOutlineHome/>
            </a>
            <a href="#about" 
            onClick={() => setActiveNav("#about")}
            className={activeNav === "#about" ? "active" : ""}>
            <AiOutlineUser/>
            </a>
            <a href="#experience" 
            onClick={() => setActiveNav("#experience")}
            className={activeNav === "#experience" ? "active" : ""}>
            <BiBook/></a>
            <a href="#portfolio" 
            onClick={() => setActiveNav("#portfolio")} 
            className={activeNav === "#portfolio" ? "active" : ""}>
            <MdOutlineSegment/></a>
            <a href="#contact" 
            onClick={() => setActiveNav("#contact")} 
            className={activeNav === "#contact" ? "active" : ""}>
            <BiMessageSquareDetail/></a>
            <a href="#footer" 
            onClick={() => setActiveNav("#footer")} 
            className={activeNav === "#footer" ? "active" : ""}>
            <FaArrowAltCircleDown/></a>
        </nav>
    )
}
export default Nav