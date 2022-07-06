import React from "react"
import "../styles/portfolio.css"
import IMG1 from "../images/portfolio1.png"
import IMG2 from "../images/portfolio2.jpg"
import IMG3 from "../images/portfolio3.jpg"
import IMG4 from "../images/portfolio4.jpg"
import IMG5 from "../images/portfolio5.png"
import IMG6 from "../images/portfolio6.jpg"

const data =
[
    {
    id:1,
    image:IMG1,
    title: "Vue.js • Node.js • AdobeXd",
    github:"https://github.com/gusmalikah/Vue-JavaScript-FullStack-Deelee"
    },
    {
    id:2,
    image:IMG2,
    title:"Java • C++ • MQTT • Android Studio",
    github:"https://github.com/gusmalikah/Java-C--MQTT-CARAID-"
    },
    {
    id:3,
    image:IMG3,
    title:"React JS • Firebase • JavaScript • HTML • CSS",
    github:"https://github.com/gusmalikah/ReactJS-Firebase-JavaScript-MeetUp-App-"
    },
    {
    id:4,
    image:IMG4,
    title:"React JS • JavaScript • HTML • CSS",
    github:"https://github.com/gusmalikah/React-JavaScript-Meme-Generator-"
    },
    {
    id:5,
    image:IMG5,
    title:"Vue.js • Node.js • Mongoose • Mosquitto",
    github:"https://github.com/gusmalikah/Vue.js-Node.js-Mosquitto-Distributed-System--UI-"
    },
    {
    id:6,
    image:IMG6,
    title:"React JS • JavaScript • HTML • CSS",
    github:"https://github.com/gusmalikah/React-JavaScript-Notes-App-"
    }
]
function Portfolio() {
    return(
        <section id="portfolio">
        <h5>My Recent Work</h5>
        <h2>Portfolio</h2>

        <div className="container portfolio-container">
        {
            data.map(({id,image,title,github}) => {
                return (
        <article key={id} className="portfolio-item">
        <div className="portfolio-item-image">
        <img src={image} alt={title}/>
        </div>
        <div className="portfolio-title">
        <h3 className="portfolio-text">{title}</h3>
        </div>
        <div className="portfolio-item-cta">
        <a href={github} className="btn portfolio-btn" target="_blank" rel="noreferrer">Github</a>
        </div>
        </article>
                )
            })
        }
        </div>
        </section>
    )
}
export default Portfolio