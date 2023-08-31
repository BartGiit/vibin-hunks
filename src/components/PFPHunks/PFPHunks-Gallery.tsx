import React, {useState} from 'react';
import './PFPHunks-Gallery.css';

export const Gallery = () => {

  const [index, setIndex] = useState(["2","1","3"]);
  const [image, setImage] = useState({First:1, Second:1, Third:1});

  const changeImage = (e:string) => {
    let newValue:number;
    if(e === "First")
    {newValue = image.First + 1;
    }else if (e === "Second"){
      newValue = image.Second + 1;
    }else{
      newValue = image.Third + 1;
    }
    if(newValue === 5){
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

  const handleClick = (e:any) => {
    e.target.style.zIndex === "3" ? changeImage(e.target.className) : changeIndex(e.target.style.zIndex);
  }

    return (
      <div className={"Gallery"}>
        <div className="First" style={{zIndex:index[0], backgroundImage: `url(${require("../../../src/images/PFPHunks/1-" + image.First + "-Vibin-Hunks-Profile.jpeg")})`}} onClick={handleClick}></div>
        <div className="Second" style={{zIndex:index[1], backgroundImage: `url(${require("../../../src/images/PFPHunks/2-" + image.Second + "-Vibin-Hunks-Profile.jpeg")})`}} onClick={handleClick}></div>
        <div className="Third" style={{zIndex:index[2], backgroundImage: `url(${require("../../../src/images/PFPHunks/3-" + image.Third + "-Vibin-Hunks-Profile.jpeg")})`}} onClick={handleClick}></div>
      </div>
    );
  }