import React from "react";
import "../styles/Banner.css"
import yellow_star from "../assets/brillar.png"

const Banner = () => {
    return (
        <>
        <div className="banner">
           <div className="banner__container">
             <div className="banner__foto">
                <img className="banner__foto-star1" src={yellow_star}alt=""/>
                <img className="banner__foto-star2" src={yellow_star} alt=""/>
                <img className="banner__foto-star3" src={yellow_star} alt=""/>
            </div>
            <h2 className="banner__title">PORTAFOLIO</h2>
            <div className="banner__title-secundary" >
                <p>PORTAFOLIO</p>
                <p>PORTAFOLIO</p>
                <p>PORTAFOLIO</p>
            </div>
           </div>
        </div>
        
        <div className="banner__division">
            <div className="banner__division-spam">
            <p>Scroll down</p>
            </div>
        </div>
        </>
    )
}

export default Banner;