import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import { APIURL, EndPoints } from '../endpoints';

import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
    FormText
} from "reactstrap";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

const Register = (props) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [middleName, setMiddleName] = useState("");
    const [userName, setUserName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [pfpURL, setPfpURL] = useState("");
    const [phoneNumber, setPhoneNumber] = useState("");

    function handleSubmit(e) {
        e.preventDefault()
        console.log(APIURL+EndPoints.user.register)
        const reqObj = {
            firstName:firstName,
            lastName:lastName,
            middleName:middleName,
            userName:userName,
            email:email,
            password:password,
            pfpURL:pfpURL,
            phoneNumber:phoneNumber
        }

        fetch(APIURL + EndPoints.user.register,{
            method:"POST",
            body: JSON.stringify(reqObj),
            headers: new Headers ({
                "Content-Type": "application/json",
            })
        }).then(res=> res.json())
        .then((data)=> props.updateLocalStorage(data.token))
        .catch((err)=> console.error(err))
    }




    return ( 
        <div>
            <Form>
                <FormGroup>
                    <Label for ='FirstName'>
                        First Name
                    </Label>
                    <Input 
                        id = 'FirstName'
                        name = 'firstname'
                        placeholder = 'First Name'
                        type = 'text'
                        value = {firstName}
                        onChange= {(e) => setFirstName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for = 'LastName'>
                        Last Name
                    </Label>
                    <Input 
                    id = 'LastName'
                    name = 'lastname'
                    placeholder = ' Last Name'
                    type = 'text'
                    value = {lastName}
                    onChange = {(e) => setLastName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for = 'MiddleName'>
                        Middle Name
                    </Label>
                    <Input 
                    name= 'middlename'
                    placeholder = 'Middle Name (Leave Blank if This Doesnt Apply)'
                    type = 'text'
                    value = {middleName}
                    onChange = {(e) => setMiddleName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for = 'UserName'>
                        User Name
                    </Label>
                    <Input 
                    name = 'username'
                    placeholder = 'User Name'
                    type = 'text'
                    value = {userName}
                    onChange = {(e) => setUserName(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for = 'Email'>
                        Email
                    </Label>
                    <Input 
                    name = 'email'
                    placeholder = 'Email'
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
                    name = 'password'
                    placeholder = 'Password'
                    type = 'password'
                    value = {password}
                    onChange = {(e) => setPassword(e.target.value)}
                    />
                </FormGroup>
                <FormGroup>
                    <Label for = 'ProfilePicture'>
                        Profile Picture
                    </Label>
                    <Input 
                    name = 'profilePicture'
                    type = 'file'
                    value = {pfpURL}
                    onChange = {(e) => setPfpURL(e.target.value)}
                
                    />
                    <FormText>
                        *Make sure its a visible picture to the eyes please
                    </FormText>
                </FormGroup>
                <FormGroup>
                    <Label for= 'phoneNumber'>
                        Phone Number
                    </Label>
                    <Input 
                    name = 'phonenumber'
                    type = 'text'
                    placeholder = "Add ( ) and - When Putting in the Number "
                    value = {phoneNumber}
                    onChange = {(e) => setPhoneNumber(e.target.value)}
                    />
                </FormGroup>

                    <Button type = 'submit' onClick = {handleSubmit}>SignUp</Button>

            </Form>
        <nav>
            <Link to ='/'>Go Back Home</Link>
            </nav>
        </div>

        //TODO MiddleName, UserName, email, password , pfpurl, phonenumber
     );
}
 
export default Register;