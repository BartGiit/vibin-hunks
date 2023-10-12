import React from 'react';
import {Description} from '../Utils/Scheme-Description';
import {Gallery} from './IncognitoHunks-Gallery';
import './IncognitoHunks.css';

export const IncognitoHunks = () => {
    return (
      <div className={"IncognitoHunks"}>
        <div className="Blur"/>
        <Gallery/>
        <Description id="description2" marginLeft="17.5%" marginRight="auto" align="left" titleFirst="TBA" titleSecond="Hunks" descriptionFirst="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus" descriptionSecond="Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui dicta minus molestiae"/>
      </div>
    );
  }