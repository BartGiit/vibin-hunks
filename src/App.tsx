import React, { useState, useEffect } from 'react';
import { Creators } from './components/Creators/Creators';
import { Hunks10k } from './components/Hunks10k/Hunks10k';
import { PFPHunks } from './components/PFPHunks/PFPHunks';
import { SocialMedia } from './components/SocialMedia/SocialMedia';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { Background } from './components/Utils/Background';

export const App = () => {
  const [isWelcomePageLoaded, setIsWelcomePageLoaded] = useState(false);

  const [activeColor, setActiveColor] = useState("#97A5FF");

  const hunks10kRef = React.useRef(null);
  const pfpHunksRef = React.useRef(null);

  useEffect(() => {
    if (isWelcomePageLoaded) {
         const button = document.getElementById('ButtonContainer');
         const loading = document.getElementById('LoadingContainer');         
     if (button && loading){
      window.scrollTo(0, 1);
      setActiveColor("#97A5FF");
      setTimeout(() => {
      loading.style.display = 'none';
      button.style.display = 'block';
     }, 2700)
    }}
  }, [isWelcomePageLoaded]);

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
    <div style = {{ position: "relative", overflow: "hidden"}}>
      <WelcomePage onLoaded={() => setIsWelcomePageLoaded(true)} hunks10kRef={hunks10kRef} pfpHunksRef={pfpHunksRef}/>
      <div ref={hunks10kRef}>
          <Hunks10k/>
      </div>
      <div ref={pfpHunksRef}>
          <PFPHunks/>
      </div>
      <Creators/>
      <SocialMedia onHeightChange={handleHeightChange} Mobile={isMobile} />
      {isMobile ? null : (<Background fullHeight={distanceFromBottom} col={activeColor} key="activebg"/>)}
    </div>
 );
};
