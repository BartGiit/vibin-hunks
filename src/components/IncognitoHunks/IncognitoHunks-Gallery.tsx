import React, {useState} from 'react';
import './IncognitoHunks-Gallery.css';

import Image1 from '../../../src/images/IncognitoHunks/first.png';
import Image2 from '../../../src/images/IncognitoHunks/second.png';
import Image3 from '../../../src/images/IncognitoHunks/third.png';

export const Gallery = () => {

    return (
      <div className={"Gallery"}>
        <div className="First" style={{zIndex:0}}>
          <img src={Image1} alt="Hunk INCOGNITO"/>
        </div>
        <div className="Second" style={{zIndex:0}}>
          <img src={Image2} alt="Hunk INCOGNITO"/>
        </div>
        <div className="Third" style={{zIndex:0}}>
          <img src={Image3} alt="Hunk INCOGNITO"/>       
        </div>
      </div>
    );
  }