import React from "react";
import HTML from "../assets/html-5.png"
import CSS from "../assets/css-3.png"
import REACT from "../assets/react.png"
import GIT from "../assets/github.png"
import JS from "../assets/javascript.png"
import SQL from "../assets/servidor-sql.png"
import "../styles/Tecnologias.css"

const Tecnologias = ({title, className, className_img, className_pjt_continer, className_title, className_hab_continer,className_hab_continer2, className_hab_continer3, className_hab_continer4, className_hab_continer5 }) => {
    return (
        <div className={`tecnologias ${className}`}>
            <p className={`tecnologias__title ${className_title}`}>{title}</p>
            <div className={`tecnologias_continer ${className_pjt_continer}`}>
                <div className={`tecnologia_continer_section ${className_hab_continer}`}>
                    <img className={`tecnologia_img ${className_img}`} src={HTML} alt="html"/>
                    <p>HTML</p>
                </div>
                <div className={`tecnologia_continer_section ${className_hab_continer2}`}>
                    <img className={`tecnologia_img ${className_img}`} src={CSS} alt="css"/>
                    <p>CSS</p>
                </div>
                <div className={`tecnologia_continer_section ${className_hab_continer3}`}>
                    <img className={`tecnologia_img ${className_img}`} src={JS} alt="javascript"/>
                    <p>JAVASCIPT</p>
                </div>
                <div className={`tecnologia_continer_section ${className_hab_continer4}`}>
                    <img className={`tecnologia_img ${className_img}`} src={REACT} alt="react"/>
                    <p>REACT.JS</p>
                </div>
                <div className={`tecnologia_continer_section ${className_hab_continer4}`}>
                    <img className={`tecnologia_img ${className_img}`}src={GIT} alt="git y github"/>
                    <p>GIT/GITHUB</p>
                </div>
                <div className={`tecnologia_continer_section ${className_hab_continer5}`}>
                    <img className={`tecnologia_img ${className_img}`}src={SQL} alt="SQL"/>
                    <p>SQL</p>
                </div>
            </div>
        </div>
    )
}

export default Tecnologias;