
import React, { Link} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button,FormText} from "reactstrap";
import { APIURL,EndPoints } from "../endpoints";
import { useEffect,useState } from "react";
import CarIndex from "../CarIndex";
import CarTable from "../CarTable/CarTable";
import Auth from "../Auth";

const AllListings = (props) => {
const [car, setCar] = useState([]);

function fetchFunction(e){
    e.preventDefault()
    console.log(APIURL + EndPoints.car.seeAll)
    
    fetch(APIURL + EndPoints.car.seeAll, {
    method: 'GET',
    headers: new Headers({
        'Content-Type': 'application/json',
        Authorization:`Bearer ${props.token}`
       
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
        
            <CarIndex/>
            <button type="button" onClick={fetchFunction}>xhoiwdn</button>
            
            <Link to ='/'>Go Back Home</Link>
        
    </div> );

}
 
export default AllListings;