import React from "react";
import { FaFacebookF, FaTwitter, FaVimeoV, FaPinterestP, FaWhatsapp, FaInstagram } from "react-icons/fa";
import { FiPhone, FiMail, FiClock, FiMapPin } from "react-icons/fi";
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            {/* Top Info Bar */}
            <div className="top-info">
                <div className="info-box">
                    <FiPhone className="icon" />
                    <div>
                        <h4>Call Us</h4>
                        <p>+91  9944312517</p>
                    </div>
                </div>
                <div className="info-box">
                    <FiMail className="icon" />
                    <div>
                        <h4>Email Us</h4>
                        <p>info@example.com</p>
                    </div>
                </div>
                <div className="info-box">
                    <FiClock className="icon" />
                    <div>
                        <h4>Opening Hour</h4>
                        <p>Mon - Fri: 09am - 07pm</p>
                    </div>
                </div>
                <div className="info-box">
                    <FiMapPin className="icon" />
                    <div>
                        <h4>Location</h4>
                        <p>Chennai - 600031</p>
                    </div>
                </div>
            </div>

            {/* Footer Content */}
            <div className="footer-container">
                {/* Company Info */}
                <div className="footer-column company-info">
                    <h2 className="brand">Building</h2>
                    <p className="company-description">
                        We care about our clients, our employees and all community. Our
                        commitment to innovation, quality and safety continues to drive us forward.
                    </p>

                    <div className="social-icons">
                        <a href="#"><FaFacebookF /></a>
                        <a href="#"><FaWhatsapp /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaTwitter /></a>
                    </div>
                </div>

                {/* Services */}
                <div className="footer-column">
                    <h3 className="footer-heading">Our Services</h3>
                    <ul className="footer-links">
                        <li>Building Construction</li>
                        <li>Architecture Design</li>
                        <li>Project Management</li>
                        <li>Building Maintenance</li>
                        <li>Flooring & Roofing</li>
                    </ul>
                </div>

                {/* Quick Links */}
                <div className="footer-column">
                    <h3 className="footer-heading">Quick Links</h3>
                    <ul className="footer-links">
                        <li>Home</li>
                        <li>About us</li>
                        <li>Services</li>
                        <li>Projects</li>
                        <li>Contact us</li>
                    </ul>
                </div>

                {/* Subscribe */}
                <div className="footer-column">
                    <h3 className="footer-heading">Subscribe Now</h3>
                    <p className="subscribe-text">
                        Subscribe to our Newsletter & Events to stay updated
                    </p>

                    <div className="subscribe-box">
                        <input type="email" placeholder="Your Email Address" />
                        <button className="subscribe-btn">Subscribe</button>
                    </div>
                </div>
            </div>

            {/* Bottom Bar */}
            <div className="footer-bottom">
                <p>© 2025 Building – All Rights Reserved | @WiseWebTek</p>
                <div className="bottom-links">
                    <a href="#">Privacy Policy</a>
                    <a href="#">Terms Of Use</a>
                    <a href="#">Site Map</a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
