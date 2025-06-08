import React from "react";
import "../styles/Sobre_mi.css"
import Contact from "./Contact"

const Sobre_mi= () => {
    return (
        <>
          <div className="sobre-mi__container">
             <div className="sobre-mi" id="sobre-mi">
                <div className="sobre-mi__description">
                    <h3 className="sobre-mi__description-title">¡Hola Soy Sergio!</h3>
                    <p className="sobre-mi__description-text">Soy estudiante de Análisis y Desarrollo de Software, próximo a iniciar prácticas profesionales. Me especializo en desarrollo frontend, con fuerte dominio en <span>HTML</span>, <span>CSS</span> y <span>JavaScript</span>, y conocimientos en <span>React.js</span> y <span>SQL</span>. Manejo herramientas de control de versiones como <span>Git</span> y <span>GitHub</span>. Me adapto rápidamente a nuevos retos, trabajo de manera colaborativa en equipo y disfruto perfeccionando cada detalle de mis proyectos para entregar resultados de alta calidad.</p>
                    <a className="sobre-mi__description-link" target="_blank" href="https://www.linkedin.com/in/sergio-mauricio-ardila-barbosa-4b5b9a362/"><span><svg xmlns="http://www.w3.org/2000/svg" id="Isolation_Mode" data-name="Isolation Mode" viewBox="0 0 24 24" width="512" height="512"><path d="M18.9,16.776A10.539,10.539,0,1,0,16.776,18.9l5.1,5.1L24,21.88ZM10.5,18A7.5,7.5,0,1,1,18,10.5,7.507,7.507,0,0,1,10.5,18Z"/></svg>
                    </span>linkedin.com/in/sergio-ardila</a>
                </div>  
           </div>
           <Contact />
          </div>
            
        </>
    )
}

export default Sobre_mi;