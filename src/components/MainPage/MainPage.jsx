
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainPage.css"
import { APIURL, EndPoints } from '../endpoints';
import "../MainPage/MainPage.css";

let recentSale;


const MainPage = (props) => {
    useEffect(() => {
        displayRecentSale(props);
    }, []);

    const [displayRecentSalePrice, setDisplayRecentSalePrice] = useState('');
    const [displayRecentSaleCondition, setDisplayRecentSaleCondition] = useState('');
    const [displayRecentSaleTransmissionType, setDisplayRecentSaleTransmissionType] = useState('');
    const [displayRecentSaleColor, setDisplayRecentSaleColor] = useState('');
    const [displayRecentSaleType, setDisplayRecentSaleType] = useState('');
    const [displayRecentSaleNumberDoors, setDisplayRecentSaleNumberDoors] = useState('');
    const [displayRecentSaleMiles, setDisplayRecentSaleMiles] = useState('');
    const [displayRecentSaleVehLoc, setDisplayRecentSaleVehLoc] = useState('');
    
function displayRecentSale (props) {

    fetch(APIURL + EndPoints.car.get, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer ${props.token}`
        })
    }).then (
        (response) => response.json()
    ) .then((data) => {
        console.log(data);
        let dataListing = data.listing
        let newestListing = dataListing.length

        recentSale = data.listing[newestListing-1];
        console.log(recentSale)

        setDisplayRecentSalePrice(recentSale.price);
        setDisplayRecentSaleCondition(recentSale.condition);
        setDisplayRecentSaleTransmissionType(recentSale.transmissionType);
        setDisplayRecentSaleColor(recentSale.color);
        setDisplayRecentSaleType(recentSale.type);
        setDisplayRecentSaleNumberDoors(recentSale.numberOfDoors);
        setDisplayRecentSaleMiles(recentSale.miles);
        setDisplayRecentSaleVehLoc(recentSale.vehicleLocation);
    }) .catch((err) => console.log(err))
}

    return (
        <div className="wholePage" >
            <div className="aboutUs" className= 'border' >
                <h4>Welcome to the Lemon Lot! The Veteran's home for used car sales. We are a family-owned business and support </h4>
                <div className="customerQuote" className= 'border'>
                    <p id="customerQuote">"I was stationed overseas a few months back, and I was struggling to find somewhere to sell my car. I'm happy I came across Lemon Lot when I did. They have easy-to-navigate sites, and easy-to-use features."</p>
                    <p className="quoteName"> - Customer</p>
                </div>
            </div>
                
                <div className='mostRecentSale' className= 'border'>
                    <div>
                        <h4>Most recent Sale!</h4>
                    </div>

                    <p>Price: {displayRecentSalePrice}</p>
                    <p> Condition: {displayRecentSaleCondition}</p>
                    <p> TransmissionType: {displayRecentSaleTransmissionType}</p>
                    <p>Color: {displayRecentSaleColor}</p>
                    <p>Type of Car: {displayRecentSaleType}</p>
                    <p>Number of Doors: {displayRecentSaleNumberDoors}</p>
                    <p>Miles: {displayRecentSaleMiles}</p>
                    <p> Vechicle Location: {displayRecentSaleVehLoc}</p>
                </div>
        </div>
     );
}
 
export default MainPage;