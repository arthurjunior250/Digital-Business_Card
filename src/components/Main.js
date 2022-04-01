import React from "react";
import '../App.css'
import e from './Icon.svg'
import l from './Vector.svg'


export default function Main() {
    return (
        <div className="main">
            <h3>Arthur Junior</h3>
            <h5>Frontend Developer</h5>
            <a href="www.arthurjunior.tk"><p>Arthur website</p></a>
            <div className="btnDiv">
                <button className="emailBtn"><img src={e} alt='' /> Email</button>
               <a href="https://www.linkedin.com/in/dusabimana-arthur-junior-a8189820a/"> <button className="linkedin"> <img src={l} alt='' /> Linkedin</button></a>
            </div>
            <h4 className="about">About</h4>
            <p >I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.</p>
            <h4 className="interest">Interests</h4>
            <p >Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.</p>

        </div>
    )
}