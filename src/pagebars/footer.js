import React from "react";
import { SocialIcon } from "react-social-icons";

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
       </div>
      <div id='last'>Copyright © 2023 www.news traffic.com</div>
      </div>
    )
}
export default Footer;