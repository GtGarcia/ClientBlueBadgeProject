import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button
} from "reactstrap";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import { APIURL, EndPoints } from '../endpoints';
const Login = (props) => {
    
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        console.log(APIURL+EndPoints.user.login)
        const reqObj = {
            email: email,
            password: password
        }

        fetch(APIURL + EndPoints.user.login,{
            method: "POST",
            body: JSON.stringify(reqObj),
            headers: new Headers({
                'Content-Type': 'application/json',
            })
        }) .then(res => res.json())
        .then((data)=> props.updateLocalStorage(data.sessionToken))
        .catch((err)=> console.log(err))
    }

    return ( 
        
<div>
            <Form onSubmit = {handleSubmit}>
                <FormGroup>
                    <Label for = 'Email'>
                        Email
                    </Label>
                    <Input 
                        id = 'Email'
                        name = 'email'
                        placeholder = 'Enter Email Here'
                        type = 'email'
                        value = {email}
                        onChange = {(e) => setEmail(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for = 'Password'>
                            Password
                    </Label>
                    <Input 
                        id = 'Password'
                        name = 'password'
                        placeholder = 'Enter Password Here'
                        type = 'password'
                        value = {password}
                        onChange = {(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <Button type = 'submit' >
                    Login
                </Button>
            </Form>
                {/* <Routes>
                    <Route path = '/' element ={<Home/>}/>
                </Routes> */}
                <nav>
                    <Link to ='/'>Go Back Home</Link>
                    </nav>
</div>        
     );
}
 
export default Login;


