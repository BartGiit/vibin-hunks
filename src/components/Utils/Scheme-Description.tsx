import React, { useEffect, useRef, useState } from 'react';
import './Scheme-Description.css';

interface DescriptionProps {
   id: string;
   titleFirst: string;
   titleSecond: string;
   descriptionFirst: string;
   descriptionSecond: string;
   align: "left" | "right";
   marginLeft: "auto" | "17.5%";
   marginRight: "auto" | "17.5%";
}

export const Description = (props: DescriptionProps) => {
    const [isVisible, setIsVisible] = useState(false);
    const descriptionRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
      const observer = new IntersectionObserver(entries => {
          entries.forEach(entry => {
              if (entry.target.id === props.id && entry.isIntersecting) {
                  setIsVisible(true);
                  observer.unobserve(entry.target);
              }
          });
      }, { threshold: 0.5 });
  
      if (descriptionRef.current) {
          descriptionRef.current.id = props.id; 
          observer.observe(descriptionRef.current);
      }
  
      return () => {
          if (descriptionRef.current) {
              observer.unobserve(descriptionRef.current);
          }
      };
  }, [props.id]);
  

    return (
         <div 
             className={`Description Scheme ${isVisible ? 'fade-in-top' : ''}`}
             ref={descriptionRef}
         >
            <h1 className={"Gold"} style={{textAlign:props.align}}>{props.titleFirst}</h1>
            <h1 style={{textAlign:props.align}}>{props.titleSecond}</h1>
            <p className={"Space"} style={{textAlign:props.align}}>{props.descriptionFirst}</p>
            <p style={{textAlign:props.align}}>{props.descriptionSecond}</p>
            <a href="toBeAdded" className={"Btn"} style={{marginLeft:props.marginLeft, marginRight:props.marginRight}}>Soon on Opensea</a>
         </div>
    );
}
