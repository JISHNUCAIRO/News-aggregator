import React from "react";
import { Button } from 'antd';
import { AiOutlineDollarCircle } from 'react-icons/ai';
import { FaBookmark } from 'react-icons/fa';
import "../Components/compo.css";
import { AiFillFire } from 'react-icons/ai';

function Side()
{
    return(
        <div className="sidebar">
        <h2>Panel</h2>
        <ul>
    
       <div className='sideho'><Button id='trend'  type="secondary" style={{ color: 'red' }} icon={<AiFillFire />}></Button><a>Trending</a><br/><br/></div>
       <div className='sideho'><FaBookmark id='save' size={17} className='side' color="black" /><a>Saved</a><br/><br/></div>
          <div className='fle'><div ><AiOutlineDollarCircle  size={30}/></div>
          <div id='sub' className='flo'><a>Subscription</a><br/><br/></div></div> 
        </ul>
      </div>
    )
}
export default Side;