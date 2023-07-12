import React, { Component } from 'react';
import { Button } from 'antd';
import {FcGoogle} from "react-icons/fc";
import { SocialIcon } from "react-social-icons";
import { FaRegNewspaper } from 'react-icons/fa';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import "../Components/compo.css";
import { FaBookmark } from 'react-icons/fa';
import { AiFillFire } from 'react-icons/ai';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';


function Hom()
{
    return(
     <div className="hom">
        <nav className="navbar">
      <ul>
        <li>
          <div className="nav">
         <Link to={"/"}> <LogoutIcon></LogoutIcon></Link>
          </div>
        </li>
        <li>
          <div className="nav">
           <Link to="/profile"> <FontAwesomeIcon icon={faUser} className="profile-icon" /></Link>
          </div>
        </li>
        <li>
          <div className="nav">
          <Link to="/about">About</Link>
          </div>
        </li>
        <li>
          <div className="nav">
          <Link to="/market">Marketing</Link>
          </div>
        </li>
        <li>
          <div className="nav">
          <Link to="/sports">Sports</Link>
          </div>
        </li>
        <li>
          <div className="nav">
          <Link to="/enter">Entertainment</Link>
          </div>
        </li>
        <li>
          <div className="nav">
          <Link to="/techno">Technology</Link>
          </div>
        </li>
        <li>
          <div className="nav">
          <Link to="/poli">Politics</Link>
          </div>
        </li>
      </ul>
    </nav>
    <div className='tot'>
    <div className="sidebar">
      <h2>Panel</h2>
      <ul>
  
     <div className='sideho'><Button id='trend'  type="secondary" style={{ color: 'red' }} icon={<AiFillFire />}></Button><a>Trending</a><br/><br/></div>
     <div className='sideho'><FaBookmark id='save' size={17} className='side' color="black" /><a>Saved</a><br/><br/></div>
        <div className='fle'><div ><AiOutlineDollarCircle  size={30}/></div>
        <div id='sub' className='flo'><a>Subscription</a><br/><br/></div></div> 
      </ul>
    </div>
    {/* <div className='image'>
    <div>
      <img src={image2} alt="Description of the image" />
     </div>
    <div>
     <img src={image1} alt="Description of the image" />
    </div>
    <div>
      <img src={image3} alt="Description of the image" />
     </div>
    </div>
    </div>
      <div className='foot'>
        <div className='footot'>
        <div className='link'>
       <h3 className='head'>Links</h3>
       <ul id='ju'>
       <li> <a className='linking' href='https://www.bbc.com/news'>BBC</a></li>
       <li> <a className='linking' href='https://www.aljazeera.com/'>Al jazeera</a></li>
       <li> <a className='linking' href='https://www.polimernews.com/'>Polimer news</a></li>
       <li> <a className='linking' href='https://www.timesnownews.com/'>Times now</a></li>
       <li> <a className='linking' href='https://edition.cnn.com/'>CNN</a></li>
       <li> <a className='linking' href='https://news.sky.com/'>Sky</a></li>
       </ul>
       </div>
       <div className='media'>
        <h3 className='head'>Follow us on</h3>
      <div className='some'>
      <div> <SocialIcon className='i' url="https://twitter.com/BBC" style={{fill:"#ffffff",width: "40px", height: "40px"}} fgColor="#ffffff"/></div>
      <div><SocialIcon className='i' url="https://www.instagram.com/bbcnews/?hl=en"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
      <div><SocialIcon className='i' url="https://www.linkedin.com/company/bbc/?originalSubdomain=in"style={{ width: "40px", height: "40px" }}fgColor="#ffffff" /></div>
      <div><SocialIcon className='i' url="https://www.facebook.com/bbc/"style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
      <div> <SocialIcon className='i' url="https://www.youtube.com/c/bbcnews" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
      <div> <SocialIcon className='i' url="https://www.reddit.com/r/bbc/" style={{ width: "40px", height: "40px" }} fgColor="#ffffff"/></div>
      
       </div>
       </div>
       </div>
      <div id='last'>Copyright © 2023 www.news traffic.com</div>
      </div> */}
    </div>
     
    )
}
export default Hom;