import React from 'react';
import {NavBar} from './WelcomePage-NavBar';
import {Slider} from './WelcomePage-Slider';
import {Trailer} from './WelcomePage-Trailer';
import './WelcomePage.css';

export const WelcomePage = () => {
    return (
      <div className={"WelcomePage"}>
         <NavBar/>
         <Slider/>
         <Trailer/>
      </div>
    );
  }