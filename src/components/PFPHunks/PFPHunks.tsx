import React from 'react';
import {Additional} from '../Utils/Additional';
import {Description} from '../Utils/Scheme-Description';
import {Gallery} from './PFPHunks-Gallery';
import './PFPHunks.css';

export const PFPHunks = () => {
    return (
      <div className={"PFPHunks"}>
        <Additional additionalName="gallon" additionalFloat={""}/>
        <Additional additionalName="shaker" additionalFloat={"Two"}/>
        <Gallery/>
        <Description marginLeft="17.5%" marginRight="auto" align="left" titleFirst="PFP" titleSecond="Hunks" descriptionFirst="PFP Hunks is your classic profile picture NFT collection but “on steroids”." descriptionSecond="Their proudly expressed masculinity will make you stand out compared to any other users’ wacky PFPs. Those Ethereum based portraits are depicting characters of the animated Vibin’ Hunks collection."/>
      </div>
    );
  }