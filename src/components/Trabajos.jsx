import React from "react";
import Trabajos_card from "./Trabajos_card";
import "../styles/Trabajos.css"

const Trabajos= ()=> {
   return (
     <>
     <div className="trabajos" id="trabajos">
        <p className="trabajos__title">Trabajos</p>
        <div className="trabajos__section">
            <Trabajos_card title="StarBucks (responsive)"/>
            <Trabajos_card title="StarBucks (responsive)"/>
            <Trabajos_card title="StarBucks (responsive)"/>
        </div>
    </div>
    </>
   )
}

export default Trabajos;