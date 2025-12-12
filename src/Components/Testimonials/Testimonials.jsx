import React, { useState, useEffect } from 'react';
import './testimonials.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const testimonialsData = [
    {
        id: 1,
        text: "“buildzie transformed our vision into reality with unmatched precision and expertise. Their dedication to quality and attention to detail exceeded our expectations.”",
        author: "Ken Martina",
        role: "Supervisor",
        image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 2,
        text: "“The team was professional, timely, and delivered exceptional results. I would highly recommend them for any large scale construction projects.”",
        author: "Mark Roy",
        role: "CEO",
        image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 3,
        text: "“Outstanding workmanship and project management. They kept us informed at every stage and finished ahead of schedule.”",
        author: "Micheal Havin",
        role: "Manager",
        image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&q=80&w=100"
    },
    {
        id: 4,
        text: "“Quality materials and honest execution. It's rare to find such transparency in this industry. Truly impressed.”",
        author: "Diana Noor",
        role: "Employe",
        image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&q=80&w=100"
    }
];

const Testimonials = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [itemsPerView, setItemsPerView] = useState(3);

    // Responsive items per view
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setItemsPerView(1);
            } else if (window.innerWidth < 1200) {
                setItemsPerView(2);
            } else {
                setItemsPerView(3); // Match image showing 4 cards? Usually 3 or 4. Image showed 4 columns potentially, 
                // but user css says "four-item_carousel". Let's try 4 if screen is large enough, or stick to 3 for standard readable size.
                // The provided CSS had "width 415px" which implies ~3-4 on large screens. Let's stick to 3 for better readability on 1200px container.
                // Or actually 4 since user mentioned "four-item_carousel".
                // Let's do 3 for now as safe bet, 4 makes text small.
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize();
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Create extended array for infinite loop (Data + Data + Data)
    const extendedData = [...testimonialsData, ...testimonialsData, ...testimonialsData];
    const transitionDuration = 500;

    // Auto slide
    useEffect(() => {
        const interval = setInterval(() => {
            handleNext();
        }, 5000); // 5 seconds auto play
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

    // Infinite Loop Reset Logic
    useEffect(() => {
        if (currentIndex === testimonialsData.length) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(0);
            }, transitionDuration);
        } else if (currentIndex === -1) {
            setTimeout(() => {
                setIsTransitioning(false);
                setCurrentIndex(testimonialsData.length - 1);
            }, transitionDuration);
        } else {
            setTimeout(() => {
                setIsTransitioning(false);
            }, transitionDuration);
        }
    }, [currentIndex]);

    // Calculate transform
    const translateValue = -(currentIndex + testimonialsData.length) * (100 / itemsPerView);

    return (
        <section className="testimonial-two" id="testimonials">
            <div className="container">
                {/* Header & Arrows */}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px' }}>
                    <div className="sec-title">
                        -----<ScrollReveal text="OUR TESTIMONIAL" tagName="span" className="sub-title" />-----
                        <ScrollReveal text="Trusted by Homeowners" tagName="h2" />
                    </div>

                    {/* Arrows Desktop Position */}
                    <div className="testimonial-arrows display-desktop">
                        <button className="arrow-btn-circle prev" onClick={handlePrev}>
                            <i className="fa-solid fa-angle-left"></i>
                        </button>
                        <button className="arrow-btn-circle next" onClick={handleNext}>
                            <i className="fa-solid fa-angle-right"></i>
                        </button>
                    </div>
                </div>

                <div className="testimonial-slider-container">
                    <div
                        className="testimonial-track"
                        style={{
                            transform: `translateX(${translateValue}%)`,
                            transition: isTransitioning ? `transform ${transitionDuration}ms ease-in-out` : 'none'
                        }}
                    >
                        {extendedData.map((item, index) => (
                            <div className="testimonial-item-wrapper" style={{ width: `calc(100% / ${itemsPerView})` }} key={`${item.id}-${index}`}>
                                <div className="testimonial-block_two">
                                    <div className="testimonial-block_two-inner">
                                        <div className="testimonial-block_two-rating">
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                            <i className="fa-solid fa-star"></i>
                                        </div>
                                        <p className="testimonial-block_two-text">{item.text}</p>

                                        <div className="author-info">
                                            <div className="testimonial-block_two-author">
                                                {item.author}
                                                <span>{item.role}</span>
                                            </div>
                                        </div>

                                        <div className="testimonial-block_two-image">
                                            <img src={item.image} alt={item.author} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Mobile Arrows if needed, or hide desktop arrows using css media query */}
            </div>
        </section>
    );
};

export default Testimonials;
