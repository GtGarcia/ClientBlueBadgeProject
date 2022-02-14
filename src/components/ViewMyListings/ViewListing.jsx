import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import {Form,FormGroup,Label,Input,Button
} from "reactstrap";
import { useState } from 'react';
import { APIURL, EndPoints } from '../endpoints';
import 'bootstrap/dist/css/bootstrap.min.css';


const ViewMyListings = (props) => {
    return ( 
    <div>
        <p>Hello from view my listings!</p>



        <Link to ='/'>Go Back Home</Link>
    </div> );
}
 
export default ViewMyListings;




