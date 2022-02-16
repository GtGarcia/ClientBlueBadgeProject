import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import { APIURL, EndPoints } from '../endpoints';

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

    // console.log(`line 17 ${props.token}`)
    const handleSubmit = (e) => {
        e.preventDefault();
        const newCar = {
            car: { 
                price: price,
                condition: condition,
                transmissionType: transmissionType,
                color: color,
                type: type,
                numberOfDoors: numberOfDoors,
                miles: miles,
                vehicleLocation: vehicleLocation
            }
        }
        console.log(newCar);
        // console.log(`line 33 ${props.token}`)
    
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
            <h2>Create a New Listing</h2>
            <Form>
                <FormGroup>
                    <Label htmlFor="Price">Price:</Label>
                    <Input onChange={(e) => setPrice(e.target.value)} type="text" id="Price" name="Price"/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="Condition">Condition:</Label>
                    <Input onChange={(e) => setCondition(e.target.value)} type="text" id="condition" name="condition" />
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="transmissionType">Transmission Type:</Label>
                    <Input onChange={(e) => setTransmissionType(e.target.value)} type="text" id="transmissionType" name="transmissionType"/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="color">Color:</Label>
                    <Input onChange={(e) => setColor(e.target.value)} type="text" id="color" name="color"/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="type">Type:</Label>
                    <Input onChange={(e) => setType(e.target.value)} type="text" id="type" name="type"/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="numberOfDoors">Number of doors:</Label>
                    <Input onChange={(e) => setNumberOfDoors(e.target.value)} type="text" id="numberOfDoors" name="numberOfDoors"/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="miles">Miles:</Label>
                    <Input onChange={(e) => setMiles(e.target.value)} type="text" id="miles" name="miles"/>
                </FormGroup>
                <br />
                <FormGroup>
                    <Label htmlFor="vehicleLocation">Vehicle location:</Label>
                    <Input onChange={(e) => setVehicleLocation(e.target.value)} type="text" id="vehicleLocation" name="vehicleLocation"/>
                </FormGroup>
                <br />
                <Button type="submit" onClick={handleSubmit} id="submit"></Button>
            </Form>

            <p>{display}</p>

        </div>
    );
}
 
export default CreateListing;