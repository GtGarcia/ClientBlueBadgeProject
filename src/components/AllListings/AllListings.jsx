import React, { Link} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button,FormText} from "reactstrap";
import { APIURL,EndPoints } from "../endpoints";
import { useEffect,useState } from "react";

const AllListings = (props) => {
const [car, setCar] = useState([]);

function fetchFunction(e){
    e.preventDefault()
    console.log(APIURL + EndPoints.car.seeAll)
    
    fetch(APIURL + EndPoints.car.seeAll, {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        Authorization:'Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OCwiaWF0IjoxNjQ0ODY1NTY2LCJleHAiOjE2NDQ5NTE5NjZ9.h7KqmymRRIXkSFF2AJ7-Yq9UOg0HBqT9nGq2JIfxJzw'
       
    })
}).then(
    (response) => {
        return response.json()
        
    }
    ).then((data) => {
        console.log(data)
}).catch((err) => console.log(err))
}
    return ( <div>
        
            
            <button type="button" onClick={fetchFunction}>xhoiwdn</button>
            <Link to ='/'>Go Back Home</Link>
        
    </div> );
}
 
export default AllListings;