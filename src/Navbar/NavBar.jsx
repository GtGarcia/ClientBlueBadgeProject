import {
    Route,
    Link,
    Routes
} from 'react-router-dom';

import CreateListing from '../CreateListing/CreateListing'
import Login from '../Login/Login'
import Signup from "../Signup/Signup"
import AllListings from "../AllListings/AllListings"
import UpdateListing from '../UpdateListing/UpdateListing';
import ViewMyListings from "../ViewMyListings/ViewListing"
import MainPage from '../MainPage/MainPage';

const Navbar = () => {
    return (
        <div>
            <div>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/Login">Login</Link></li>
                    {/* <li><Link to="/Navbar">Navbar</Link></li> */}
                    <li><Link to="/Signup">Signup</Link></li>
                    <li><Link to="/ViewMyListings">View My Listings</Link></li>

                </ul>
            </div>
            <div>
                <Routes>
                    <Route path='/MainPage' element={<MainPage />}></Route>
                    <Route path='/' element={<MainPage />}></Route>
                    <Route path='/Login' element={<Login />}></Route>
                    <Route path='/Navbar' element={<Navbar />}></Route>
                    <Route path='/Signup' element={<Signup />}></Route>
                    <Route path='/AllListings' element={<AllListings />}></Route>
                    <Route path='/UpdateListing' element={<UpdateListing />}></Route>
                    <Route path='/CreateListing' element={<CreateListing />}></Route>
                    <Route path='/ViewMyListings' element={<ViewMyListings />}></Route>
                </Routes>
            </div>
        </div>

    );
}
 
export default Navbar;