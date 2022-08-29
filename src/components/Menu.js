import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {
const navigate = useNavigate();
 
  return (
    <div className='container'>
      <div>
          <h1>Crud table in React</h1>
      </div>
        <div className='container-content'>
          <button onClick={() => navigate("/Vach")}>Vach</button>
          <button onClick={() => navigate("/AdminM")}>Misho</button>
          <button onClick={() => navigate("/Kristina")}>Kristina</button>
          <button onClick={() => navigate("/Elen")}>Elen</button>
          <button onClick={() => navigate("/Lilit")}>Lilit</button>
      </div>
    </div>
  )
  };
 export default Menu;