import React from 'react';

import { Routes, Route, Router } from "react-router-dom"
import EELU_Dev from '../src/components/Home/EELU_Dev'
import BoxShadow from "../src/components/Home/BoxShadow"
// import { BrowserRouter as Router, Route, Routes  } from 'react-router-dom';




function App() {
  return (
    <>
    <Routes>
    <Route path="/" element={ <BoxShadow/> } />
    <Route path="/home" element={ <EELU_Dev/> } />


  </Routes>
   {/* <Router>
   <Routes>
    <Route exact path={'/'} component={'EELU_Adv'}/>
   </Routes>
   </Router> */}
   {/* <EELU_Dev/> */}
   </>
  );
}

export default App;
