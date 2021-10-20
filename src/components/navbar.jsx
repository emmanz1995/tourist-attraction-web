import React, { useState } from 'react';
import '../styles/navbar.scss';

function Navbar() {
    const [isExpanded, setIsExpanded] = useState(false);
    return (
        <div className="navbar">
            {/*<div className="nav-container">*/}
                <div className="logo-container">
                    <h1>Tourist Attraction</h1>
                </div>
                <div className="nav-section">
                    <i className="fas fa-bars" onClick={() => setIsExpanded(!isExpanded)} />
                    <ul className={`collapsed ${isExpanded ? "is-expanded" : ""}`}>
                        <li><a href="">About</a></li>
                        <li><a href="">Contact us</a></li>
                        <li><a href="">Point of Interest</a></li>
                    </ul>
                </div>
            {/*</div>*/}
        </div>
    );
}

export default Navbar;
