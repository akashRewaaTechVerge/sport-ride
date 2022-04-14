 import React from 'react'
 
 function DilogBox() {
   return (
     <div>
        <div id="modal">
            <div className="modal-content">
                <div className="header">
                    <h2>Notification</h2>
                </div>
                <div className="copy">
                    <p>There is new Announcment to read!</p>
                </div>
                <div className="cf footer">
                    <a href="#modal" className="btn">Close</a>
                </div>
            </div>
            <div className="overlay"></div>
        </div>
     </div>
   )
 }
 
 export default DilogBox
 
 
 
 
