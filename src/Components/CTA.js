import React from "react"
import "../styles/cta.css"
import CV from "../images/cv.pdf"

function CTA() {
    return(
        <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary">Let's Talk></a>
        </div>
    )
}
export default CTA