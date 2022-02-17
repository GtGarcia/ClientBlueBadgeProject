import React, {useState} from "react";
import {Form, FormGroup, Label, Input, Button} from "reactstrap";
import { APIURL, EndPoints } from '../endpoints';
import "../deleteListing/delete.css";


const DeleteListing = (props) => {
    const [display, setDisplay] = useState();
    const [id, setId] = useState();

    function handleSubmit (e) {
        e.preventDefault();

        fetch(APIURL + EndPoints.car.delete + id, {
            method: 'DELETE',
            headers: new Headers({
                'Content-Type': 'application/json',
                Authorization: `Bearer ${props.token}`
            })
        }).then (
            (response) => {
                return response.json()
            }
        ) .then((data) => {
            console.log(data)
            setDisplay('Listing successfully deleted.')
        }) .catch((err) => console.log(err))
    }

    return (
        <div>
            <h6 id= 'updatePad' className='border'>Delete Listing</h6>
            <Form>
                <FormGroup className='border'>
                        <Label htmlFor="id">Id # of listing you want to change:</Label>
                        <Input onChange={(e) => setId(e.target.value)} type="text" id="id" name="id"/>
                    </FormGroup>
                    <Button type="submit" onClick={handleSubmit} id="submit" className= 'button'> Delete</Button>
            </Form>
            <p>{display}</p>
        </div>
    )
}

export default DeleteListing;