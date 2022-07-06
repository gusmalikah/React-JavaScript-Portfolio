import React from "react"
import "../styles/nav.css"
import {AiOutlineHome} from "react-icons/ai"
import {AiOutlineUser} from "react-icons/ai"
import {BiBook} from "react-icons/bi"
import {MdOutlineSegment} from "react-icons/md"
import {BiMessageSquareDetail} from "react-icons/bi"
import {FaArrowAltCircleDown} from "react-icons/fa"

function Nav({active, setActive}) {
    return(
        <nav>
            <a href="#header" 
            onClick={() => setActive("#header")} 
            className={active === "#header" ? "active" : ""}>
            <AiOutlineHome/>
            </a>
            <a href="#about" 
            onClick={() => setActive("#about")}
            className={active === "#about" ? "active" : ""}>
            <AiOutlineUser/>
            </a>
            <a href="#experience" 
            onClick={() => setActive("#experience")}
            className={active === "#experience" ? "active" : ""}>
            <BiBook/></a>
            <a href="#portfolio" 
            onClick={() => setActive("#portfolio")} 
            className={active === "#portfolio" ? "active" : ""}>
            <MdOutlineSegment/></a>
            <a href="#contact" 
            onClick={() => setActive("#contact")} 
            className={active === "#contact" ? "active" : ""}>
            <BiMessageSquareDetail/></a>
            <a href="#footer" 
            onClick={() => setActive("#footer")} 
            className={active === "#footer" ? "active" : ""}>
            <FaArrowAltCircleDown/></a>
        </nav>
    )
}
export default Nav