import React from 'react';
import {motion} from "framer-motion"
import './Additional.css'

interface AdditionalProps {
     additionalName: string;
     additionalFloat: "Two" | "";
  }

export const Additional = (props:AdditionalProps) => {

    return (
          <motion.div 
               drag 
               dragConstraints={{left: 0,top: 0,right: 0,bottom: 0}} 
               className={`Draggable ${props.additionalFloat}`}>
               <div className={`Additional ${props.additionalFloat}`} style={{backgroundImage: `url(${require("../../../src/images/Additionals/" + props.additionalName + "/" + props.additionalName + ".png")})`}}/>
          </motion.div>
    );
  }