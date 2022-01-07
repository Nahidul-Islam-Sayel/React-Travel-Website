import React, { useState } from 'react';
import { Slide } from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css'
import './Home.css'
import City from '../City/City'
import { Carousel  } from 'react-bootstrap';
import Fakedata from '../../Fakedata/Fakedata'
const Home = () => {
    const[data, setData]= useState(Fakedata);
    return (
        <div className="slide-container">
             <Slide>
        {
            data.map(data=><City data={data}></City>)
        }
       </Slide>

        </div>
    );
};

export default Home;