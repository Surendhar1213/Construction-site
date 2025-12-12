import React, { useEffect, useRef, useState } from 'react';

const ScrollReveal = ({ text, tagName = 'p', className = '', style = {} }) => {
    const elementRef = useRef(null);
    const [scrollProgress, setScrollProgress] = useState(0);
    const words = text.split(' ');

    useEffect(() => {
        const handleScroll = () => {
            if (!elementRef.current) return;
            const { top, height } = elementRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Trigger animation when element enters the viewport (bottom 80%)
            // to when it's near the top.
            const start = windowHeight * 0.9;
            const end = windowHeight * 0.2; // Finish before it leaves top

            // Calculate progress 0 to 1
            let progress = (start - top) / (start - end);
            progress = Math.min(Math.max(progress, 0), 1);

            setScrollProgress(progress);
        };

        window.addEventListener('scroll', handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const Tag = tagName;

    return (
        <Tag ref={elementRef} className={className} style={style}>
            {words.map((word, index) => {
                const startThreshold = index / words.length;
                // Reveal logic: Opacity 1 if progress passes threshold, else faded
                const isVisible = scrollProgress > startThreshold;

                return (
                    <span
                        key={index}
                        style={{
                            opacity: isVisible ? 1 : 0.1, // Start very faint
                            transition: 'opacity 0.3s ease',
                            display: 'inline-block',
                            marginRight: '0.25em' // Space between words
                        }}
                    >
                        {word}
                    </span>
                );
            })}
        </Tag>
    );
};

export default ScrollReveal;
