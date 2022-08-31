import React from "react";
import { useNavigate } from "react-router-dom";
import "./Menu.css";

const Menu = (props) => {
const navigate = useNavigate();
 
  return (
    <div className='container'>
      <div>
          <h1 className="title">Crud table in React</h1>
      </div>
        <div className='container-content'>
          <button className="onclick" onClick={() => navigate("/Vach")}>Vach</button>
          <button className="onclick" onClick={() => navigate("/AdminM")}>Misho</button>
          <button className="onclick" onClick={() => navigate("/Kristina")}>Kristina</button>
          <button className="onclick" onClick={() => navigate("/Elen")}>Elen</button>
          <button className="onclick" onClick={() => navigate("/Lilit")}>Lilit</button>
      </div>
    </div>
  )
  };
 export default Menu;