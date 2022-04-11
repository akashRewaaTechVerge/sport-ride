import React,{ useState }    from 'react'
import './Test.css'
import 'animate.css'



function Test({scrollY,content}) {

    const [isOpen, setIsOpen] = useState(false);
    const togglePopup = () => {
      setIsOpen(!isOpen);
    }

    const overlay = () => {
        console.log(document.body.style.overflow);
        if (document.body.style.overflow !== "hidden") {
          document.body.style.overflow = "hidden";
        } else {
          document.body.style.overflow = "scroll";
        }
      };
  return (
    <>
        {(() => {
            // if ( scrollY === 1000){
            //     return (
            //     <div id="overlay" className="popup-box1 animate__animated animate__zoomIn overlay hidden">
           
            //     <div className="box1">
            //         <span className="close-icons" onClick={scrollY.handleClose}>x</span>
            //         {content}
            //     </div>
            //     </div>
            //     )
            // }
            // else{
            // return "Not Found";
            // }
        })()}
    </>
  )
}

export default Test
