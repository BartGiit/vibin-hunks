/* eslint-disable no-useless-concat */
import React from 'react';
import './Creators-SingleCreator.css';
import { motion } from "framer-motion";

interface SingleCreatorProps {
    image: string;
    signature: string;
    title: string;
    description: string;
    rotation: string;
    num: number;
    s1: string;
    s2: string;
 }

export const SingleCreator = (props: SingleCreatorProps) => {
    return (
      <div className={"SingleCreator"}>
        <motion.div className="Card" animate={{
              transform:  [
                `translateY(${props.s1}${props.num}px) rotate(${props.rotation}`,
                `translateY(${props.s2}${props.num}px) rotate(${props.rotation}`,
                `translateY(${props.s1}${props.num}px) rotate(${props.rotation}`,
              ],
              animationTimingFunction: [
                `cubic-bezier(0.4, 0, 0.2, 1)`,
                `cubic-bezier(0.4, 0, 0.2, 1)`,
                `cubic-bezier(0.4, 0, 0.2, 1)`,
              ]
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}>
            <div className="Image" style={{backgroundImage: `url(${require("../../../src/images/PFPHunks/1-" + `${props.image}` + "-Vibin-Hunks-Profile.png")})`}}></div>
            <p className="Signature">@{props.signature}</p>
        </motion.div>
        <div className="Info">
            <p className="Title">{props.title}</p>
            {props.description.split(",").map((e)=>{return <p key={e} className="Description">{e.trim()}</p>})}
        </div>
      </div>
    );
  }