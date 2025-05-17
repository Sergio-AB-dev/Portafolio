import React from "react";
import Tecnologias from "./Tecnologias";    
import "../styles/Estudios.css"
import orange_star from "../assets/brillar-2.png"

const Estudios= () => {
    return (
        <>
        <div className="estudios" id="estudios">
            <div className="estudios__educacion">
                <p className="estudios__educacion__title">Estudios</p>
                <div className="estudios__educacion__list">
                    <p className="estudios__educacion__list-item"><span><img className="estudios__educacion__list-star" src={orange_star} alt=""/></span>Tecnologo Analisis y desarrollo de software (sena)</p>
                    <p className="estudios__educacion__list-item"><span><img className="estudios__educacion__list-star" src={orange_star} alt=""/></span>Curso de frontend Developer (platzi)</p>
                    <p className="estudios__educacion__list-item"><span><img className="estudios__educacion__list-star" src={orange_star} alt=""/></span>Curso de frontend con React.js (platzi)</p>
                    <p className="estudios__educacion__list-item"><span><img className="estudios__educacion__list-star" src={orange_star} alt=""/></span>Curso profesional de Git y GitHub (platzi)</p>
                </div>
            </div>
             <Tecnologias title="Habilidades" />
        </div>
        </>
    )
}

export default Estudios;