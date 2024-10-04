import React from 'react';

interface Space {
  id: number;
  name: string;
  price: string;
  duration: string;
  image: string;
}

interface SpaceCardProps {
  space: Space;
}

const SpaceCard: React.FC<SpaceCardProps> = ({ space }) => {
  return (

    <>
    <div className="card space-card">
        <div className="image-container">
        <img src={space.image} alt={space.name} className="space-image" />
            <span className="badge">Honeykomb</span>
        </div>
        <div className="content">
            <h2>{space.name}</h2>
            <p className="distance">6 Kms</p>
        </div>
        <div className="pricing">
            <div className="pass">
                <p>Day Pass</p>
                <h5>₹ 249 / Day</h5>
            </div>
            <div className="pass bulk-pass">
                <h5>₹ 2400 / 10 Days</h5>
            </div>
        </div>
    </div>

    </>
    

    
  );
};

export default SpaceCard;
