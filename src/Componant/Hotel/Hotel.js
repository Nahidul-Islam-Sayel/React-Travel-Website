import React from 'react';
import { useState } from 'react';
import Hoteldata from '../../Fakedata/Hoteldata'
import Photo from '../Photo/Photo';
import Map from '../map/Map'
import './Hotel.css'
import Fakedata from '../../Fakedata/Fakedata'
import { useParams } from 'react-router-dom';
const Hotel = () => {
    const[hotel,SetHotel]=useState(Hoteldata);
    const[data,setData]=useState(Fakedata);
    const{id} = useParams();
    const user = data.filter(data=>data.id==id);
    console.log(user);
    
    
    return (
        <div className="body">
            <div className="photo">
    <h4>Stay in {user[0].Name}</h4>
               {
                   hotel.map(data=><Photo data={data}></Photo>)
               }
            </div>
            <div className="google">
              <Map id={id}></Map>
            </div>
        </div>
    );
};

export default Hotel;