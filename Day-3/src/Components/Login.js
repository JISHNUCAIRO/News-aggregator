import React, { useState } from "react";
import {FcGoogle} from "react-icons/fc";
import { SocialIcon } from "react-social-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from 'react-router-dom';

// import { LoginButton, Value } from '@solid/react';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { Link } from "react-router-dom";
const Log = () => {
  const Navigate=useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState("");
  const [error ,setError] =useState('');
  const [error1 ,setError1] =useState('');
  function isValidEmail(email) {
    return /^[^\s@]+@gmail.com|gmail.in|ac.in+$/.test(email);
  }

  const handleEmailChange = (e) => {
    if (!isValidEmail(e.target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }

    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    if(password.length<=8)
    {
      setError1('Invalid password');
    }
    else
    {
      setError1(null);
    }
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    var flag=true;
    if(email.length===0 && password.length===0)
    {
    setError('Please enter a valid username');
    setError1('Please enter a valid password');
    flag=false;
  }
  if(email.length===0)
  {
    setError('Please enter a valid email');
    flag=false;
  }
  if(password.length===0)
  {
    setError1('Please enter a valid password');
    flag=false;
    }
    if(flag===true)
    {
      Navigate("/h");
    }
    e.preventDefault();  
  };
   
    return(
        <div className="pow">
            <center>
           <div className="login">
             <h3>Login with email</h3>
           <form onSubmit={handleSubmit}>
           <EmailIcon />
               <input type="email" placeholder=" Email" onChange={handleEmailChange}></input>
               <div className="er">{error}</div><br></br><br></br>
            < LockIcon className="lock"></LockIcon>
                <input type="password" placeholder=" Password" onChange={handlePasswordChange}></input>
                <div className="er">{error1}</div>
                <input type="submit" ></input><br></br>
        
                
                <h5>Not yet sign in?<a id="sign" href="/signup" >Please sign In</a></h5>
              </form>
           </div> 
           </center>
       </div>
    );
}

export default Log;