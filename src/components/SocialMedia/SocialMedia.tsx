import React, { useEffect } from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import './SocialMedia.css';
import desktopPleaseImage from '../../../src/images/text/desktopPlease.svg';
import desktopDoItImage from '../../../src/images/text/desktopDoIt.svg';
import mobileDoItImage from '../../../src/images/text/mobileDoIt.svg';
import desktopYouKnowImage from '../../../src/images/text/desktopYouKnow.svg';
import logo from '../../../src/images/logoNoShadow.svg';

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

  const videoSource = () => {
    // Check if the browser is Safari
    const isSafari = /^((?!chrome|android).)*safari/i.test(navigator.userAgent);
    // Use different video source based on the browser
    return isSafari ? require(`../../../src/images/Amor.hevc.mp4`) : require(`../../../src/images/Amor.webm`);
  };

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
        <video autoPlay loop muted>
          <source src={videoSource()} type={/^((?!chrome|android).)*safari/i.test(navigator.userAgent) ? 'video/mp4; codecs=hvc1' : 'video/webm'} />
        </video>
        <video autoPlay loop muted>
          <source src={require(`../../../src/images/Amor.h264`)} type={"video/mp4; codecs=hvc1"} />
        </video>
      </div>
    </div>
  );
};
