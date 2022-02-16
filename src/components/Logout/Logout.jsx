import React from 'react';
import './logout.css'
import LoggingOut from '../../assets/LoggingOut.png'

const Logout = (props) => {
    return ( 
        <div>
            <img id= 'logout' className='logout' src={LoggingOut} alt="Logout" onClick= {props.clearLocalStorage} />

        </div>
     );
}
 
export default Logout;