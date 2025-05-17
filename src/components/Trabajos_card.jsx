import React from "react";
import Tecnologias from "./Tecnologias";
import "../styles/Trabajos_card.css"


const Trabajos_card = ({title,Img_pjt})=> {
    return (
        <>
        <a href="https://sergio-ab-dev.github.io/StarBucks/" target="_blank" className="trabajos__section-project">
            <div className={`trabajos__image ${Img_pjt}`}></div>
            <div className="trabajos__section-project__description">
                <p>{title}</p>
                <Tecnologias  className="tecnologias_pjt1" className_hab_continer="tecnologia__html"/>
            </div>
        </a>
        </>
    )
}

export default Trabajos_card;