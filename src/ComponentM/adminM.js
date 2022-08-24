import React from 'react'
import "./Misho.css"
 import CreateM from './createM';
 import ReadM from './readM';
//  import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'



function AdminM() {
  return (
   
    
     <div className="main">
      <h2 className="main-header">React Crud Operations</h2>
      <div>
         <CreateM />
      </div>

      <div style={{ marginTop: 20 }}>
      <ReadM />
      </div>
    </div>


 
  )
}

export default AdminM;