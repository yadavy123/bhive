import React from 'react';

const DownloadApp: React.FC = () => {
  return (
    <section className="download-app">
      <div className="download-container">
        <div className="download-image">
          <img src="./mobile.png" alt="App Preview" />
        </div>
        <div className="download-text">
          <h2>Download our app now</h2>
          <p>Boost your productivity with the BHIVE Workspace app. Elevate your workspace, collaborate efficiently, and unlock exclusive perks.</p>
          <div className="app-buttons">
            <img src="/googleplay.jpg" alt="Google Play" />
            <img src="/appleplay.jpg" alt="App Store" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default DownloadApp;
