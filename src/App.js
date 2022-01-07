import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Top from './Componant/Top/Top';
import Home from './Componant/Home/Home'
import Booking from './Componant/Booking/Booking'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Login/Login';
import Register from './Login/Register';
import Hotel from './Componant/Hotel/Hotel';
import { createContext, useState } from 'react';
import PrivateRoute from './Componant/PrivateRoute/PrivateRoute';
export const userContext= createContext();
function App() {
   const[user,loginUser]=useState({});
  return (
    <userContext.Provider value={[user,loginUser]}>

    <Router>
        <Top/>
      <Switch>
      <PrivateRoute path="/booking/:id">
            <Booking/>
          </PrivateRoute>
      <Route path="/login">
        <Login/>
      </Route>
      <Route path="/register">
        <Register/>
      </Route>
      <Route path="/hotel/:id">
        <Hotel/>
      </Route>
      <Route path="/">
    
      <Home/>
          </Route>
          
     
      </Switch>
      </Router>
      </userContext.Provider>
  );
}

export default App;
