import React, { useState, useEffect } from 'react';
import './hero.css';

const heroSlides = [
    {
        id: 1,
        image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=2070&auto=format&fit=crop',
        title: 'Building Homes With Precision',
        subtitle: 'Delivering quality residential construction with precise craftsmanship and lasting finishes.',
        stats: { number: '01', label: 'Satisfied Clients' }
    },
    {
        id: 2,
        image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&w=2053&auto=format&fit=crop',
        title: 'Managing Projects With Excellence',
        subtitle: 'Ensuring seamless project coordination and timely delivery through structured planning and execution.',
        stats: { number: '02', label: 'Projects Completed' }
    },
    {
        id: 3,
        image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?q=80&w=2070&auto=format&fit=crop',
        title: 'Designing Spaces That Inspire',
        subtitle: 'Offering contemporary interior solutions blended with elegant style and customized space planning.',
        stats: { number: '03', label: 'Years Experience' }
    },
    {
        id: 4,
        image: 'https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=2084&auto=format&fit=crop',
        title: 'Smart Designs & Better Living',
        subtitle: 'Established expertise in designing functional layouts and planning modern homes across Chennai.',
        stats: { number: '04', label: 'Quality Assured' }
    }
];

const Hero = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isAnimating, setIsAnimating] = useState(false);

    useEffect(() => {
        const slideInterval = setInterval(() => {
            handleNext();
        }, 6000);
        return () => clearInterval(slideInterval);
    }, [currentSlide]);

    const handleNext = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev === heroSlides.length - 1 ? 0 : prev + 1));
            setTimeout(() => setIsAnimating(false), 1200); // 1.2s duration matches CSS
        }
    };

    const handlePrev = () => {
        if (!isAnimating) {
            setIsAnimating(true);
            setCurrentSlide((prev) => (prev === 0 ? heroSlides.length - 1 : prev - 1));
            setTimeout(() => setIsAnimating(false), 1200);
        }
    };

    return (
        <section className="hero-diagonal" id="home">
            {/* Background Slides */}
            {heroSlides.map((slide, index) => (
                <div
                    className={`diagonal-slide ${index === currentSlide ? 'active' : ''} ${index === currentSlide - 1 || (currentSlide === 0 && index === heroSlides.length - 1) ? 'previous' : ''}`}
                    key={slide.id}
                >
                    <div className="diagonal-overlay"></div>
                    <img src={slide.image} alt={slide.title} className="diagonal-image" />

                    {/* Content Layer */}
                    <div className="diagonal-content">
                        <div className="slide-counter-large">
                            {slide.stats.number}
                        </div>
                        <h1 className="diagonal-title">
                            {slide.title.split(' ').map((word, i) => (
                                <span key={i} className="word-span" style={{ transitionDelay: `${i * 100}ms` }}>
                                    {word}
                                </span>
                            ))}
                        </h1>
                        <p className="diagonal-subtitle">{slide.subtitle}</p>
                        <div className="diagonal-btn-group">
                            <a href="#projects" className="btn-diagonal-primary">
                                View Projects <span className="arrow-box"><i className="fa-solid fa-arrow-right"></i></span>
                            </a>
                            <a href="#contact" className="btn-diagonal-outline">Contact Us</a>
                        </div>
                    </div>
                </div>
            ))}

            {/* Navigation & Controls */}
            <div className="diagonal-controls">
                <button className="nav-arrow prev" onClick={handlePrev}>
                    <i className="fa-solid fa-arrow-left"></i>
                </button>
                <div className="nav-indicators">
                    {heroSlides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`nav-dot ${idx === currentSlide ? 'active' : ''}`}
                            onClick={() => !isAnimating && setCurrentSlide(idx)}
                        ></div>
                    ))}
                </div>
                <button className="nav-arrow next" onClick={handleNext}>
                    <i className="fa-solid fa-arrow-right"></i>
                </button>
            </div>

            {/* Decorative Elements */}
            <div className="diagonal-deco-line"></div>
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <span>SCROLL</span>
            </div>
        </section>
    );
};

export default Hero;