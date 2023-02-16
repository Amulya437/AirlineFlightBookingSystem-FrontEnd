import axios from "axios";
import { Component } from "react";


export default class Flight1 extends Component{
constructor(){
        super();

        this.state={
                flight: {
                    name: '',
                    code: ''
                    
                },
                errors: {},
                msg: ''
        }
    }

    componentDidMount(){}

    render() {
         return (
         <div>
             <h1>Flight</h1> <span>{this.state.msg}</span>
             <br />
             <label>Enter the flight_id: </label>
              <input type="text" name="flight_id"
               value={this.state.flight.flight_id}
                onChange={this.changeHandler} />
                <span style={{ color: 'red' }}>{this.state.errors['flight_id']}</span>
                 <br /><br />
                 <label>Enter arrival_city: </label>
                  <input type="text" name="arrival_city"
                   value={this.state.flight.arrival_city}
                   onChange={this.changeHandler} />
                    <span style={{ color: 'red' }}>{this.state.errors['arrival_city']}</span>
                    <br /><br />
                    <label>Enter departure_city: </label>
                    <input type="text" name="departure_city"
                    value={this.state.flight.departure_city}
                    onChange={this.changeHandler} />
                     <span style={{ color: 'red' }}>{this.state.errors['departure_city']}</span>
                     <br /><br />
                     <label>Enter departure_date: </label>
                    <input type="text" name="departure_date"
                    value={this.state.flight.departure_date}
                    onChange={this.changeHandler} />
                     <span style={{ color: 'red' }}>{this.state.errors['departure_date']}</span>
                     <br /><br />
                     <label>Enter flight_name : </label>
                      <input type="flight_name" name="flight_name"value={this.state.flight.flight_name}
                      onChange={this.changeHandler} />
                      <span style={{ color: 'red' }}>{this.state.errors['flight_name']}</span>
                      <br /><br />
                     
                      <button onClick={this.onSubmit}>Submit</button> </div>);
                      }
            changeHandler = (event) => { 
                this.setState(
                    {
                        flight: {
                            ...this.state.flight,
                            [event.target.name]: event.target.value
                        }
                    });
                }
                onSubmit = () => {
                    /* Validate User inputs */
                    if (this.handleValidation()) {
                        console.log(this.state.flight); 
                        
                        /* Call the API */
                        this.postFlight(this.state.flight);
                    } 
                    else { 
                        /* Display error messages */
                        console.log('validation not passed..'); 
                    }
                }
                handleValidation() {
                    let flight_id = this.state.flight.flight_id;
                    let arrival_city = this.state.flight.arrival_city;
                    let departure_city = this.state.flight.departure_city;
                    let departure_date = this.state.flight.departure_date;
                    let flight_name = this.state.flight.flight_name;
                    
                    let tempErrors = {}
                    let formValid = true;
                    if (!flight_id) { 
                        //If flight_id is not given            
                        formValid = false;
                        tempErrors['flight_id'] = 'flight_id cannot be empty';
                    }
                    if (!arrival_city) { 
                        //If arrival_city is not given            
                        formValid = false;
                        tempErrors['arrival_city'] = 'arrival_city cannot be empty';
                    } 
                    if (!departure_city) { 
                        //If departure_city is not given            
                        formValid = false;
                        tempErrors['departure_city'] = 'departure_city cannot be empty';
                    }
                    if (!departure_date) { 
                        //If departure_city is not given            
                        formValid = false;
                        tempErrors['departure_date'] = 'departure_date cannot be empty';
                    }
                    if (!flight_name) { 
                        //If flight_name is not given            
                        formValid = false; 
                        tempErrors['flight_name'] = 'flight_name cannot be empty';
                    }
                    
                    this.setState({ errors: tempErrors });
                    return formValid;
                }
                async postFlight(flight){
                    try {
                        const response = axios.post("http://localhost:8585/api/flight/add", flight);
                        const data = (await response).data; 
                        console.log('API success'); 
                        console.log(data); 
                    } 
                    catch (error) {
                        console.error(error.response.data.msg); 
                        this.setState({
                            msg: error.response.data.msg 
                        }) 
                    }
                }
    }
        