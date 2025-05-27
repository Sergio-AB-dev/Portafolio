import React from "react";
import Trabajos_card from "./Trabajos_card";
import "../styles/Trabajos.css"

const Trabajos= ()=> {
   return (
     <>
     <div className="trabajos" id="trabajos">
        <p className="trabajos__title">Trabajos</p>
        <div className="trabajos__section">
            <Trabajos_card title="Super Hello (responsive)" className="card_superhello" href="https://sergio-ab-dev.github.io/Super-Hello/"/>
            <Trabajos_card title="StarBucks (responsive)"/>
            <Trabajos_card title="StarBucks (responsive)" className="card_starbucks" href="https://sergio-ab-dev.github.io/StarBucks/"/>
        </div>
    </div>
    </>
   )
}

export default Trabajos;