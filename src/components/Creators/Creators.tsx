import React from 'react';
import { SingleCreator } from './Creators-SingleCreator';
import './Creators.css';
import desktopCreatorsImage from '../../../src/images/text/desktopCreators.svg';

export const Creators = () => {
  return (
    <div className="Creators">
      <div className="Heading">creators<img src={desktopCreatorsImage} alt="Hunks Creators"/></div>
      <div className="Cards">
        <SingleCreator s1={"-"} s2={""} num={4} key={1} rotation="4deg" image="1" signature="Michello" title="Artist" description="Benchpress 110kg, Project concept, 3D graphic, 3D animation" />
        <SingleCreator s1={""} s2={"-"} num={7} key={2} rotation="-2deg" image="2" signature="Nicco" title="Marketing" description="Squats 200ks, Project concept, SMM" />
        <SingleCreator s1={"-"} s2={""} num={8} key={3} rotation="4.3deg" image="3" signature="Bartolini" title="Developer" description="10 mins jumping jack, Project concept, Web and blockchain" />
        <SingleCreator s1={""} s2={"-"} num={3} key={4} rotation="-3deg" image="4" signature="Kamillo" title="Developer" description="Handstand push-ups x50, PYTHON coding, Blender addon" />
      </div>
    </div>
  );
};
