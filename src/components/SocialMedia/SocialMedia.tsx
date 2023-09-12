import React, { useEffect } from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import './SocialMedia.css';
import desktopPleaseImage from '../../../src/images/text/desktopPlease.svg';
import desktopDoItImage from '../../../src/images/text/desktopDoIt.svg';
import mobileDoItImage from '../../../src/images/text/mobileDoIt.svg';
import desktopYouKnowImage from '../../../src/images/text/desktopYouKnow.svg';
import logo from '../../../src/images/logoNoShadow.svg';
import AngelCanvas from '../Utils/CanvasAngel';

export const SocialMedia = ({ onHeightChange, Mobile }: { onHeightChange: (distance: number) => void; Mobile: boolean }) => {

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;

      onHeightChange(totalHeight);
    };

    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={"SocialMedia"}>
      <div className="TextWrapper">
        <div className="Text">
          <div className="Love">
            <p>Show us your love!</p>
          </div>
          <div className="Icons">
            <a href="toBeAdded" target="_blank"><FaTwitter className={"IconFontAwesome"} /></a>
            <a href="toBeAdded" target="_blank"><FaInstagram className={"IconFontAwesome"} /></a>
            <a href="toBeAdded" target="_blank"><FaDiscord className={"IconFontAwesome"} /></a>
            <a href="toBeAdded" target="_blank"><img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg" alt="Vibin' Hunks Opensea" /></a>
          </div>
          <div className="Logo">
            <img src={logo} alt="Vibin Hunks Collection Logo" />
          </div>
          <img className="textSVG" src={desktopPleaseImage} alt="Hunks Social Media NFT" />
          {Mobile ? (<img src={mobileDoItImage} className={"textSVGsecond"} alt="Hunks Social Media NFT" />) : (<img src={desktopDoItImage} className={"textSVGsecond"} alt="Hunks Social Media NFT" />)}
        </div>
      </div>
      <div className="Image">
        <p>Show us your love!</p>
        <img className="textSVGthird" src={desktopYouKnowImage} alt="Hunks Social Media NFT" />
        <div className='Angel'>
        <AngelCanvas/> 
        </div>
      </div>
    </div>
  );
};
