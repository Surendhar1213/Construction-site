import React, { useState, useEffect } from 'react';
import ScrollReveal from '../ScrollReveal/ScrollReveal';
import './services.css';

const servicesData = [
    {
        id: 1,
        title: "Residential Construction",
        description: "Best Construction Quality",
        features: ["Best Construction Quality", "High Standards of Constructions", "25 Years of Building Experience"],
        icon: "fa-solid fa-house-chimney",
        image: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=400",
        number: "01"
    },
    {
        id: 2,
        title: "Project Management",
        description: "High Standards of Constructions",
        features: ["Best Construction Quality", "High Standards of Constructions", "25 Years of Building Experience"],
        icon: "fa-solid fa-gears",
        image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
        number: "02"
    },
    {
        id: 3,
        title: "Interior Solutions",
        description: "25 Years of Building Experience",
        features: ["Best Construction Quality", "High Standards of Constructions", "25 Years of Building Experience"],
        icon: "fa-solid fa-helmet-safety",
        image: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=400",
        number: "03"
    },
    {
        id: 4,
        title: "Architecture & Planning",
        description: "Sustainable Engineering",
        features: ["Best Construction Quality", "High Standards of Constructions", "25 Years of Building Experience"],
        icon: "fa-solid fa-industry",
        image: "https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&q=80&w=400",
        number: "04"
    }
];

const Services = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);

    // Create extended array for infinite loop
    const extendedData = [...servicesData, ...servicesData, ...servicesData];
    const itemsPerView = 3;
    const transitionDuration = 500;

    // Auto slide every 2 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 2000);
        return () => clearInterval(interval);
    }, []);

    const handleNext = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev + 1);
    };

    const handlePrev = () => {
        if (isTransitioning) return;
        setIsTransitioning(true);
        setCurrentIndex(prev => prev - 1);
    };

    // Handle infinite loop reset
    useEffect(() => {
        if (currentIndex === servicesData.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, transitionDuration);
        } else if (currentIndex === -1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(servicesData.length - 1);
            }, transitionDuration);
        } else {
            setTimeout(() => {
                setIsTransitioning(false);
            }, transitionDuration);
        }
    }, [currentIndex]);

    // Calculate active index for progress bar
    const activeDataIndex = ((currentIndex % servicesData.length) + servicesData.length) % servicesData.length;

    // Calculate transform percentage
    const translateValue = -(currentIndex + servicesData.length) * (100 / itemsPerView);

    return (
        <section className="services-section" id="services">
            <div className="container">
                {/* Header */}
                <div className="section-header centered-header">
                    <ScrollReveal text="OUR SERVICES" tagName="span" className="sub-title" />
                    <ScrollReveal
                        text="Our Trending Services For Clients."
                        tagName="h2"
                        className="main-title"
                    />
                </div>

                {/* Slider Container */}
                <div className="services-slider-container">
                    <div
                        className="services-track"
                        style={{
                            transform: `translateX(${translateValue}%)`,
                            transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
                        }}
                    >
                        {extendedData.map((service, index) => (
                            <div
                                className="service-card-item"
                                key={`${service.id}-${index}`}
                            >
                                <div className="service-card-modern">
                                    <div className="card-top">
                                        <div className="icon-wrapper">
                                            <i className={service.icon}></i>
                                        </div>
                                        <div className="number-watermark-outline">{service.number}</div>
                                    </div>

                                    <h3 className="service-title">{service.title}</h3>

                                    <ul className="service-features">
                                        {service.features.map((feature, idx) => (
                                            <li key={idx}>
                                                <i className="fa-solid fa-check"></i> {feature}
                                            </li>
                                        ))}
                                    </ul>

                                    <div className="card-bottom">
                                        <a href="#" className="arrow-btn">
                                            <i className="fa-solid fa-arrow-right"></i>
                                        </a>
                                    </div>

                                    {/* Hover Image Popout */}
                                    <div className="card-hover-image">
                                        <img src={service.image} alt={service.title} />
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Custom Navigation & Progress */}
                <div className="slider-controls">
                    <button className="nav-text-btn" onClick={handlePrev}>
                        <i className="fa-solid fa-chevron-left"></i> PREV
                    </button>

                    <div className="progress-track">
                        <div
                            className="progress-bar"
                            style={{
                                width: `${((activeDataIndex + 1) / servicesData.length) * 100}%`
                            }}
                        ></div>
                    </div>

                    <button className="nav-text-btn" onClick={handleNext}>
                        NEXT <i className="fa-solid fa-chevron-right"></i>
                    </button>
                </div>

            </div>
        </section>
    );
};

export default Services;