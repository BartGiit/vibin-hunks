import React, { useEffect, useState } from 'react';
import {useRef} from 'react';
import {FaBars, FaTimes, FaTwitter, FaInstagram, FaDiscord} from 'react-icons/fa';
import './WelcomePage-NavBar.css';
import logo from '../../../src/images/logoNoShadow.svg';
import collections from '../../../src/images/text/collections.svg';
import vibeWithUs from '../../../src/images/text/vibeWithUs.svg';

type NavBarProps = {
  hunks10kRef: React.RefObject<HTMLDivElement>;
  pfpHunksRef: React.RefObject<HTMLDivElement>;
};

export const NavBar = ({ hunks10kRef, pfpHunksRef }: NavBarProps) => {
     const navRef = useRef<HTMLDivElement>(null);
     const [scrollActive, setScrollActive] = useState(false);
     const [isMenuOpen, setIsMenuOpen] = useState(false);

     //Function scroll
     const scrollToComponent = (componentRef:any) => {
      if(window.innerWidth<550){
        toggleNavBar();
        const offset = 40;
        const yPosition = componentRef.current.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }else{
        componentRef.current.scrollIntoView({ behavior: 'smooth', block: "center" })
      }
    }

     //Function that adds blur

     useEffect(() => {
          const handleScroll = () => {
            if (window.scrollY > 40) {
              setScrollActive(true);
            } else {
              setScrollActive(false);
            }
          };
      
          window.addEventListener('scroll', handleScroll);
      
          return () => {
            window.removeEventListener('scroll', handleScroll);
          };
        }, []);
      
        const toggleNavBar = () => {
          setIsMenuOpen(!isMenuOpen);

          if (!isMenuOpen) {
              document.body.style.overflow = 'hidden';
          } else {
              document.body.style.overflow = 'auto';
          }
      
          navRef.current !== null && navRef.current.classList.toggle("Responsive");
      };

    return (
         <div className={"NavBar"}>
          <div className={"NavImg"}><div className={`BackGround ${scrollActive ? 'Active' : ''}`}/><img src={logo} alt="Vibin Hunks Collection Logo" /></div>
          <div className={"NavList"} ref={navRef}>
               <button onClick={toggleNavBar}><FaTimes/></button>  
               <img src={collections} className={"Mobile"} alt="NFT Collections 3D Hunks"/>
               <p onClick={() => scrollToComponent(hunks10kRef)}>VIBIN' HUNKS</p>
               <p className={"NavListSpace"} onClick={() => scrollToComponent(pfpHunksRef)}>PFP HUNKS</p>
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