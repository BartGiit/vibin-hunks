import React from 'react';
import {Description} from '../Utils/Scheme-Description';
import {Additional} from '../Utils/Additional';
import {Slider} from './Hunks10k-Slider';
import './Hunks10k.css';
import desktopRepsImage from '../../../src/images/text/desktopReps.svg';

export const Hunks10k = () => {
    return (
      <div className={"Hunks10k"}>
        <Additional additionalName="dumbbell" additionalFloat={""}/>
        <Additional additionalName="protein" additionalFloat={"Two"}/>
        <Description marginLeft="auto" marginRight="17.5%" align="right" titleFirst="Vibin'" titleSecond="Hunks" descriptionFirst="Vibin' Hunks are digital gym buffs who love lifting weights, cracking jokes and vibing with friends." descriptionSecond="They are a digital art collection of 10k NFTs based on Ethereum - combining 3d characters, animation, and pure testosterone."/>
        <Slider/>
        <img src={desktopRepsImage} alt="Hunks reps"/>
      </div>
    );
  }