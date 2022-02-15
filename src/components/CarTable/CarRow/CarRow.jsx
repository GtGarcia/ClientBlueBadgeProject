const CarRow = (props) => {
    return ( 
        <tr>
            <td>{props.car.price}</td>
            <td>{props.car.condition}</td>
            <td>{props.car.transmissionType}</td>
            <td>{props.car.color}</td>
            <td>{props.car.type}</td>
            <td>{props.car.numberOfDoors}</td>
            <td>{props.car.miles}</td>
            <td>{props.car.vehicleLocation}</td>
        </tr>
     );
}
 
export default CarRow;