import React from 'react';
import './Header.css';
import { FaMapPin } from "react-icons/fa";

function Header() {
    return (
        <header className="header">
            <img className="logo-gym" src={'src/components/assets/logogym.png'} alt="" />
            <div className="title-section">
                <div className="company-name">GYM TIPS</div>
                <div className="slogan-title">Um você mais forte!</div>
            </div>

            <div className="infocontent">
                    <h1 className="adress">RUA DO CARMO, 27, CENTRO RIO DE JANEIRO </h1>
                         <FaMapPin className="local"/> 
            </div>
        </header>
    );
}

export default Header;
