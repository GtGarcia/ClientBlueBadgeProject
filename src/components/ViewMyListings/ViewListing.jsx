import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import {Form,FormGroup,Label,Input,Button
} from "reactstrap";
import { useState } from 'react';
import { APIURL, EndPoints } from '../endpoints';
import 'bootstrap/dist/css/bootstrap.min.css';


const ViewMyListings = (props) => {

        function fetchFunction(e){
            e.preventDefault()
            console.log(APIURL + EndPoints.car.seeMy)
             
            fetch(APIURL + EndPoints.car.seeMy,{
                method: 'GET',
                headers: new Headers({
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${props.token}`
                })
            }).then(
                (response) => {
                    return response.json()
                }
            ).then((data) => {
                console.log(data)
            }).catch((err) => console.log(err))
        }

    return (
    <div>
        <p>Hello from view my listings!</p>
        <button type='button' onClick = {fetchFunction}>Click me</button>

        <Link to ='/'>Go Back Home</Link>
    </div> );
}
 
export default ViewMyListings;




