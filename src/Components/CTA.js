import React from "react"
import CV from "../images/cv.pdf"

function CTA({setActive}) {
    return(
        <div className="cta">
        <a href={CV} download className="btn">Download CV</a>
        <a href="#contact" className="btn btn-primary"
        onClick={() => setActive("#contact")}>Let's Talk</a>
        </div>
    )
}
export default CTA