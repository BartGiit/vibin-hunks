import React, {useState} from 'react';
import './PFPHunks-Gallery.css';

import Image11 from '../../../src/images/PFPHunks/1-1-Vibin-Hunks-Profile.jpeg';
import Image12 from '../../../src/images/PFPHunks/1-2-Vibin-Hunks-Profile.jpeg';
import Image13 from '../../../src/images/PFPHunks/1-3-Vibin-Hunks-Profile.jpeg';
import Image21 from '../../../src/images/PFPHunks/2-1-Vibin-Hunks-Profile.jpeg';
import Image22 from '../../../src/images/PFPHunks/2-2-Vibin-Hunks-Profile.jpeg';
import Image23 from '../../../src/images/PFPHunks/2-3-Vibin-Hunks-Profile.jpeg';
import Image31 from '../../../src/images/PFPHunks/3-1-Vibin-Hunks-Profile.jpeg';
import Image32 from '../../../src/images/PFPHunks/3-2-Vibin-Hunks-Profile.jpeg';
import Image33 from '../../../src/images/PFPHunks/3-3-Vibin-Hunks-Profile.jpeg';


export const Gallery = () => {

    // useState to control the visibility of InstructionSwipe
    const [showInstruction, setShowInstruction] = useState(true);  

  const [index, setIndex] = useState(["2","1","3"]);
  const [image, setImage] = useState({First:1, Second:1, Third:1});

  const changeImage = (e:string) => {
    let newValue:number;
    if(e === "First"){ 
      newValue = image.First + 1;
    }else if (e === "Second"){
      newValue = image.Second + 1;
    }else{
      newValue = image.Third + 1;
    }
    if(newValue === 4){
      newValue = 1;
    }
    setImage(prevState => ({
      ...prevState,
      [e]: newValue
  }));
  }

  const changeIndex = (e:string) => {
    if(e === "1"){
      const changedIndex = index.map((element)=>{
        if(element === "3"){
          return "2";
        }else if(element === e){
          return "3";
        }else{
          return (Number(element) - 1).toString();
        }
      })
      setIndex(changedIndex);
    }else{
      const changedIndex = index.map((element)=>{
        if(element === "3"){
          return "2";
        }else if(element === e){
          return "3";
        }else{
          return element
        }
      })
      setIndex(changedIndex);
    }
  }

  const handleClick = (e: any) => {
    e.currentTarget.style.zIndex === "3" 
      ? changeImage(e.currentTarget.className) 
      : changeIndex(e.currentTarget.style.zIndex);
  }

    return (
      <div className={"Gallery"} onMouseDown={() => setShowInstruction(false)}>
        <div className="First" style={{zIndex:index[0]}} onClick={handleClick}>
          <img src={Image11} alt="Hunk PFP" style={{display: image.First === 1 ? "block" : "none"}} />
          <img src={Image12} alt="Hunk PFP" style={{display: image.First === 2 ? "block" : "none"}} />
          <img src={Image13} alt="Hunk PFP" style={{display: image.First === 3 ? "block" : "none"}} />
        </div>
        <div className="Second" style={{zIndex:index[1]}} onClick={handleClick}>
          <img src={Image21} alt="Hunk PFP" style={{display: image.Second === 1 ? "block" : "none"}} />
          <img src={Image22} alt="Hunk PFP" style={{display: image.Second === 2 ? "block" : "none"}} />
          <img src={Image23} alt="Hunk PFP" style={{display: image.Second === 3 ? "block" : "none"}} />
        </div>
        <div className="Third" style={{zIndex:index[2]}} onClick={handleClick}>
          <img src={Image31} alt="Hunk PFP" style={{display: image.Third === 1 ? "block" : "none"}} />
          <img src={Image32} alt="Hunk PFP" style={{display: image.Third === 2 ? "block" : "none"}} />
          <img src={Image33} alt="Hunk PFP" style={{display: image.Third === 3 ? "block" : "none"}} />       
        </div>
        {showInstruction && (<div className={"InstructionTap"}>
          <video autoPlay loop muted playsInline>
              <source src={require("../../../src/images/instructions/tap.mp4")} type='video/mp4; codecs="hev1"'/>
              <source src={require("../../../src/images/instructions/tap.webm")} type='video/webm'/>
          </video> 
        </div>)}  
      </div>
    );
  }