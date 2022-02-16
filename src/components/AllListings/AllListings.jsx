
import React, { Link} from "react-router-dom";
import {Form, FormGroup, Label, Input, Button,FormText} from "reactstrap";
import { APIURL,EndPoints } from "../endpoints";
import { useEffect,useState } from "react";
import CarIndex from "../CarIndex";
// import CarTable from "../CarTable/CarTable";
import Auth from "../Auth";
import CarRow from "../CarTable/CarRow/CarRow";


const AllListings = (props) => {
    
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars();
    }, []);
    async function fetchCars(){
        // console.log(props.token)
        const reqObj = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`,
            })
        }

        try {
            const response = await fetch(APIURL + EndPoints.car.get, reqObj)

            const data = await response.json()
            console.log(data)
            setCars(data.listing)
        } catch(error){
            console.error(error)
        }
    }
    
    
    return ( <div>
        
            {/* {cars.map((car=> car.price))} */}


              {cars.map((car) =>(<CarRow carss = {car}/>))} 
            
            

        
    </div> );

}
export default AllListings;












// useEffect(() => {
//     displayAllSales(props);
// }, []);

// const [displayPrice, setDisplayPrice] = useState('');
// const [displayCondition, setDisplayCondition] = useState('');
// const [displayTransmissionType, setDisplayTransmissionType] = useState('');
// const [displayColor, setDisplayColor] = useState('');
// const [displayType, setDisplayType] = useState('');
// const [displayNumberOfDoors, setDisplayNumberOfDoors] = useState('');
// const [displayMiles, setDisplayMiles] = useState('');
// const [displayVehLoc, setDisplayVehLoc] = useState('');

// function displayAllSales(props) {
    
//     fetch (APIURL + EndPoints.car.seeAll, {
//         method: 'GET',
//         headers: new Headers({
//             'Content-Type': 'application/json',
//             Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6OSwiaWF0IjoxNjQ0OTU5NTgyLCJleHAiOjE2NDUwNDU5ODJ9.n4FfHwSacW1TsIi-DKkz-9271_H7_9trDe9MUqCWmWo`
//         })
//     }).then (
//         (response) => response.json()
//         ).then((data) => {
//             {console.log(data)};
//             console.log(data.listing);
//             for (let i = 0; i < data.listing.length; i++){
             
//         setDisplayPrice(data.listing[i].price)
//         setDisplayCondition(data.listing[i].condition)
        

//             }
//         (e) => setTransmissionType(e.target.value)
//     }) .catch ((err) => console.log(err))
// }
