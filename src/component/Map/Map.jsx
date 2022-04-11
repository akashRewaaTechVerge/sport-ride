import React, { useState, useRef, Component, useEffect, useLayoutEffect } from 'react'
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

function Map() {
// For Top Bottom 
  const [scrollPosition, setPosition] = useState({ scrollY: 0 })
  const [indexOfImages, setIndexOfImages] = useState(0);
  useEffect(() => {
    function updatePosition() {
      setPosition({ scrollY: window.scrollY , scrollX: window.scrollX });
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
      <div className="sectionOne" >
        {(() => {
          if (window.scrollY == 200) {
            // let left = window.scrollY - 160;
            //  console.log(left)
            return <div className="circle styles postcng"
              style={{ position: 'absolute' }}>  
              <img className='bannerImg scooter postionCahnge' src={ectricscooter} style={{position:'relative', duration:'8s' , marginLeft: '100%'}}  />
            </div>
          }
          else if (window.scrollY == 400) {
            // let left = window.scrollY - 160;
            //  console.log(left)
            return <div className="circle styles postcng"
              style={{ position: 'absolute' }}>  
              <img className='bannerImg scooter postion400' src={ectricscooter} style={{position:'relative', duration:'8s' , marginLeft: '150%'}}  />
            </div>
          }
          else if (scrollPosition.scrollY == 900) {
            return <div className="circle styles postcng"
              style={{ position: 'absolute' }}> { }
              <img className='bannerImg scooter postion900'  src={ectricscooter} style={{position:'relative', marginleft:'100%'}} />
            </div>
          }
          else if (scrollPosition.scrollY <= 1955) {
            function scrollWin() {
              window.scrollTo(200, 0);
            }
            return <div className="circle styles"
              style={{ position: 'absolute' }}>
              <img className='bannerImg scooter' src={ectricscooter} style={{ position: 'relative', height: '20%', top: scrollPosition.scrollY, marginLeft: "10%" }} />
            </div>
          }
          else {
            return <div className="circle styles zoom"
              style={{ position: 'absolute', marginLeft: "10%", marginTop: "-150%" }}>
              <img className='bannerImg scooter' src={ectricscooter} style={{ position: 'relative', height: '20%', MARGINLEFT: "10%" }} />
              <img src="https://lh3.googleusercontent.com/proxy/hxxyEtx6Bbv4H_jVMO1S7bsu4IW0KOk4IXc7PuocKxameQXFY4Zbnrmh2aphFBxD0cBACg0l_lugoMrgbxBivNHVsbaXkzn1pLz7I_yxAS-mfPkt9gvVsGriA0cgkb0dWEzUzA" />
            </div>
          }
        })()}
        <StyleMap scrollY={scrollPosition.scrollY} content={<h1>Hello</h1>} />
          <Test scrollY={scrollPosition.scrollY} content={<h1></h1>} />
      </div>
      {console.log(scrollPosition)}
    </>
  )
}
export default Map