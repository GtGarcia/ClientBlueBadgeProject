import React, { useState } from 'react';
import Login from './Login/Login';
import Register from './Register/Register';

const Auth = (props) => {
    const [isLoginVisible, setIsLoginVisible] = useState(true);

    function handleToggle() {
        setIsLoginVisible(!isLoginVisible)
    }



    return ( 
        <div>
            {
                isLoginVisible
                ?<Login updateLocalStorage={props.updateLocalStorage}/>
                :<Register updateLocalStorage={props.updateLocalStorage}/>
            }
            <br />
            <button onClick= {handleToggle}>Login/SignUp</button>
        </div>
     );
}
 
export default Auth;