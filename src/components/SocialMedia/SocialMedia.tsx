import React, { useEffect, useState, useRef } from 'react';
import { FaDiscord, FaInstagram, FaTwitter } from 'react-icons/fa';
import './SocialMedia.css';
import desktopPleaseImage from '../../../src/images/text/desktopPlease.svg';
import desktopDoItImage from '../../../src/images/text/desktopDoIt.svg';
import mobileDoItImage from '../../../src/images/text/mobileDoIt.svg';
import desktopYouKnowImage from '../../../src/images/text/desktopYouKnow.svg';
import logo from '../../../src/images/logoNoShadow.svg';
import AngelCanvas from '../Utils/CanvasAngel';
import BlueBackground from "../../../src/images/background/blue_background.mp4";

export const SocialMedia = ({ onHeightChange, Mobile }: { onHeightChange: (distance: number) => void; Mobile: boolean }) => {
  
  const [renderKey, setRenderKey] = useState(Date.now());
  const [isLoveVisible, setIsLoveVisible] = useState(false);
  const loveRef = useRef<HTMLDivElement | null>(null);
  const pRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      const totalHeight = document.documentElement.scrollHeight;
      onHeightChange(totalHeight);
    };

    window.addEventListener('load', handleScroll);
    window.addEventListener('scroll', handleScroll);

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.target === loveRef.current || entry.target === pRef.current) {
              if(entry.isIntersecting ){
                setIsLoveVisible(true);
                observer.unobserve(entry.target);
              }
            }
        });
    }, { threshold: 0.6 });

    if (loveRef.current) {
        observer.observe(loveRef.current);
    }
    
    if (pRef.current) {
        observer.observe(pRef.current);
    }

    // Force re-render on page load
    setRenderKey(Date.now());

    return () => {
      window.removeEventListener('load', handleScroll);
      window.removeEventListener('scroll', handleScroll);
      if (loveRef.current) {
          observer.unobserve(loveRef.current);
      }
      if (pRef.current) {
          observer.unobserve(pRef.current);
      }
    };
  }, []);

  return (
    <div className={"SocialMedia"}>
      <div className={"BlueBackground"} key={renderKey}>
        <video autoPlay loop muted playsInline>
          <source src={BlueBackground} type='video/mp4' />
        </video>
      </div>
      <div className="TextWrapper">
        <div className="Text">
          <div className={`Love ${isLoveVisible ? 'fade-in-top' : ''}`} ref={loveRef}>
            <p>Show us your love!</p>
          </div>
          <div className="Icons">
            <a href="toBeAdded" target="_blank" rel="noopener noreferrer"><FaTwitter className={"IconFontAwesome"} /></a>
            <a href="toBeAdded" target="_blank" rel="noopener noreferrer"><FaInstagram className={"IconFontAwesome"} /></a>
            <a href="toBeAdded" target="_blank" rel="noopener noreferrer"><FaDiscord className={"IconFontAwesome"} /></a>
            <a href="toBeAdded" target="_blank" rel="noopener noreferrer"><img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg" alt="Vibin' Hunks Opensea" /></a>
          </div>
          <div className="Logo">
            <img src={logo} alt="Vibin Hunks Collection Logo" />
          </div>
          <img className="textSVG" src={desktopPleaseImage} alt="Hunks Social Media NFT" />
          {Mobile ? (<img src={mobileDoItImage} className={"textSVGsecond"} alt="Hunks Social Media NFT" />) : (<img src={desktopDoItImage} className={"textSVGsecond"} alt="Hunks Social Media NFT" />)}
        </div>
      </div>
      <div className="Image">
        <p ref={pRef} className={`${isLoveVisible ? 'fade-in-top' : ''}`}>Show us your love!</p>
        <img className="textSVGthird" src={desktopYouKnowImage} alt="Hunks Social Media NFT" />
        <div className='Angel'>
          {Mobile ? <video autoPlay loop muted playsInline poster={require('../../../src/images/socialMedia/amor.jpeg')}><source src={require("../../../src/images/socialMedia/amor_mobile.mp4")} type='video/mp4'/></video> : <AngelCanvas children={undefined}/> }
        </div>
      </div>
    </div>
  );
};
