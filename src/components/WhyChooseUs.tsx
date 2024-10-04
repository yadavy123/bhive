import React from 'react';

const WhyChooseUs: React.FC = () => {
  const benefits = [
    { icon: '/choose_icon.png', text: 'Community Events' },
    { icon: '/choose_icon.png', text: 'Gym Facilities' },
    { icon: '/choose_icon.png', text: 'High-Speed WiFi' },
    { icon: '/choose_icon.png', text: 'Cafes & Tea Bar' },
    { icon: '/choose_icon.png', text: 'Affordable' },
    { icon: '/choose_icon.png', text: 'Comfort Lounges' },
    { icon: '/choose_icon.png', text: 'Quick Booking' },
    { icon: '/choose_icon.png', text: 'Sports Area' }
  ];

  return (
    <section className="why-choose-us">
      <h2>Why Choose Us?</h2>
      <div className="benefits">
        {benefits.map((benefit, index) => (
          <div className="benefit-item" key={index}>
            <img src={benefit.icon}  className="benefit-icon" />
            <p>{benefit.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChooseUs;
