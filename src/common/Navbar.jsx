import React from "react";
import './Navbar.css'

export default function Navbar() {
    return (
        <nav className="breadcrumb-nav">
            <ul className="breadcrumb-list">
                <h2 className="breadcrumb-item">Rocky Mountain Landscape</h2>
                <li className="breadcrumb-item">
                    <a href="#about" className="breadcrumb-link">
                        About
                    </a>
                </li>
                <li className="breadcrumb-item">
                    <a href="#resources" className="breadcrumb-link">
                        Resources
                    </a>
                </li>
                <li className="breadcrumb-item">
                    <a href="#contact" className="breadcrumb-link">
                        Contact
                    </a>
                </li>
            </ul>
        </nav>
    );
}