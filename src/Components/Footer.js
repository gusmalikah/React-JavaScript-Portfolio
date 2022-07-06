import React from "react"
import "../styles/footer.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"

function Footer({setActive}) {
    return(
        <footer id="footer">
        <a href="#header" className="footer-logo">Malik Hannan</a>
        <ul className="permalinks">
        <li><a href="#header" onClick={()=> setActive("#header")}>Home</a></li>
        <li><a href="#about" onClick={()=> setActive("#about")}>About</a></li>
        <li><a href="#experience" onClick={()=> setActive("#experience")}>Experience</a></li>
        <li><a href="#portfolio" onClick={()=> setActive("#portfolio")}>Portfolio</a></li>
        <li><a href="#contact" onClick={()=> setActive("#contact")}>Contact</a></li>
        </ul>
        <div className="footer-socials">
        <a href="https://www.linkedin.com/in/malik-hannan-ahmed-7b80b9231" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/gusmalikah?tab=repositories" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/hannanmalik07" target="_blank" rel="noreferrer"><FiInstagram/></a>
        </div>
        <div className="footer-copyright">
        <small>&copy; Malik Hannan Portfolio. All rights reserved.</small>
        </div>
        </footer>
    )
}
export default Footer