import React, { useState, useEffect, useRef } from 'react';
import './Creators-SingleCreator.css';
import { motion } from "framer-motion";

interface SingleCreatorProps {
    signature: string;
    title: string;
    description: string;
    rotation: string;
    num: number;
    s1: string;
    s2: string;
}

export const SingleCreator = (props: SingleCreatorProps) => {
    const [isInfoVisible, setIsInfoVisible] = useState(false);
    const infoRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        const observer = new IntersectionObserver(entries => {
            entries.forEach(entry => {
                if (entry.target === infoRef.current && entry.isIntersecting) {
                    setIsInfoVisible(true);
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        if (infoRef.current) {
            observer.observe(infoRef.current);
        }

        return () => {
            if (infoRef.current) {
                observer.unobserve(infoRef.current);
            }
        };
    }, []);

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
            <div className="Image" style={{backgroundImage: `url(${require("../../../src/images/creators/" + `${props.signature}` + ".jpeg")})`}}></div>
            <p className="Signature">@{props.signature}</p>
        </motion.div>
        <div className={`Info ${isInfoVisible ? 'fade-in-top' : ''}`} ref={infoRef}>
                <p className="Title">{props.title}</p>
                {props.description.split(",").map((e) => { return <p key={e} className="Description">{e.trim()}</p> })}
            </div>
        </div>
    );
}