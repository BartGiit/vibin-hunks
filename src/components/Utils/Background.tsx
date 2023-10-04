import React from 'react';
import "./Background.css"
import ellipseOne from '../../../src/images/background/ellipseOne.svg';
import ellipseTwo from '../../../src/images/background/ellipseTwo.svg';
import ellipseThree from '../../../src/images/background/ellipseThree.svg';
import ellipseFour from '../../../src/images/background/ellipseFour.svg';

interface HeightProps {
    fullHeight: number;
 }

 export const Background = (props: HeightProps) => {

  return <div className={"Background"} style = {{    
          width: "100vw",
          position: "absolute",
          left: "0",
          top: "0",
          zIndex: "-9999",
          height: `${props.fullHeight}px`,
          backgroundColor: "#97A5FF"}}>
            <div className={"EllipseOne"} style={{backgroundImage:`url("${ellipseOne}")`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}} />
            <div className={"EllipseTwo"} style={{backgroundImage:`url("${ellipseTwo}")`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}} />
            <div className={"EllipseThree"} style={{backgroundImage:`url("${ellipseThree}")`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}} />
            <div className={"EllipseFour"} style={{backgroundImage:`url("${ellipseFour}")`, backgroundSize:"100% 100%", backgroundRepeat:"no-repeat"}} />
          </div>;
};
