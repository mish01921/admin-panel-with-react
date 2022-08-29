<<<<<<< HEAD
<<<<<<< HEAD
// <<<<<<< HEAD
import Lilit from './Lilit_Component/Lilit';
=======
>>>>>>> 0dd18b72cf5f3758925ce3bbd58e15c9c8f15a16

import Kristina from "./KristinaComponents/Kristina";

import Lilit from './Lilit_Component/Lilit';
import Vach from './VachComponents/Vach'

import React, {useState}  from 'react';

import './App.css';
// import Elen from './ElenComponents./Elen';
import Elen from './ElenComponents/Elen';
//misho components
import AdminM from './ComponentM/adminM';



function App() {
 
  return (
=======
import React from "react";
import AdminM from "./ComponentM/adminM";

<<<<<<< HEAD
function App() {
  return (
<div>
  <AdminM />
  </div>
  
  );
}
>>>>>>> misho

    // <div>
  
    <div className='App'>
       <Elen />
=======
    <div className='App'>
      <Kristina />
>>>>>>> 0dd18b72cf5f3758925ce3bbd58e15c9c8f15a16
      <Lilit />
      <Vach />
      <Elen />
      <AdminM />
    </div>
<<<<<<< HEAD
  )
}
    
=======
  );
} 
>>>>>>> 0dd18b72cf5f3758925ce3bbd58e15c9c8f15a16
export default App;