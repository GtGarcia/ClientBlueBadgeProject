import CarTable from "./CarTable/CarTable";
import { useState } from "react";
import CreateListing from "./CreateListing/CreateListing";

const CarIndex = (props) => {
    const [refreshCarTable, setRefreshCarTable] = useState(true);

    return (  
        <div>
            <CreateListing token = {props.token}
                            refreshCarTable = {refreshCarTable}
                            setRefreshCarTable = {setRefreshCarTable}/>
            <CarTable token = {props.token} refreshCarTable = {refreshCarTable} />
        </div>
    );
}
 
export default CarIndex;