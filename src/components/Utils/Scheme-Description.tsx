import React from 'react';
import './Scheme-Description.css';

interface DescriptionProps {
   titleFirst: string;
   titleSecond: string;
   descriptionFirst: string;
   descriptionSecond: string;
   align: "left" | "right";
   marginLeft: "auto" | "17.5%";
   marginRight: "auto" | "17.5%";
}

export const Description = (props: DescriptionProps) => {
    return (
         <div className={"Description Scheme"}>
            <h1 className={"Gold"} style={{textAlign:props.align}}>{props.titleFirst}</h1>
            <h1 style={{textAlign:props.align}}>{props.titleSecond}</h1>
            <p className={"Space"} style={{textAlign:props.align}}>{props.descriptionFirst}</p>
            <p style={{textAlign:props.align}}>{props.descriptionSecond}</p>
            <a href="toBeAdded" className={"Btn"} style={{marginLeft:props.marginLeft, marginRight:props.marginRight}}>Soon on Opensea</a>
         </div>
    );
  }