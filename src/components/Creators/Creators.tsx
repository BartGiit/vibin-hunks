import React, { useEffect, useRef, useState } from 'react';
import { SingleCreator } from './Creators-SingleCreator';
import './Creators.css';
import desktopCreatorsImage from '../../../src/images/text/desktopCreators.svg';

export const Creators = () => {
  const [isVisible, setIsVisible] = useState(false);
  const headingRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.target === headingRef.current && entry.isIntersecting) {
                setIsVisible(true);
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 1 });

    if (headingRef.current) {
        observer.observe(headingRef.current);
    }

    return () => {
        if (headingRef.current) {
            observer.unobserve(headingRef.current);
        }
    };
  }, []);

  return (
    <div className="Creators">
      <div className={`Heading`} ref={headingRef}>
        <p className={`${isVisible ? 'fade-in-top' : ''}`}>creators</p>
        <img src={desktopCreatorsImage} alt="Hunks Creators"/>
      </div>
      <div className="Cards">
        <SingleCreator s1={"-"} s2={""} num={4} key={1} rotation="4deg" signature="Michael" title="Artist" description="Benchpress 110kg, Project concept, 3D graphic, 3D animation" />
        <SingleCreator s1={""} s2={"-"} num={7} key={2} rotation="-2deg" signature="Nic" title="Marketing" description="Squats 200ks, Project concept, SMM" />
        <SingleCreator s1={"-"} s2={""} num={8} key={3} rotation="4.3deg" signature="Bart" title="Developer" description="10 mins jumping jack, Project concept, Web and blockchain" />
        <SingleCreator s1={""} s2={"-"} num={3} key={4} rotation="-3deg" signature="Kamil" title="Developer" description="Handstand push-ups x50, PYTHON coding, Blender addon" />
      </div>
    </div>
  );
};
