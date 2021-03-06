import {BrowserRouter as Router} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
// import {
//   Nav,NavItem,NavLink,Dropdown,DropdownItem,DropdownToggle,DropdownMenu,Navbar,NavbarBrandNavbarToggler,
// Collapse,UncontrolledDropdown,NavbarText,CardHeader,CardTitle,Row,Col,Card,CardBody,Line,CardFooter,Pie
// } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';

import Register from './components/Register/Register';
import { useState, useEffect } from 'react';
import NavBar from './components/Navbar/NavBar';
// import CarTable from './components/CarTable/CarTable';
import CarIndex from './components/CarIndex';
import Auth from './components/Auth';
import LemonLotTitleTopScreen from "../src/assets/LemonLotTitleTopScreen.png"



function App(props) {
  const [token, setToken] = useState("");

  const updateLocalStorage = (newToken) => {
    localStorage.setItem('token', newToken)
    setToken(newToken)
  }

  useEffect(() => {
    if(localStorage.getItem('token')){
      setToken(localStorage.getItem('token'))
    }
  }, []);

  const clearLocalStorage = () => {
    localStorage.clear()
    setToken('')
  }

console.log(token === localStorage.getItem('token'))
  return (
    <div className= 'body'>
      <img src={LemonLotTitleTopScreen} alt="titleLogo" className='titleTop'/>
      <Router>
        <NavBar token={token} updateLocalStorage={updateLocalStorage} clearLocalStorage = {clearLocalStorage} />

      </Router>

    </div>


  );
}

export default App;
