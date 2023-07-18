import React from "react";
import { FaWhatsapp } from 'react-icons/fa';
import { FaHome } from 'react-icons/fa';
import { SocialIcon } from "react-social-icons";
import { FiPhoneCall } from 'react-icons/fi';
import { AiOutlineMail } from 'react-icons/ai';

import "../Components/other.css";
function Footer()
{
    return( 
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
       <div className="cont">
        <h3 className="head">Contact</h3>
        <div className="no">
          <ul>
           <li className="co"><FaHome className="f" style={{color:'yellow',fontSize:'20px'}}/><a className="sep" href="https://www.google.com/search?q=Downtown+Dubai%2C+Dubai%2C+United+Arab+Emirates%2C31166&oq=Downtown+Dubai%2C+Dubai%2C+United+Arab+Emirates%2C31166&gs_lcrp=EgZjaHJvbWUyBggAEEUYOTIHCAEQIRigATIHCAIQIRigATIHCAMQIRigATIHCAQQIRigAdIBBzY5N2owajeoAgCwAgA&sourceid=chrome&ie=UTF-8">Downtown Dubai, Dubai, United Arab Emirates,31166</a></li>
            <li className="co"><AiOutlineMail className="f" style={{color:'orange',fontSize:'20px'}}/><a className="sep" href="https://www.cloudflare.com/learning/email-security/what-is-email/">NewsRounder@gmail.com</a></li>
            <li className="co"><FiPhoneCall className="f" style={{color:'grey',fontSize:'20px'}}/><a className="sep" href="https://www.linkedin.com/in/dharanidharan-senthilkumar-b4244b232/?originalSubdomain=in">+91 6385 854 466</a></li>
            <li className="co"><FaWhatsapp className="f" style={{color:'green',fontSize:'20px'}}/><a className="sep" href="https://en.wikipedia.org/wiki/Prime_Minister_of_India#:~:text=Modi%20is%20the%2014th%20and,serving%20since%2026%20May%202014.">93603 59101</a></li>
          </ul>
        </div>
        </div>
       </div>
      <div id='last'>Copyright © 2023 www.news traffic.com</div>
      </div>
    )
}
export default Footer;