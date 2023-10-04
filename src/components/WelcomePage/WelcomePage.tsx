import React, { useState } from 'react';
import {NavBar} from './WelcomePage-NavBar';
import {Slider} from './WelcomePage-Slider';
import {Trailer} from './WelcomePage-Trailer';
import './WelcomePage.css';

interface WelcomePageProps {
  onLoaded: () => void;
  hunks10kRef: React.RefObject<HTMLDivElement>;
  pfpHunksRef: React.RefObject<HTMLDivElement>;
}

export const WelcomePage: React.FC<WelcomePageProps> = ({ onLoaded, hunks10kRef, pfpHunksRef }) => {

  const [VideoSize, setVideoSize] = useState(
    window.innerWidth > 1220 ?
      { dynamicWidth: "big" } :
      window.innerWidth > 550 ?
        { dynamicWidth: "mid" } :
        { dynamicWidth: "small" }
  );

  return (
    <div className={"WelcomePage"}>
      <div className={"BlueBackground"}>
      <video autoPlay loop muted playsInline><source src={require("../../../src/images/background/blue_background.mp4")} type='video/mp4'/></video>
      </div>
      <NavBar hunks10kRef={hunks10kRef} pfpHunksRef={pfpHunksRef} />
      <Slider
        VideoSize={VideoSize}
        setVideoSize={setVideoSize}
        onReady={onLoaded}  
      />
      <Trailer />
    </div>
  );
}