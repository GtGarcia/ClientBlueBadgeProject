import { Table, thead,  } from "react-bootstrap";
import 'bootstrap/dist/css/bootstrap.min.css';



const CarRow = (props) => {
    return ( 

        <div>
        {/* <tr>
            <td> {props.carss.id }: </td>
            <br />
            <td> | Price: {props.carss.price}  </td>
            <td> | Condition : {props.carss.condition}  </td>
            <td>| Transmission Type: {props.carss.transmissionType}</td>
            <td>| Color : {props.carss.color}</td>
            <td>| Type of Car : {props.carss.type}</td>
            <td>| Number of Doors : {props.carss.numberOfDoors}</td>
            <td>| Miles : {props.carss.miles}</td>
            <td>| Vechicle Location: {props.carss.vehicleLocation}</td>
        </tr> */}
    
                
        <Table striped bordered hover variant='light'>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Price</th>
                        <th>Condition</th>
                        <th>Transmission</th>
                        <th>Color</th>
                        <th>Type of Car</th>
                        <th>Number of Doors</th>
                        <th>Miles</th>
                        <th>Vechicle Location</th>
                        
                    </tr>
                
                </thead>
                <tbody>
                    <tr>
                        <td>{props.carss.id}</td>
                        <td>{props.carss.price}</td>
                        <td>{props.carss.condition}</td>
                        <td>{props.carss.transmissionType}</td>
                        <td>{props.carss.color}</td>
                        <td>{props.carss.type}</td>
                        <td>{props.carss.numberOfDoors}</td>
                        <td>{props.carss.miles}</td>
                        <td>{props.carss.vehicleLocation}</td>
                    </tr>
                </tbody>
        </Table>

</div>
     );
}
 
export default CarRow;