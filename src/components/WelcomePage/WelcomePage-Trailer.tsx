import React from 'react';
import './WelcomePage-Trailer.css';

export const Trailer = () => {
  const _onClick = (e:any) => {
    e.preventDefault()
  }
    return (
     <>
         <div className={"Trailer"}>
                <a className={"Btn"} href='/' target="_blank" onClick={e =>_onClick(e)} >Trailer coming soon</a>
         </div>
       </>
    );
  }