import React, { useState, UseEffect } from 'react'
import nextimg from '../images/cycle.png';
import ectricscooter from '../images/scootermapimg.png'
import eleimg from '../images/ele.gif';

function ImageChange(props) {
  // For Refress page 
  const [imgSrc, setImgSrc] = useState('');
  const [fallback, setFallback] = useState(false);
  const reloadSrc = e => { 
    if(fallback){
      e.target.src = nextimg ;
    }else{
      e.target.src = imgSrc
      setFallback(true)
    }
    UseEffect( () => {
        if(ectricscooter){
        setImgSrc(ectricscooter);
        }
    },[ectricscooter])}
 
  return (
    <div>
      <img className='bannerImg scooter thumbnail__img' src={'imgSrc'} onError={reloadSrc}  />
    </div>
  )
}

export default ImageChange
