import React from "react"
import "../styles/about.css"
import Image from "../images/img.jpg"
import {FaAward} from "react-icons/fa"
import {FiUsers} from "react-icons/fi"
import {VscFolderLibrary} from "react-icons/vsc"

function About({setActive}) {
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
        <h5>Teams</h5>
        <small>Multiple Teams</small>
        </article>
        <article className="about-card">
        <VscFolderLibrary className="about-icon"/>
        <h5>Projects</h5>
        <small>25+ Completed</small>
        </article>
        </div>
        <p>I am an aspiring software engineer with 
        knowledge in software engineering 
        & software management. Proficient in Java,
        JavaScript, Python, C, HTML, CSS, SQL server,
        Bootstrap, Docker, Kubernetes, Web API, ReactJs, 
        AngularJs, Vue.js, Node.js etc. Constant 
        learner and ability to adapt to new technologies.
        Possess strong communication and team management skills.
        I am in the final year of my Bachelor's program 
        in Software Engineering & Management from the 
        University of Gothenburg (Sweden) and would love to 
        continue my career as a Fullstack Developer.
        </p>
        <a href="#contact" className="btn btn-primary"
        onClick={() => setActive("#contact")}>Let's Talk
        </a>
        </div>    
        </div>
        </section>
    )
}
export default About