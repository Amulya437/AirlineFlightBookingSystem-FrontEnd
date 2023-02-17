import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store";

import SignUp from "./components/SignUp";
import Airline from "./components/Airline.js";
import "./components/app.css";
import Flight from "./components/Flight";
import Executive from "./components/Executive";
import User from "./components/User";
import { Login } from "./components/auth/login";

export default class App extends Component {
  render(){ 
    return(
    <div className="background">
      <Provider store={store}>
      <NavBar/>
      <Routes>
        
        <Route path="/" element={ <Login />} /> 
        <Route path="/airline" element={ <Airline/>} />
        <Route path="/flight" element={ <Flight/>} /> 
        <Route path="/executive" element={ <Executive/>} /> 
        <Route path="/user" element={ <User />} /> 
        <Route path="/sign-up" element={ <SignUp />} /> 
        
        </Routes>
        </Provider>
        </div>
        );
      }}