import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";
function Nav(props)
{
    return(
        <div className="hom">
        <nav className="navbar">
            <w className='o'>Welcome:  {props.username}</w>
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
        <li>
          <div className="na">
           <Link to="/h">Home</Link>
          </div>
        </li>
      </ul>
    </nav>
          </div>
    )
}
const mapstateToProps = (state) =>
{
  {
    return {
      username: state.username
    }
  }
}
export default connect(mapstateToProps)(Nav);