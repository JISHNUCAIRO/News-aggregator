import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Pro()
{
    const user = {
        name: 'Someone',
        email: 'someone@example.com',
        bio: 'Someone is an accomplished entrepreneur, speaker, and author, known for his expertise in the field of digital marketing and business strategy. With over 15 years of experience in the industry, helping clients achieve remarkable results in their online presence and revenue generation.',
      };
    return(
        <div className="profile">
            <div id="profi">
           <FontAwesomeIcon id="profil" icon={faUser} />
           </div>
      <h2>{user.name}</h2>
      <p>{user.email}</p>
      <p>{user.bio}</p>
        </div>
    )
}
export default Pro;