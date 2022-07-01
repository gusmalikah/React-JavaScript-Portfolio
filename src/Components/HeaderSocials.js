import React from "react"
import {BsLinkedin} from "react-icons/bs"
import {FaGithub} from "react-icons/fa"
import {FiInstagram} from "react-icons/fi"

function HeaderSocials() {
    return(
        <div className="header-socials">
        <a href="https://www.linkedin.com/in/malik-hannan-ahmed-7b80b9231" target="_blank" rel="noreferrer"><BsLinkedin/></a>
        <a href="https://github.com/gusmalikah?tab=repositories" target="_blank" rel="noreferrer"><FaGithub/></a>
        <a href="https://www.instagram.com/hannanmalik07" target="_blank" rel="noreferrer"><FiInstagram/></a>
        </div>
    )
}
export default HeaderSocials