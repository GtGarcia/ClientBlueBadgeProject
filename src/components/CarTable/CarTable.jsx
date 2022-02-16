import { APIURL, EndPoints } from "../endpoints";
import CarRow from './CarRow/CarRow';
import { useEffect } from "react";
import { useState } from "react";


const CarTable = (props) => {
    const [cars, setCars] = useState([]);
    useEffect(() => {
        fetchCars();
    }, [props.refreshCarTable]);
    async function fetchCars(){

        const reqObj = {
            method: 'GET',
            headers: new Headers({
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${props.token}`,
            })
        }

        try {
            const response = await fetch(APIURL + EndPoints.car.seeAll, reqObj)

            const data = await response.json()
            console.log(data)
            setCars(data)
        } catch(error){
            console.error(error)
        }
    }

return (
<div>
    <table>
        <thead>
            <tr>
                <th>Price</th>
                <th>Condition of Car</th>
                <th>TransmissionType</th>
                <th>Color</th>
                <th>Type</th>
                <th>Number of Doors</th>
                <th>Miles</th>
                <th> Where is this located?</th>
            </tr> 
        </thead>
        <tbody>

            {cars.map((car) =>(
                <CarRow car = {car}/>
            ))}
        </tbody>
    </table>
</div>
);
}

export default CarTable;