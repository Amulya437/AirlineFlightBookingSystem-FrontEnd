import { Component } from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from "./components/navbar";
import { Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import {store} from "./store";
import PageNotFound from "./components/PageNotFound";
import Airline from "./components/Airline.js";
import './components/app.css';
import Flight from "./components/Flight";
import Executive from "./components/Executive";
import { Login } from "./components/auth/login";
import SignUp from "./components/SignUp";
import Flyer from "./components/Flyer";
import Logout from "./components/auth/logout";

export default class App extends Component {

  
  render(){ 
    return(
    <div className="background">
     
      <Provider store={store}>
      <NavBar/>
      <Routes>

        
        <Route path="/" element={ <Login />} /> 
        <Route path="/airline" element={ <Airline/>} />
        <Route path="/flyer" element={ <Flyer/>} />
        <Route path="/flight" element={ <Flight/>} /> 
        <Route path="/executive" element={ <Executive/>} /> 
        <Route path="/sign-up" element={ <SignUp />} />
        <Route path="/logout" element={ <Logout />} />
        <Route path="*" element={ <PageNotFound />} />
        </Routes>
        </Provider>
        </div>
        );
      }}