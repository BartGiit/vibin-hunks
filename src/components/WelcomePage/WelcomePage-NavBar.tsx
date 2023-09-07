import React, { useEffect, useState } from 'react';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import {useRef} from 'react';
import {FaBars, FaTimes, FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa';
import './WelcomePage-NavBar.css';
import logo from '../../../src/images/logoNoShadow.svg';
import collections from '../../../src/images/text/collections.svg';
import vibeWithUs from '../../../src/images/text/vibeWithUs.svg';

export const NavBar = () => {
     const navRef = useRef<HTMLDivElement>(null);
     const [scrollActive, setScrollActive] = useState(false);
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     //Function that adds blur

    //  useEffect(() => {
    //       const handleScroll = () => {
    //         if (window.scrollY > 40) {
    //           setScrollActive(true);
    //         } else {
    //           setScrollActive(false);
    //         }
    //       };
      
    //       window.addEventListener('scroll', handleScroll);
      
    //       return () => {
    //         window.removeEventListener('scroll', handleScroll);
    //       };
    //     }, []);
      

     // Blocks scroll when menu open

    //  useEffect(() => {
    //       if (isMenuOpen) {
    //         disableBodyScroll(document.body);
    //       } else {
    //         enableBodyScroll(document.body);
    //       }
      
    //       return () => {
    //         enableBodyScroll(document.body);
    //       };
    //     }, [isMenuOpen]);
      
        const toggleNavBar = () => {
          setIsMenuOpen(!isMenuOpen);
          navRef.current !== null && navRef.current.classList.toggle("Responsive");
        };

    return (
         <div className={"NavBar"}>
          <div className={"NavImg"}><div className={`BackGround ${scrollActive ? 'Active' : ''}`}/><img src={logo} alt="Vibin Hunks Collection Logo" /></div>
          <div className={"NavList"} ref={navRef}>
               <button onClick={toggleNavBar}><FaTimes/></button>  
               <img src={collections} className={"Mobile"} alt="NFT Collections 3D Hunks"/>
               <p>VIBIN' HUNKS</p>
               <p className={"NavListSpace"}>PFP HUNKS</p>
               <div className={"RowFlex"}>
               <a href="toBeAdded" target="_blank"><FaTwitter className={"NavListSvg"}/></a>
               <a href="toBeAdded" target="_blank"><FaInstagram className={"NavListSvg"}/></a>
               <a href="toBeAdded" target="_blank"><FaDiscord className={"NavListSvg"}/></a>
               <a href="toBeAdded" target="_blank"><img src="https://storage.googleapis.com/opensea-static/Logomark/Logomark-Transparent%20White.svg" alt="Vibin' Hunks Opensea" /></a>
               </div>
               <img src={vibeWithUs} className={"Mobile Second"} alt="Vibin NFT Collections Hunks"/>
               <img src={logo} className={"SmallLogo"} alt="Vibin Hunks Collection Logo" />
          </div>
          <button onClick={toggleNavBar}><FaBars/></button>  
         </div>
    );
  }