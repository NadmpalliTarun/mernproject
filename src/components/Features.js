import React from 'react';
import './Features.css';

function Features() {
  const features = [
    {
      text: 'Write and publish your own blog.',
      image: '/images/image1.jpg',  
    },
    {
      text: 'Explore trending topics and insights.',
      image: '/images/image2.jpg',
    },
    {
      text: 'Connect with like-minded readers and writers.',
      image: '/images/image3.jpg',
    },
  ];

  return (
    <section id="features" className="features-section">
      <h2>Features</h2>
      <div className="feature-boxes">
        {features.map((feature, index) => (
          <div key={index} className="feature-box">
            { }
            <img src={feature.image} alt={`Feature ${index + 1}`} className="feature-image" />
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Features;
