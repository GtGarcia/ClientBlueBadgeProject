import React from 'react';
import LoggingOut from '../../assets/LoggingOut.png'
import { Link } from 'react-router-dom';
import { Navbar, Container, Nav, NavDropdown } from 'react-bootstrap';
import './logout.css'

const Logout = (props) => {
    return ( 
        <div>
            <div className='burger'>
    <Navbar className= 'navBar'  bg="dark" expand="lg" >
  <Container className = 'navBarColor'>
    <Navbar.Brand href="#home" className = 'navBar'><Link to="/">Home</Link></Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home"><Link to="/Login">Login</Link></Nav.Link>
        <Nav.Link href="#link"><Link to="/Register">Register</Link></Nav.Link>
        <Nav.Link href="#link"><Link to="/AllListings">View All Listings</Link></Nav.Link>
        <NavDropdown title="Cars" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1"></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2"><Link to= '/ViewMyListings'>View My Listings</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"><Link to = '/CreateListing'>Create Listing</Link></NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3"><Link to ='/UpdateListing'>Update Car Listing</Link></NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4"><Link to = '/DeleteListings'>Delete Listing</Link></NavDropdown.Item>
        </NavDropdown>
        
      </Nav>
            <img id= 'logout' className='logout' src={LoggingOut} alt="Logout" onClick= {props.clearLocalStorage} />
    </Navbar.Collapse>
  </Container>
</Navbar>
</div>



        </div>
     );
}
 
export default Logout;