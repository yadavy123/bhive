import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import WhyChooseUs from './components/WhyChooseUs';
import SpaceOverview from './components/SpaceOverview';
import DownloadApp from './components/DownloadApp';
import './App.css';
import Topheader from './components/top-header';
import Footer from './components/footer';

interface Space {
  id: number;
  name: string;
  price: string;
  duration: string;
  image: string;
}

const App: React.FC = () => {
  const [spaces, setSpaces] = useState<Space[]>([]);

  useEffect(() => {
    fetch('/spaces.json') // Dummy API or local file
      .then((res) => res.json())
      .then((data:any) => setSpaces(data.spaces));
  }, []);

  console.log(">>>>>>>>>>>>>spaces",spaces);


  return (
    <div className="App">
      <Topheader/>
      <Header />
      <div className='container'>
      <WhyChooseUs />
      <SpaceOverview spaces={spaces} />
      <DownloadApp />
    </div>
    <Footer/>
    </div>
  );
};

export default App;
