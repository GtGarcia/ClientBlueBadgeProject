import {BrowserRouter as Router,Routes, Route, Link} from 'react-router-dom'
import logo from './logo.svg';
import './App.css';
import {
  Nav,NavItem,NavLink,Dropdown,DropdownItem,DropdownToggle,DropdownMenu,Navbar,NavbarBrandNavbarToggler,
Collapse,UncontrolledDropdown,NavbarText,CardHeader,CardTitle,Row,Col,Card,CardBody,Line,CardFooter,Pie
} from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/Login/Login';
import Home from './components/HomePage';
import Register from './components/Register/Register';
import { useState, useEffect } from 'react';



function App() {
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





  return (
    
   <Router>
     
     <Routes>
       <Route path = '/' element = {<Home  />}/>
       <Route path = "/login" element={<Login updateLocalStorage={updateLocalStorage}/>} />
       <Route path = '/register' element= {<Register updateLocalStorage={updateLocalStorage}/>}/>
     </Routes>
   </Router>
     

  );
}

export default App;
