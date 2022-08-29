

import React from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Menu from './components/Menu';
import Login from './components/Login';
import Lilit from './Lilit_Component/Lilit';
import Kristina from "./KristinaComponents/Kristina";
import Vach from './VachComponents/Vach'
import Elen from './ElenComponents/Elen';
// import AdminM from './ComponentM/adminM';
import './App.css';




function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />} />
        <Route path='/menu' element={<Menu />} />
        <Route path='/Vach' element={<Vach />} />
        <Route path='/Elen' element={<Elen />} />
        <Route path='/Lilit' element={<Lilit />} />
        <Route path='/Kristina' element={<Kristina />} />
      </Routes>
    </BrowserRouter>
    

  );
}

export default App;
{/* <Route path='/Misho' element={<AdminM />} /> */}