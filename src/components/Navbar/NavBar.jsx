import {
    Route,
    Link,
    Routes
} from 'react-router-dom';



import CreateListing from '../CreateListing/CreateListing'
import Login from '../Login/Login'
import AllListings from "../AllListings/AllListings"
import UpdateListing from '../UpdateListing/UpdateListing';
import ViewMyListings from "../ViewMyListings/ViewListing"
import MainPage from '../MainPage/MainPage';
import Register from '../Register/Register';
import Logout from '../Logout/Logout';
import DeleteListings from "../deleteListing/DeleteListings"

import { Container,NavDropdown,Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./NavBar.css"

const Navbar = (props) => {
    
    return (
        <div className='mainDiv'>

            {/* <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    
                    <li><Link to="/Register">Register</Link></li>
                    <li><Link to="/AllListings">View All Listings</Link></li>
                    <li><Link to= '/ViewMyListings'>View My Listings</Link></li>
                    <li><Link to = '/CreateListing'>Create Listing</Link></li>
                    <li><Link to = '/DeleteListings'>Delete Listing</Link></li>
                    <li><Link to ='/UpdateListing'>Update</Link></li>

                </ul>
            </div> */}
            <div>
            <Logout clearLocalStorage={props.clearLocalStorage} /> 
                <Routes>
                    <Route path='/Login' element={<Login updateLocalStorage={props.updateLocalStorage}/>}></Route>
                    <Route path='/Register' element={<Register updateLocalStorage={props.updateLocalStorage}/>}></Route>
                    <Route path='/AllListings' element={<AllListings token={props.token}/>}></Route>

                    <Route path='/UpdateListing' element={<UpdateListing token={props.token}/>}></Route>
                    <Route path='/CreateListing' element={<CreateListing token={props.token}/>}></Route>
                    <Route path='/ViewMyListings' element={<ViewMyListings token={props.token}/>}></Route>
                    <Route path='/DeleteListings' element={<DeleteListings token={props.token}/>}></Route>
                    <Route path='/MainPage' element={<MainPage />}></Route>
                    <Route path='/' element={<MainPage />}></Route>
                    

                    
                </Routes>
            </div>

            

        </div>
    );
}
 
export default Navbar;