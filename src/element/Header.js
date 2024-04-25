import { NavLink } from 'react-router-dom';
import React, { useState } from 'react';

const Header = () => {
    const [menuActive, setMenuActive] = useState(false);
    const toggleMenu = () => {
        setMenuActive(!menuActive);
    };

    return (
        <header className={`header-area ${menuActive ? 'menu-active' : ''}`}>
            <div className="container">
                <div className="gx-row d-flex align-items-center justify-content-between">
                    <a href="/" className="logo">
                        <img src="assests/images/logo.svg" alt="Logo"/>
                    </a>

                    <nav className={`navbar ${menuActive ? 'active' : ''}`}>
                        <ul className="menu">
                            <li><NavLink activeClassName="active" to="/">Home</NavLink></li>
                            <li><NavLink activeClassName="active" to="/About">About</NavLink></li>
                            <li><NavLink activeClassName="active" to="/Works">Works</NavLink></li>
                            <li><NavLink activeClassName="active" to="/Contact">Contact</NavLink></li>
                        </ul>
                    </nav>

                    <div className="show-menu" onClick={toggleMenu}>
                        <span></span>
                        <span></span>
                        <span></span>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
