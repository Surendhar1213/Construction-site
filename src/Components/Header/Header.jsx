import React, { useState, useEffect } from 'react';
import './Header.css';

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);

    const toggleMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <header className={`header ${scrolled ? 'scrolled' : ''}`}>
            <div className="container header-container">
                <div className="header-inner">
                    {/* Left: Logo */}
                    <div className="logo">
                        <a href="#home">
                            <i className="fa-solid fa-building"></i>
                            <div className="logo-text-group">
                                <span className="logo-main">Building</span>
                                <span className="logo-sub">CONSTRUCTION</span>
                            </div>
                        </a>
                    </div>

                    {/* Center: Navigation */}
                    <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
                        <ul>
                            <li><a href="#home" onClick={() => setIsMobileMenuOpen(false)}>Home</a></li>
                            <li><a href="#about" onClick={() => setIsMobileMenuOpen(false)}>About us</a></li>
                            <li><a href="#services" onClick={() => setIsMobileMenuOpen(false)}>Services</a></li>
                            <li><a href="#projects" onClick={() => setIsMobileMenuOpen(false)}>Projects</a></li>
                            <li><a href="#contact" onClick={() => setIsMobileMenuOpen(false)}>Contact us</a></li>
                        </ul>
                    </nav>

                    {/* Right: CTA & Mobile Toggle */}
                    <div className="header-right">
                        <a href="#contact" className="cta-btn">Get a Free Quote</a>
                        <div className={`mobile-toggle ${isMobileMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;