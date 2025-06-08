import React from "react";
import Tecnologias from "./Tecnologias";
import "../styles/Trabajos_card.css"


const Trabajos_card = ({title,className, href})=> {
    return (
        <>
        <a href={href} target="_blank" className="trabajos__section-project">
            <div className={`trabajos__image ${className}`}></div>
            <div className="trabajos__section-project__description">
                <p>{title}</p>
                <Tecnologias  className="tecnologias_pjt1" className_hab_continer="tecnologia__html" className_hab_continer5="SQL-icon"/>
            </div>
        </a>
        </>
    )
}

export default Trabajos_card;