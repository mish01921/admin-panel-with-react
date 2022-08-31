import React from 'react';
import "./Misho.css"
import CreateM from './createM';
import ReadM from './readM';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import UpdateM from './updateM';




export default function AdminM() {

  return (
    
    <Router>

      <div>
      <div>ok</div>
      </div>
      <div className="main">
        <h2 className="main-header">React Crud Operations</h2>
        <div>
          <Routes>
             <Route path='/createM' element={<CreateM />} />
          </Routes>
        </div>

        <div style={{ marginTop: 20 }}>
           <Routes>
             <Route path='/readM' element={<ReadM />} />
          </Routes>
        </div>

        <div>
          <Routes>
             <Route path='/updateM' element={<UpdateM />} />
          </Routes>
        </div>
        
      </div>
    </Router>
  );
}

