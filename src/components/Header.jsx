import React, { useState } from "react";
import "../styles/Header.css";
import orange_star from "../assets/brillar-2.png";
import menu from "../assets/menu-hamburguesa.png";

const Header = () => {
   const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <>
        <header className="header">
            <div className="header__logo">
                <img className="header__logo-img" src={orange_star} alt="Sergio Ardila"/>
                <h1 className="header__logo-title">Sergio Ardila</h1>
            </div>
            <ul className="header__nav">
                <li><a href="#sobre-mi">Sobre mi</a></li>
                <li><a href="#estudios">Estudios</a></li>
                <li><a href="#trabajos">Trabajos</a></li>
            </ul>
            <a className="header__cv" href="#">Mi CV</a>
            <button className="header__menu-mobile"onClick={toggleMenu} ><img src={menu} alt="menu"/></button>
      </header>
      {menuOpen && (
                <div className="mobile-menu">
                    <ul className="mobile-menu__lista">
                        <li><a href="#sobre-mi">Sobre mi</a></li>
                        <li><a href="#estudios">Estudios</a></li>
                        <li><a href="#trabajos">Trabajos</a></li>
                    </ul>
                </div>
            )}
    </>
    )
}
export default Header;