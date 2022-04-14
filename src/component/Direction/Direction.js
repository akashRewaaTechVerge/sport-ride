import React, { useState, useEffect } from 'react'
import ectricscooter from '../images/scootermapimg.png'
import cycle from '../images/cycle.png'
import imgback from '../images/imageback.png'

function Direction() {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  const [position, setPosition] = useState(10)

  function moveCircle() {  
    const speed = 60
    const scrolltop = window.pageYOffset
    const scrollAndSpeed = scrolltop / speed
    console.log(scrollAndSpeed.toString())
    setPosition(scrollAndSpeed.toString())
  }
    useEffect(() => {
      window.addEventListener(
        'scroll',
        function () {
          requestAnimationFrame(moveCircle)
        },
        false
      )
    }, [])
 
  return (
        <>
        <span className="w3-text w3-tag"> <img src={imgback}  /></span> 
        </>
      // <div className="circle styles"
      //     style={{position: 'absolute', left: `${position}rem` , marginTop:"-15%"}}>
      //     <img className='bannerImg scooter' src={cycle} style={{position:'relative'}} />
      // </div>
 
  )
}

export default Direction
