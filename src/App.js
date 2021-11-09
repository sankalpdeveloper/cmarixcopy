import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';
import AgeFinder from "./components/AgeFinder";
import Home from "./components/Home";
import MySwiper from "./components/MySwiper";


function App() {
  return (
   <>
 <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
      <Routes>
        <Route path="/swipe" element={<MySwiper />} />
      </Routes>
      <Routes>
        <Route path="/age" element={<AgeFinder />} />
      </Routes>
    </BrowserRouter>
   </>
  );
}

export default App;
