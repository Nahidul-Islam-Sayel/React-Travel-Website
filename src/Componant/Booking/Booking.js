import React, { useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import Fakedata from '../../Fakedata/Fakedata'
import { Button , Card , Form , Col , Row  } from 'react-bootstrap';
import './Booking.css'
import Box from '@mui/material/Box';
import { TextField } from '@mui/material';
import { Grid } from '@mui/material';
import DatePicker from "react-datepicker";

import "react-datepicker/dist/react-datepicker.css";

const Booking = () => {
    const[users,setusers]=useState(Fakedata);
    const{id}= useParams();
   
   console.log(id);
    const user = users.filter(user=>user.id==id);
    const [startDate, setStartDate] = useState(new Date());

<Box
      component="form"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    ></Box>
    return (
        <div className="style">
            <div className="info">
            <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={user[0].image}/>
  <Card.Body>
<Card.Title>{user[0].Name}</Card.Title>
    <Card.Text>
     {
         user[0].About
     }
    </Card.Text>
  </Card.Body>
</Card>
            </div>
            <div className="xyz">
            <TextField id="outlined-basic"  label="Origins" variant="outlined" />
            <br/><br/>
            <TextField id="outlined-basic" value={user[0].Name}  variant="outlined" /><br/><br/>
            <p>From</p>
            <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
          <p>To</p>
          <DatePicker selected={startDate} onChange={(date) => setStartDate(date)} />
      <br/><br/>

        <Link to={"/hotel/"+id}> <Button variant="primary" size="lg">
      Booking Now
    </Button></Link>     
     
            </div>

        </div>
    );
};

export default Booking;