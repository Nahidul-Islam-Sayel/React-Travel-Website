import React from 'react';
import Logo from '../../Data/Icon/Logo.png'
import { Button , Navbar , NavDropdown , Nav , Form , FormControl , Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Top = () => {
    return (
        <div>
<Navbar   expand="lg">
  <Container fluid>
    
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav
        className="me-auto my-2 my-lg-0"
        style={{ maxHeight: '100px' }}
        navbarScroll
      >
  <Link to="/">   <Nav.Link href="#action1">Home</Nav.Link></Link>
       
        <NavDropdown title="Login" id="navbarScrollingDropdown">
  <Link to="/register"><NavDropdown.Item href="#action3">Sing Up</NavDropdown.Item></Link>       
       <Link to="/login">  <NavDropdown.Item href="#action4">Sing In</NavDropdown.Item></Link> 
          <NavDropdown.Divider />
         
        </NavDropdown>
    <Link to="/booking">
    <Nav.Link>Booking</Nav.Link>
    </Link> 
      </Nav>
     
      <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
    </Navbar.Collapse>
  </Container>
</Navbar>
        </div>
    );
};

export default Top;