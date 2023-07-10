import React, { useState } from 'react';
import { Creators } from './components/Creators/Creators';
import { Hunks10k } from './components/Hunks10k/Hunks10k';
import { PFPHunks } from './components/PFPHunks/PFPHunks';
import { SocialMedia } from './components/SocialMedia/SocialMedia';
import { WelcomePage } from './components/WelcomePage/WelcomePage';
import { Background } from './components/Utils/Background';

export const App = () => {
  const [distanceFromBottom, setDistanceFromBottom] = useState(0);

  const handleHeightChange = (distance: any) => {
    setDistanceFromBottom(distance);
  };

  return (
    <div style = {{  position: "relative", overflow: "hidden",}}>
      <WelcomePage/>
      <Hunks10k/>
      <PFPHunks/>
      <Creators/>
      <SocialMedia onHeightChange={handleHeightChange} />
      <Background fullHeight={distanceFromBottom}/>
    </div>
  );
};
