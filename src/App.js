import React from "react";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header"; 
import { BrowserRouter, Route, Routes } from 'react-router-dom';


function App() {
  return (
    <div className="body"> 
     
      <Routes>
        <Route  path="/" element={<Header/>} />
        <Route  path="/Content" element={<Content/>} />
        <Route  path="/Footer" element={<Footer/>} />
	    </Routes>
    </div>
  );
}

export default App;