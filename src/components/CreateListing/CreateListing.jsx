import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import { APIURL, EndPoints } from '../endpoints';
import "../CreateListing/create.css";

const CreateListing = (props) => {
    
    const [price, setPrice] = useState();
    const [condition, setCondition] = useState();
    const [transmissionType, setTransmissionType] = useState();
    const [color, setColor] = useState();
    const [type, setType] = useState();
    const [numberOfDoors, setNumberOfDoors] = useState();
    const [miles, setMiles] = useState();
    const [vehicleLocation, setVehicleLocation] = useState();
    const [display, setDisplay] = useState();

    const handleSubmit = (e) => {

    e.preventDefault();
    const newCar = {
       
            price: price,
            condition: condition,
            transmissionType: transmissionType,
            color: color,
            type: type,
            numberOfDoors: numberOfDoors,
            miles: miles,
            vehicleLocation: vehicleLocation
        
    }
    console.log(newCar);

        console.log("submitted")
        fetch(APIURL + EndPoints.car.create, {
            method: 'POST',
            body: JSON.stringify(newCar),
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
                // Authorization: `Bearer` + props.token
            })
        }).then (
            (response) => {
                return response.json()
            }
        ) .then((data) => {
            console.log(data)
            setDisplay('Listing successfully added')
        }) .catch((err) => console.log(err))
    }

    return ( 
        <div> 
            <h2 id= 'updatePad' className='border'>Create a New Listing</h2>
            <Form>
                <FormGroup className = 'border'>
                    <Label htmlFor="Price">Price:</Label>
                    <Input onChange={(e) => setPrice(e.target.value)} type="text" id="Price" name="Price"/>
                </FormGroup>
                <br />
                <FormGroup className='border'>
                    <Label htmlFor="Condition">Condition:</Label>
                    <Input onChange={(e) => setCondition(e.target.value)} type="text" id="condition" name="condition" />
                </FormGroup>
                <br />
                <FormGroup className='border' >
                    <Label htmlFor="transmissionType">Transmission Type:</Label>
                    <Input onChange={(e) => setTransmissionType(e.target.value)} type="text" id="transmissionType" name="transmissionType"/>
                </FormGroup>
                <br />
                <FormGroup className='border'>
                    <Label htmlFor="color">Color:</Label>
                    <Input onChange={(e) => setColor(e.target.value)} type="text" id="color" name="color"/>
                </FormGroup>
                <br />
                <FormGroup className='border'>
                    <Label htmlFor="type">Type:</Label>
                    <Input onChange={(e) => setType(e.target.value)} type="text" id="type" name="type"/>
                </FormGroup>
                <br />
                <FormGroup className='border'>
                    <Label htmlFor="numberOfDoors">Number of doors:</Label>
                    <Input onChange={(e) => setNumberOfDoors(e.target.value)} type="text" id="numberOfDoors" name="numberOfDoors"/>
                </FormGroup>
                <br />
                <FormGroup className='border'>
                    <Label htmlFor="miles">Miles:</Label>
                    <Input onChange={(e) => setMiles(e.target.value)} type="text" id="miles" name="miles"/>
                </FormGroup>
                <br />
                <FormGroup className='border'>
                    <Label htmlFor="vehicleLocation">Vehicle location:</Label>
                    <Input onChange={(e) => setVehicleLocation(e.target.value)} type="text" id="vehicleLocation" name="vehicleLocation"/>
                </FormGroup>
                <br />
                <Button type="submit" onClick={handleSubmit} id="submit" className= 'button'> Create</Button>
            </Form>

            <p>{display}</p>

        </div>
    );
}
 
export default CreateListing;