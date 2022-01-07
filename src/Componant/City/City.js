import React, { useState } from 'react';
import { Carousel  } from 'react-bootstrap';
import Fakedata from '../../Fakedata/Fakedata'
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './City.css'
import { Button , Navbar , NavDropdown , Nav , Form , FormControl , Container  } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const City = (props) => {
    const{Name , image , About , id}=props.data;
 console.log(id);
    return ( 
      <div className="each-slide">
      <div className="style">
    <div>
    <h3>{Name}</h3>
    <span className="about">{About}</span><br/><br/>
   <Link to={"/booking/"+id}><Button variant="warning">Booking</Button></Link> 
    </div>
      
      <img src={image} alt="" srcset=""/>
        
      </div>
    </div>

  
  );
};

export default City;