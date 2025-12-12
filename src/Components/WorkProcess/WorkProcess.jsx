import React from 'react';
import './workProcess.css';
import ScrollReveal from '../ScrollReveal/ScrollReveal';

const steps = [
    {
        id: '01',
        title: 'Project Consultation',
        description: 'We begin with a detailed meeting to understand your vision, functional requirements, and budget constraints to establish a solid foundation.',
        icon: 'fa-comments',
        image: 'https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '02',
        title: 'Blueprint & Design',
        description: 'Our expert architects draft precise 2D blueprints and 3D visualizations, ensuring every corner meets your expectations before we start.',
        icon: 'fa-compass-drafting',
        image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '03',
        title: 'Construction Phase',
        description: 'Our skilled engineers and workers bring the design to life using high-quality materials and adhering to strict safety standards.',
        icon: 'fa-hammer',
        image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&q=80&w=600'
    },
    {
        id: '04',
        title: 'Final Handover',
        description: 'After rigorous quality checks and inspections, we hand over the keys to your dream space, ready for you to move in.',
        icon: 'fa-key',
        image: 'https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&q=80&w=600'
    }
];

const WorkProcess = () => {
    return (
        <section className="work-process-section">
            <div className="container">
                <div className="section-header text-center">
                    <ScrollReveal text="WORK FLOW" tagName="span" className="sub-title-neon" />
                    <ScrollReveal text="How We Build Your Dream" tagName="h2" className="process-main-title" />
                </div>

                <div className="process-timeline-container">
                    {/* Dark Center Line */}
                    <div className="timeline-center-line"></div>

                    {steps.map((step, index) => (
                        <div className={`process-row ${index % 2 === 0 ? 'row-left' : 'row-right'}`} key={step.id}>
                            {/* Text Side */}
                            <div className="process-content">
                                <span className="process-number-badge">{step.id}</span>
                                <h3 className="process-title">{step.title}</h3>
                                <p className="process-desc">{step.description}</p>
                            </div>

                            {/* Icon Center Node */}
                            <div className="process-center-node">
                                <i className={`fa-solid ${step.icon}`}></i>
                            </div>

                            {/* Image Side */}
                            <div className="process-image-wrapper">
                                <img src={step.image} alt={step.title} loading="lazy" />
                                <div className="img-overlay"></div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WorkProcess;
