import React from 'react'
 import CreateM from './CreateM';
import ReadM from './ReadM';
// import UpdateM from './UpdateM';
import "./Misho.css"

function Admi() {
  return (
    <React.Fragment>
         
         <ReadM />
        {/*<UpdateM />  */}
        <div className='main'>
        <CreateM />
        <h2 className="main-header">React Crud Operations</h2>
        </div>
        
    </React.Fragment>
  )
}

export default Admi;