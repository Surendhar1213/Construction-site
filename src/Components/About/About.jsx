import React, { useRef } from 'react';
import './about.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import aboutBadge from '../../assets/abt-01.svg';

const About = () => {
    const containerRef = useRef(null);

    return (
        <section className="about-section-new" id="about" ref={containerRef}>
            <div className="container">

                <div className="about-grid">
                    {/* LEFT SIDE: CONTENT */}
                    <div className="about-content">
                        <div className="vertical-bg-text">ABOUT</div>

                        <h5 className="sub-title">
                            <span className="dash-line"></span>
                            <ScrollReveal text="ABOUT OUR COMPANY" tagName="span" />
                        </h5>

                        {/* Main Title */}
                        <ScrollReveal
                            text="Chennai’s Trusted Home Builders"
                            tagName="h2"
                            className="main-title-large"
                        />

                        {/* Description */}
                        <ScrollReveal
                            text="With over two decades of experience in residential construction, villa development, and premium interior works, our company has been delivering high-quality homes across Chennai. We focus on modern design, durable structure, and customer-centric planning to build spaces that truly feel like home."
                            tagName="p"
                            className="description-text"
                        />

                        <ul className="about-checklist">
                            <li>
                                <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                                <ScrollReveal text="Premium Building Construction Services" tagName="span" />
                            </li>
                            <li>
                                <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                                <ScrollReveal text="End-to-End Interior Design & Modular Solutions" tagName="span" />
                            </li>
                            <li>
                                <div className="check-icon"><i className="fa-solid fa-check"></i></div>
                                <ScrollReveal text="High-Quality Materials & Transparent Execution" tagName="span" />
                            </li>
                        </ul>

                        <div className="quote-box">
                            <div className="quote-content">
                                <ScrollReveal
                                    text="We build strong, beautiful, and functional homes—delivering quality from planning to final interior finishing."
                                    tagName="p"
                                    className="quote-text"
                                />
                                <div className="quote-author">
                                    <h5 className="author-name">Karthi T</h5>
                                    <span className="author-title">Founder & Project Head</span>
                                </div>
                            </div>
                            <div className="author-image-wrapper">
                                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=200" alt="Surendhar" />
                            </div>
                        </div>

                        <div className="about-buttons">
                            <a href="#learn-more" className="btn-primary-orange">
                                LEARN MORE
                                <span className="btn-icon-circle">
                                    <i className="fa-solid fa-arrow-right"></i>
                                </span>
                            </a>
                            {/* <div className="contact-phone">
                                <div className="phone-icon-circle">
                                    <i className="fa-solid fa-phone"></i>
                                </div>
                                <div className="phone-details">
                                    <span>Call Us 24/7</span>
                                    <strong>+91 98765 43210</strong>
                                </div>
                            </div> */}
                        </div>
                    </div>

                    {/* RIGHT SIDE: IMAGES COLLAGE */}
                    <div className="about-collage">
                        <div className="collage-img main-img">
                            <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=800" alt="Skyscraper" />
                        </div>

                        <div className="collage-img circle-img">
                            <img src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400" alt="Architect" />
                        </div>

                        <div className="collage-img bottom-img">
                            <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400" alt="Construction" />
                        </div>

                        <div className="badge-bottom-section">
                            <div className="small-badge-img">
                                <img src={aboutBadge} alt="Badge" />
                            </div>
                            <div className="badge-content">
                                <strong>Trusted Builders in Chennai</strong><br />
                                for Homes & Interiors
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default About;
