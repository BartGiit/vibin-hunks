import React, { useState, useEffect } from 'react';
import { Creators } from './components/Creators/Creators';
import { Hunks10k } from './components/Hunks10k/Hunks10k';
import { PFPHunks } from './components/PFPHunks/PFPHunks';
import { SocialMedia } from './components/SocialMedia/SocialMedia';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { Background } from './components/Utils/Background';

export const App = () => {
  const [distanceFromBottom, setDistanceFromBottom] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  const handleHeightChange = (distance: any) => {
    setDistanceFromBottom(distance);
  };

  // Checks if mobile view

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 550);
    };

    handleResize(); // Set initial state

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style = {{  position: "relative", overflow: "hidden",}}>
      <video src={require("./images/mid/video.mp4")} style={{width:"100px", height:"100px"}}></video>
      <WelcomePage/>
      <Hunks10k/>
      <PFPHunks/>
      <Creators/>
      <SocialMedia onHeightChange={handleHeightChange} Mobile={isMobile} />
      {isMobile ? null : (<Background fullHeight={distanceFromBottom}/>)}
    </div>
  );
};
