import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="header">
      <div className="header-container">
        <div className="header-text">
          <h1>Host your meeting with <br/> world-class amenities. <br/> Starting at <span>₹199/-!</span></h1>
          
        </div>
        <div className="header-image">
          <img src="./coworking_video.png" alt="Meeting" />
        </div>
      </div>
    </header>
  );
};

export default Header;
