
import React, {useState, useEffect} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./MainPage.css"
import { APIURL, EndPoints } from '../endpoints';

let recentSale;

const MainPage = () => {
    useEffect(() => {
        displayRecentSale();
    }, []);

    const [displayRecentSalePrice, setDisplayRecentSalePrice] = useState('');
    const [displayRecentSaleCondition, setDisplayRecentSaleCondition] = useState('');
    const [displayRecentSaleTransmissionType, setDisplayRecentSaleTransmissionType] = useState('');
    const [displayRecentSaleColor, setDisplayRecentSaleColor] = useState('');
    const [displayRecentSaleType, setDisplayRecentSaleType] = useState('');
    const [displayRecentSaleNumberDoors, setDisplayRecentSaleNumberDoors] = useState('');
    const [displayRecentSaleMiles, setDisplayRecentSaleMiles] = useState('');
    const [displayRecentSaleVehLoc, setDisplayRecentSaleVehLoc] = useState('');
    
function displayRecentSale () {

    fetch(APIURL + EndPoints.car.get, {
        method: "GET",
        headers: new Headers({
            'Content-Type': 'application/json',
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6NCwiaWF0IjoxNjQ0OTM3MTQ4LCJleHAiOjE2NDUwMjM1NDh9.4JAsoMWmkr1Vlpdb0Nfpb4u8Te5BQGaCByIRI5ymqaU`
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
        <div className="wholePage">
            <div className="aboutUs" >
                <h4>Welcome to the Lemon Lot! The Veteran's home for used car sales. We are a family-owned business and support </h4>
                <div className="customerQuote">
                    <p id="customerQuote">"I was stationed overseas a few months back, and I was struggling to find somewhere to sell my car. I'm happy I came across Lemon Lot when I did. They have easy-to-navigate sites, and easy-to-use features."</p>
                    <p className="quoteName"> - Customer</p>
                </div>
            </div>
                
                <div className='mostRecentSale'>
                    <div>
                        <h4>Most recent Sale!</h4>
                    </div>

                    <p>{displayRecentSalePrice}</p>
                    <p>{displayRecentSaleCondition}</p>
                    <p>{displayRecentSaleTransmissionType}</p>
                    <p>{displayRecentSaleColor}</p>
                    <p>{displayRecentSaleType}</p>
                    <p>{displayRecentSaleNumberDoors}</p>
                    <p>{displayRecentSaleMiles}</p>
                    <p>{displayRecentSaleVehLoc}</p>
                </div>
        </div>
     );
}
 
export default MainPage;