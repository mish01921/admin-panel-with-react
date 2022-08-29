<<<<<<< HEAD
// <<<<<<< HEAD
import Lilit from './Lilit_Component/Lilit';

import Vach from './VachComponents/Vach'

import React  from 'react';
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
      <Lilit />
      <Vach />
      <AdminM />

    </div>
  )
}
    
export default App;