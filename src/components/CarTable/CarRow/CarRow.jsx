const CarRow = (props) => {
    return ( 
        <tr>
            <td>{props.carss.price}</td>
            <td>{props.carss.condition}</td>
            <td>{props.carss.transmissionType}</td>
            <td>{props.carss.color}</td>
            <td>{props.carss.type}</td>
            <td>{props.carss.numberOfDoors}</td>
            <td>{props.carss.miles}</td>
            <td>{props.carss.vehicleLocation}</td>
        </tr>
     );
}
 
export default CarRow;