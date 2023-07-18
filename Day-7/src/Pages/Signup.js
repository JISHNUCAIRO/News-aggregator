import React, { useState }from "react";
import { Link } from "react-router-dom";
import PersonIcon from '@mui/icons-material/Person';
import { useNavigate } from 'react-router-dom';
import ChildCareIcon from '@mui/icons-material/ChildCare';
import LockIcon from '@mui/icons-material/Lock';
import EmailIcon from '@mui/icons-material/Email';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EventIcon from '@mui/icons-material/Event';
import { faUser } from '@fortawesome/free-solid-svg-icons';
const Signup = () => {

   const Navigate=useNavigate();
   const [email, setEmail] = useState('');
   const [password, setPassword] = useState('');
   const [repassword,setrePassword] = useState('');
   const [error ,setError] =useState('');
   const [error1 ,setError1] = useState('');
   const [error2 ,setError2] = useState('');
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
     setPassword(e.target.value);
     if(password.length<8)
     {
       setError1('Invalid password');
     }
     else
     {
       setError1(null);
     }
   };
 
   const handlerePasswordChange = (e) => {
     setrePassword(e.target.value);
     if(repassword.length<8)
     {
       setError2('Invalid password');
     }
     else
     {
       setError2(null);
     }
   };
 
   const handleSubmit = (e) => {
     var flag=true;
     if(email.length==0 && password.length==0 && repassword.length==0)
     {
     setError('Please enter a valid username');
     setError1('Please enter a valid password');
     setError2('Please enter a valid password');
     flag=false;
     }
     if(email.length==0)
     {
     setError('Please enter a valid email');
     flag=false;
     }
     if(password.length==0)
     {
     setError1('Please enter a valid password');
     flag=false;
     }
     if(repassword.length==0)
     {
     setError2('Please enter a valid password');
     flag=false;
     }
     if(password!=repassword)
     {
     setError2('Confirm password does not match');
     flag=false;
     }
     e.preventDefault();  
     if(flag==true)
     {
       Navigate("/");
     }
 
   };
 
   
    return(
      <div className="signupp">
   <div className="signup">
    <h3 id="h3">Signup</h3>
 <form onSubmit={handleSubmit}>
    <center>   
    {/* <PersonIcon />
      <input type="name" placeholder="  name"></input><br></br><br></br>
      <EventIcon />
      <input type="age" placeholder="  age"></input><br></br><br></br>
      <ChildCareIcon />
      <input type="gender" placeholder="  gender"></input><br></br><br></br> */}
      <EmailIcon />
      <input type="email" placeholder="  Email" onChange={handleEmailChange}></input>
      <div className="er">{error}</div><br></br><br></br>
      < LockIcon className="lock"></LockIcon>
      <input type="password" placeholder="  password" onChange={handlePasswordChange}></input>
      <div className="er">{error1}</div><br></br><br></br>
      < LockIcon className="lock"></LockIcon>
               <input type="password" placeholder="  Confirm Password" onChange={handlerePasswordChange} ></input>
               <div className="er">{error2}</div><br></br><br></br>
      <input type="submit" href="/"></input>
      <h4>Already have a account?<Link to="/">Login</Link></h4>
      </center>
      </form>
      </div>
   </div>
    )
}
export default Signup;