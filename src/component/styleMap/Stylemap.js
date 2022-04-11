import React, { useState } from "react";
import "./Stylemap.css";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import 'animate.css'

function Stylemap({ scrollY, content }) {
  const [isOpen, setIsOpen, showModal, setShowModal] = useState(false);
  const [indexOfImages, setIndexOfImages] = useState(0);

  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  
  const togglePopup = () => {
    setIsOpen(!isOpen);
  }
  
  return (
    <>
      {(() => {
        if (scrollY === 700) {
          return (
              <div className="popup-box animate__animated animate__zoomIn">
                <div className="box">
                  <h1 style={{textAlign:"center"}}>Map Model</h1>  
                  {/* <span className="close-icon" variant="secondary" onClick={handleClose} >X</span> */}
                  {content}
                </div>
              </div>
          )
        } 
        else{
          return (
            <div className="popup-box animate__animated animate__zoomOut ">
              <div className="box zoom">
                <span className="close-icon" onClick={scrollY.handleClose}>x</span>
                {content}
              </div>
            </div>
          ) 
        }
      })()}
    </>
  )
}

export default Stylemap
