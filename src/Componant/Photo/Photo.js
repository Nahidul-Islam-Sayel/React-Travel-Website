import React from 'react';
import { Card , Button } from 'react-bootstrap';
import './Photo.css'
const Photo = (props) => {
 const{title, image, star , type , type1 , type2}= props.data;
 console.log(props.data)
    return (
        <Card style={{ width: '18rem' }}>
        <Card.Img variant="top" src={image} />
        <Card.Body>
    <Card.Title>{title}</Card.Title>
          <Card.Text>
           <p> {type}</p>
           <p> {type1}</p>
           <p> {type2}</p>
          </Card.Text>
         
        </Card.Body>
      </Card>
    );
};

export default Photo;