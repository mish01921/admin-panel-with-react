import React,{useState} from "react";
import './Login.css';
import { useNavigate } from "react-router-dom";

function Login () {
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');
  
    const emailPass = {
      email: 'adminpanel@gmail.com',
      pass: 'adminpanel'
    }
  
  
    const navigate = useNavigate();
    const navigateToMenu = (e) => {
      e.preventDefault();
  
      if (emailPass.email === emailValue && emailPass.pass === passwordValue) {
        navigate('./Menu');
      } else {
        alert('You are not valid!')
      }
    };
    const emailChange = e => {
      setEmailValue(e.target.value)
    }
    const PasswordChange = e => {
      setPasswordValue(e.target.value)
    }
  
 
    return(
        <div className="wrapper">
        <div className="search">
                <p>Username:</p>
                <input type="text" className="input"
                placeholder=""
                onChange={emailChange}
                value={emailValue} />
                <p>Password:</p>
                <input type ="password" className="input"
                placeholder=""
                onChange={PasswordChange}
                value={passwordValue} />
                <input className="submit" type="submit" onClick={navigateToMenu} placeholder="Submit"></input>
        </div>
    </div>
    )

    }
export default Login;