import React from "react";
import Content from "./component/Content/Content";
import Footer from "./component/Footer/Footer";
import Header from "./component/Header/Header";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import About from "./component/About/About";
import Alliance from "./component/Alliance/Alliance";
import Pricing from "./component/Pricing/Pricing";
import Learn from "./component/Learn/Learn";
import { Main } from "./component";
import Map from "./component/Map/Map"
// import Stylemap from "./component/styleMap/Stylemap"

function App() {
  return (
    <div className="body">
      <Header messages/>
      <Routes>
        <Route path="/" element={<Main/>}/>
        <Route  path="/HOME" element={<Content/>}/>
        <Route path="/About" element={<About />} /> 
        <Route path="/Alliance" element={<Alliance/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Learn" element={<Learn/>}/>
        <Route path="/Map" element={<Map/>}/>
      </Routes>
      <Footer />
    </div>
  );
}

export default App;