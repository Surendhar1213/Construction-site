import React from 'react';
import './contact.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Contact = () => {
    return (
        <section className="contact-section-modern" id="contact">
            <div className="container">
                <div className="contact-layout">

                    {/* Left Side: Form Area */}
                    <div className="contact-form-area">
                        <div className="section-header-left">
                            <ScrollReveal text="GET IN TOUCH" tagName="span" className="sub-title-modern" />
                            <ScrollReveal
                                text="Let's Build Your Future Together"
                                tagName="h2"
                                className="main-title-modern"
                            />
                            <p className="contact-sub-txt">
                                Ready to start your dream project? Contact us today for a free consultation and let's turn your vision into reality.
                            </p>
                        </div>

                        {/* Contact Info Row (New Location) */}
                        <div className="contact-info-row">
                            <div className="info-box-modern">
                                <div className="icon-circle"><i className="fa-solid fa-phone"></i></div>
                                <div>
                                    <h6>Phone</h6>
                                    <p>+91 98765 43210</p>
                                </div>
                            </div>
                            <div className="info-box-modern">
                                <div className="icon-circle"><i className="fa-solid fa-envelope"></i></div>
                                <div>
                                    <h6>Email</h6>
                                    <p>info@buildingproject.com</p>
                                </div>
                            </div>
                            <div className="info-box-modern">
                                <div className="icon-circle"><i className="fa-solid fa-location-dot"></i></div>
                                <div>
                                    <h6>Location</h6>
                                    <p>Chennai, India</p>
                                </div>
                            </div>
                        </div>

                        <form className="modern-form">
                            <div className="input-group">
                                <input type="text" required placeholder=" " />
                                <label>Your Name</label>
                                <span className="highlight"></span>
                            </div>
                            <div className="input-group">
                                <input type="email" required placeholder=" " />
                                <label>Email Address</label>
                                <span className="highlight"></span>
                            </div>
                            <div className="input-group">
                                <input type="tel" required placeholder=" " />
                                <label>Phone Number</label>
                                <span className="highlight"></span>
                            </div>
                            <div className="input-group full-width">
                                <textarea required placeholder=" " rows="4"></textarea>
                                <label>Project Details</label>
                                <span className="highlight"></span>
                            </div>
                            <button type="submit" className="btn-modern-submit">
                                Send Message <span className="btn-arrow"><i className="fa-solid fa-paper-plane"></i></span>
                            </button>
                        </form>
                    </div>

                    {/* Right Side: Map (Clean) */}
                    <div className="contact-map-area">
                        <div className="map-frame">
                            <iframe
                                title="Chennai Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d497511.2310658522!2d79.92880655764724!3d13.047473318041535!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a5265ea4f7d3361%3A0x6e61a70b6863d433!2sChennai%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade">
                            </iframe>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Contact;
