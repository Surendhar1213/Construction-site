import React, { useState, useEffect, useRef } from 'react';
import './projects.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const Projects = () => {
    const [counts, setCounts] = useState({
        clients: 0,
        projects: 0,
        experience: 0,
        offices: 0
    });

    const [hasAnimated, setHasAnimated] = useState(false);
    const sectionRef = useRef(null);

    const [leftImageIndex, setLeftImageIndex] = useState(0);
    const [rightImageIndex, setRightImageIndex] = useState(0);
    const [imagesLoaded, setImagesLoaded] = useState({
        left: [],
        right: []
    });

    // Left side - Home Interior Images (6 different images)
    const leftImages = [
        'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=800&q=80',
        'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=800&q=80',
        'https://images.unsplash.com/photo-1556912173-46c336c7fd55?w=800&q=80',
        'https://images.unsplash.com/photo-1615873968403-89e068629265?w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&q=80',
        'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&q=80'
    ];

    // Right side - Completed Building Construction Images (6 different images)
    const rightImages = [
        'https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=900&q=80',
        'https://images.unsplash.com/photo-1448630360428-65456885c650?w=900&q=80',
        'https://images.unsplash.com/photo-1464146072230-91cabc968266?w=900&q=80',
        'https://images.unsplash.com/photo-1511452885600-a3d2c9148a31?w=900&q=80',
        'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?w=900&q=80',
        'https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=900&q=80'
    ];

    // Preload images with lazy loading
    useEffect(() => {
        const preloadImage = (src, side, index) => {
            return new Promise((resolve) => {
                const img = new Image();
                img.src = src;
                img.loading = 'lazy';
                img.onload = () => {
                    setImagesLoaded(prev => ({
                        ...prev,
                        [side]: [...prev[side], index]
                    }));
                    resolve();
                };
                img.onerror = () => resolve(); // Continue even if image fails
            });
        };

        // Preload first images immediately, rest with delay
        preloadImage(leftImages[0], 'left', 0);
        preloadImage(rightImages[0], 'right', 0);

        setTimeout(() => {
            leftImages.forEach((img, idx) => {
                if (idx > 0) preloadImage(img, 'left', idx);
            });
            rightImages.forEach((img, idx) => {
                if (idx > 0) preloadImage(img, 'right', idx);
            });
        }, 500);
    }, []);

    // Image slider effect - 2 seconds interval with slide animation
    useEffect(() => {
        const leftInterval = setInterval(() => {
            setLeftImageIndex((prev) => (prev + 1) % leftImages.length);
        }, 3000);

        const rightInterval = setInterval(() => {
            setRightImageIndex((prev) => (prev + 1) % rightImages.length);
        }, 3000);

        return () => {
            clearInterval(leftInterval);
            clearInterval(rightInterval);
        };
    }, []);

    // Counter animation
    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting && !hasAnimated) {
                        setHasAnimated(true);
                        animateCounters();
                    }
                });
            },
            { threshold: 0.3 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => {
            if (sectionRef.current) {
                observer.unobserve(sectionRef.current);
            }
        };
    }, [hasAnimated]);

    const animateCounters = () => {
        const duration = 2000;
        const steps = 60;
        const interval = duration / steps;

        const targets = {
            clients: 215,
            projects: 550,
            experience: 15,
            offices: 25
        };

        let step = 0;
        const timer = setInterval(() => {
            step++;
            const progress = step / steps;
            // Ease out function
            const ease = 1 - Math.pow(1 - progress, 3);

            setCounts({
                clients: Math.floor(targets.clients * ease),
                projects: Math.floor(targets.projects * ease),
                experience: Math.floor(targets.experience * ease),
                offices: Math.floor(targets.offices * ease)
            });

            if (step >= steps) {
                clearInterval(timer);
                setCounts(targets);
            }
        }, interval);
    };

    return (
        <section className="projects-section" id="projects" ref={sectionRef}>
            <div className="container">
                {/* Header */}
                <div className="section-header centered-header">
                    <ScrollReveal text="ACHIEVEMENTS" tagName="span" className="sub-title" />
                    <ScrollReveal
                        text="Our Completed Projects"
                        tagName="h2"
                        className="main-title"
                    />
                    <div className="stats-subtitle-wrapper">
                        <ScrollReveal
                            text="Building Dreams Into Reality With Excellence And Precision"
                            tagName="p"
                            className="stats-subtitle"
                        />
                    </div>
                </div>

                {/* Main Layout - Side by Side */}
                <div className="stats-main-layout">

                    {/* Left Side - Image Slider */}
                    <div className="stats-left-section">
                        <div className="stats-image-section left-image">
                            <div className="image-slider-container">
                                {leftImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`image-slide ${index === leftImageIndex ? 'active' : ''} ${index === (leftImageIndex - 1 + leftImages.length) % leftImages.length ? 'prev' : ''
                                            } ${imagesLoaded.left.includes(index) ? 'loaded' : 'loading'}`}
                                        style={{
                                            backgroundImage: imagesLoaded.left.includes(index) ? `url(${img})` : 'none'
                                        }}
                                    >
                                    </div>
                                ))}
                            </div>
                            <div className="project-badge">
                                <span>Interior</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Numbers & Image */}
                    <div className="stats-right-section">
                        {/* Stats Grid */}
                        <div className="stats-grid">
                            <div className="stat-card">
                                <div className="stat-number">{counts.clients}+</div>
                                <div className="stat-label">Clients</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-number">{counts.projects}+</div>
                                <div className="stat-label">Projects</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-number">{counts.experience}+</div>
                                <div className="stat-label">Years Exp</div>
                            </div>

                            <div className="stat-card">
                                <div className="stat-number">{counts.offices}+</div>
                                <div className="stat-label">Offices</div>
                            </div>
                        </div>

                        {/* Right Image Section */}
                        <div className="stats-image-section right-image">
                            <div className="image-slider-container">
                                {rightImages.map((img, index) => (
                                    <div
                                        key={index}
                                        className={`image-slide ${index === rightImageIndex ? 'active' : ''} ${index === (rightImageIndex - 1 + rightImages.length) % rightImages.length ? 'prev' : ''
                                            } ${imagesLoaded.right.includes(index) ? 'loaded' : 'loading'}`}
                                        style={{
                                            backgroundImage: imagesLoaded.right.includes(index) ? `url(${img})` : 'none'
                                        }}
                                    >
                                    </div>
                                ))}
                            </div>
                            <div className="project-badge">
                                <span>Construction</span>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Projects;
