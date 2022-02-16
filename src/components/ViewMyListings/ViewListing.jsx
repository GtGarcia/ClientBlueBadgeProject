import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import {Form,FormGroup,Label,Input,Button
} from "reactstrap";
import { useState,useEffect } from 'react';
import { APIURL, EndPoints } from '../endpoints';
import 'bootstrap/dist/css/bootstrap.min.css';
import CarRow from '../CarTable/CarRow/CarRow';


const ViewMyListings = (props) => {

       const [mycars, setMycars] = useState([]);
       useEffect(() => {
           fetchMyCars();
       }, []);

       async function fetchMyCars(){
           const reqObj = {
               method: 'GET',
               headers: new Headers({
                   'Content-Type': 'application/json',
                   'Authorization': `Bearer ${props.token}`
               })
           }
           try {
               const response = await fetch (APIURL + EndPoints.car.seeMy, reqObj)

               const data = await response.json()
               console.log(data)
               setMycars(data)
               console.log(setMycars(data))
           } catch(error){
               console.error(error)
           }
       }

    return (
    <div>
        {mycars.map((myCar) => (<CarRow carss = {myCar}/>))}
        
    </div> );
}
 
export default ViewMyListings;




