import React from "react"
import "../styles/about.css"
import Image from "../images/img.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

function About() {
    return(
        <section id="about">
        <h5>Get To Know</h5>
        <h2>About Me</h2>
        <div className="container about-container">
        <div className="about-me">
        <div className="about-me-image">
        <img src={Image} alt="About"/>
        </div>
        </div>

        <div className="about-content">
        <div className="about-cards">
        <article className="about-card">
        <FaAward className="about-icon"/>
        <h5>Experience</h5>
        <small>2+ Years Working</small>
        </article>
        <article className="about-card">
        <FiUsers className="about-icon"/>
        <h5>Clients</h5>
        <small>Multiple Clients</small>
        </article>
        <article className="about-card">
        <VscFolderLibrary className="about-icon"/>
        <h5>Projects</h5>
        <small>25+ Completed</small>
        </article>
        </div>
        <p>Lorem ipsum dolor sit amet, consectetur 
        adipiscing elit, sed do eiusmod tempor 
        incididunt ut labore et dolore magna 
        aliqua. Ut enim ad minim veniam, quis
        nostrud exercitation ullamco laboris 
        nisi ut aliquip ex ea commodo consequat.
        Duis aute irure dolor in reprehenderit in
        voluptate velit esse cillum dolore eu 
        fugiat nulla pariatur.
        </p>
        <a href="#contact" className="btn btn-primary">Let's Talk
        </a>
        </div>    
        </div>
        </section>
    )
}
export default About