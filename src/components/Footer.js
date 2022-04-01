import React from "react";
import fb from '../assets/images/Facebook Icon.png'
import instragm from "../assets/images/Instagram Icon.png"
import twitter from "../assets/images/Twitter Icon.png"
import github from "../assets/images/GitHub Icon.png"

export default function Footer() {
    return (
        <div className="footer">
            <div className="">
               <div className="img-div">
                <a href="https://web.facebook.com/ARTHURJUNIOR250/timeline?lst=100003757660403%3A100003757660403%3A1595038098"><img src={fb} className="facebook" alt=""></img></a>
                <a href="https://www.instagram.com/arthurjunior250/"><img src={instragm}  alt=""></img></a>
                <a href="https://twitter.com/arthurjunior250"><img src={twitter}  alt=""></img></a>
                <a href="https://github.com/arthurjunior250"><img src={github}  alt=""></img></a>
               </div>
            </div>
        </div>
    )
}