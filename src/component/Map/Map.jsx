import React, { useState, useRef, Component, useEffect, useEffects, useLayoutEffect,setState } from 'react'
import MapImg from "../images/mapbg.jpg"
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import ectricscooter from '../images/scootermapimg.png'
import HorizontalScroll from 'react-scroll-horizontal'
import "./map.css"
import StyleMap from "../styleMap/Stylemap"
import Test from "../Test/Test"
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import Direction from '../Direction/Direction';
import DilogBox from '../DilogBox/DilogBox';
import nextimg from '../images/cycle.png';
import scooter from '../images/scooter2.png'
import girlimg from '../images/girlimg.gif';

 
function Map() {
  // For Top Bottom 
  const [scrollPosition, setPosition] = useState({ scrollY: 0 })
  const [indexOfImages, setIndexOfImages] = useState(0);
  
  // using Javascript 

  const imgs = [];
        imgs[0] =  nextimg;
        imgs[1] =  ectricscooter;
        imgs[2] = scooter;
        imgs[3] = girlimg;

  window.onload = function(){
    const random = Math.floor(Math.random() * imgs.length);
    document.getElementById('changeImage').src = imgs[random];
  }
 
  // For Refress page 

  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollY: window.scrollY, scrollX: window.scrollX });
    }
    window.scrollTo({
      left: 0,
      top: 0,
      behavior: "smooth",
    })
    window.addEventListener('scroll', updatePosition)
    updatePosition()
    return () => window.removeEventListener('scroll', updatePosition)
  }, [])

 // End Top Bottum 
  return (
    <>
      <img className='mainMapImage' src={MapImg} />
      <div className="sectionOne">
        {(() => {
            if (scrollPosition.scrollY == 0) {
              return  <div className="circle styles postcng" style={{position:'absolute'}} >
                        <img className='bannerImg scooter thumbnail__img' src={ectricscooter}
                             id="changeImage"   />
                        <Direction />
                      </div>
              } 
            else if (scrollPosition.scrollY == 100) {
              return  <div className="circle styles postcng" style={{position:'absolute'}} >
                          <img className='bannerImg1 scooter thumbnail__img' src={ectricscooter} />
                          <span className="w3-text w3-tag scroll1">Scroll 1</span> 
                      </div>
              }
            else if (scrollPosition.scrollY == 200) {  
              return  <div className="circle styles postcng" style={{position:'absolute'}} >
                          <img className='bannerImg2 scooter' src={ectricscooter}  />
                          <span className="w3-text w3-tag scroll2">Scroll 2</span> 
                      </div>
            }
            else {
              //   return  alert("Not Found")
            }
          })()}
      </div>
      {console.log(scrollPosition)}
    </>
  )
}
export default Map