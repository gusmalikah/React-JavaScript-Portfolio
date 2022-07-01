import React from "react"
import "../styles/contact.css"
import {MdOutlineEmail} from "react-icons/md"
import {RiMessengerLine} from "react-icons/ri"
import {BsWhatsapp} from "react-icons/bs"
import { useRef } from 'react';
import emailjs from "emailjs-com"


function Contact() {
    const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_x97yqg9', 'template_jowcqkj', form.current, 'AA-CAt3DVOURxkr-x')
    e.target.reset() 
    alert(`ThankYou for you message!
I will get back to you soon.`)     

};
    return(
        <section id="contact">
        <h5>Get In Touch</h5>
        <h2>Contact Me</h2>

        <div className="container contact-container">
        <div className="contact-options">
        <article className="contact-option">
        <MdOutlineEmail className="contact-option-icon"/>
        <h4>Email</h4>
        <h5>hannanmalik1999@gmail.com</h5>
        <a href="mailto:hannanmalik1999@gmail.com">Send a message</a>
        </article>
        <article className="contact-option">
        <RiMessengerLine className="contact-option-icon"/>
        <h4>Messenger</h4>
        <h5>Malik Hannan</h5>
        <a href="https://m.me/hanny1234567" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        <article className="contact-option">
        <BsWhatsapp className="contact-option-icon"/>
        <h4>WhatsApp</h4>
        <h5>+46734922***</h5>
        <a href="https://api.whatsapp.com/send?phone=46734922840" target="_blank" rel="noreferrer">Send a message</a>
        </article>
        </div>
        <form ref={form} onSubmit={sendEmail}>
        <input type="text" name="name" placeholder="Your Full Name" required/>
        <input type="email" name="email" placeholder="Your Email" required/>
        <textarea name="message" rows="7" placeholder="Your Message" required></textarea>
        <button type="submit" className="btn btn-primary">Send Message</button>
        </form>
        </div>
        </section>
    )
}
export default Contact