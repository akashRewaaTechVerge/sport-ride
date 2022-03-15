import React from "react";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./component/About/About";
import { Main } from "./component";



function App() {
  return (
    <div className="body">
      <Header />
 
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route path="/About" element={<About />} /> 
      </Routes>
      <Footer />
    </div>
  );
}

export default App;