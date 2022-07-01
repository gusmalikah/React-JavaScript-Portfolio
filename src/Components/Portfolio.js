import React from "react"
import "../styles/portfolio.css"
import IMG1 from "../images/portfolio1.png"
import IMG2 from "../images/portfolio2.jpg"
import IMG3 from "../images/portfolio3.png"
import IMG4 from "../images/portfolio4.jpg"
import IMG5 from "../images/portfolio5.png"
import IMG6 from "../images/portfolio6.jpg"

const data =
[
    {
    id:1,
    image:IMG1,
    title:<h5>Vue.js • Node.js • AdobeXd</h5>,
    github:"https://github.com/gusmalikah/Vue-JavaScript-FullStack-Deelee"
    },
    {
    id:2,
    image:IMG2,
    title:<h5>Java • C++ • MQTT • Android Studio</h5>,
    github:"https://github.com/gusmalikah/Java-C--MQTT-CARAID-"
    },
    {
    id:3,
    image:IMG3,
    title:<h5>React JS • JavaScript • HTML • CSS</h5>,
    github:"https://github.com/gusmalikah/React-JavaScript-Tenzies-Game-"
    },
    {
    id:4,
    image:IMG4,
    title:<h5>React JS • JavaScript • HTML • CSS</h5>,
    github:"https://github.com/gusmalikah/React-JavaScript-Meme-Generator-"
    },
    {
    id:5,
    image:IMG5,
    title:<h5>Vue.js • Node.js • Mongoose • Mosquitto</h5>,
    github:"https://github.com/gusmalikah/Vue.js-Node.js-Mosquitto-Distributed-System--UI-"
    },
    {
    id:6,
    image:IMG6,
    title:<h5>React JS • JavaScript • HTML • CSS</h5>,
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