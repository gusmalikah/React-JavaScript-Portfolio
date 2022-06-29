import React from "react"
import "../styles/headersocials.css"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"

function HeaderSocials() {
    return(
        <div className="header-socials">
        <a href="https://Linkedin.com" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer"><FiInstagram/></a>
        </div>
    )
}
export default HeaderSocials