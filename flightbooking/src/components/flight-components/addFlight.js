import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { listAirline, addAirline } from '../../store/action/airline';

export class AddFlight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            flight: {
                flightId: "",
                flightName: '',
                arrivalCity: '',
                departureCity: '',
                departureDate: '',
                
            },
            errors: {},
            msg: '',
            airline: [],
            
        
        };
    }
    componentDidMount() {

    }
    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">Add Flight</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Flight Info: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>Flight Name: </label>
                            <input type="text"
                                name="flightName"
                                value={this.state.flight.flightName}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['flightName']}</span>
                            <br /><br />
                            <label>Departure City: </label>
                            <input type="text"
                                name="departureCity"
                                value={this.state.flight.departureCity}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['departureCity']}</span>
                            <br /><br />
                            <label>Arrival City: </label>
                            <input type="text"
                                name="arrivalCity"
                                value={this.state.flight.arrivalCity}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['arrivalCity']}</span>
                            <br /><br />
                            <label>Departure Date: </label>
                            <input type="date"
                                name="departureDate"
                                value={this.state.flight.departureDate}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['departureDate']}</span>
                            <br /><br />
                            <label>Select Airline: </label>
                            <select name="airlineID"
                                value={this.state.flight.airlineID}
                                onChange={this.changeHandler} >
                                <option key={0} value="">--Select Airline--</option>
                                {this.props.airline1.list.map(a => (
                                    <option key={a.id} value={a.id}>{a.name}</option>
                                ))}
                            </select>
                            <span style={{ color: 'red' }}>{this.state.errors['airlineId']}</span>
                            <br /><br />
                            
                            <button onClick={this.onAdd} className="btn btn-primary">Add Flight</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    changeHandler = (event) => {
        this.setState({
            flight: {
                ...this.state.flight,
                [event.target.name]: event.target.value
            }
        });
    }
    onAdd = () => {
        /* Validate User inputs */
        if(this.handleValidation())
        {
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
        let flightName = this.state.flight.flightName;
        let departureCity = this.state.flight.departureCity;
        let arrivalCity = this.state.flight.arrivalCity;
        let departureDate = this.state.flight.departureDate;
        let tempErrors = {}
        let formValid = true;
        if (!flightName) {
            //If name is not given       
            formValid = false;
            tempErrors['flightName'] = 'Flight Name cannot be empty';
        }
        if (!departureCity) {
            //If name is not given    
            formValid = false;
            tempErrors['departureCity'] = 'departureCity cannot be empty';
        }
        if (!arrivalCity) {
            //If name is not given    
            formValid = false;
            tempErrors['arrivalCity'] = 'arrivalCity cannot be empty';
        }
        if (!departureDate) {
            //If name is not given   
            formValid = false;
            tempErrors['departureDate'] = 'departureDate cannot be empty';
        }
        this.setState({
            errors: tempErrors
        });
        return formValid;
    }
    async postFlight(f) {
        let flight1 = {
            flightName: f.flightName,
            departureCity: f.departureCity,
            arrivalCity: f.arrivalCity,
            departureDate: f.departureDate
        }
        try {
            const response = axios.post("http://localhost:8585/api/flight/add/" + f.airlineID , flight1);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: " Flight Added "
            })
            this.props.addFlight(data);
        }
        catch (error) {
            this.setState({
                msg: ' '
            })
        }
    }
}
function mapStateToProps(state) {
    return {
        airline: [],
        addFlight: state.flight
    }
}
export default connect(mapStateToProps, { listAirline, addAirline })(AddFlight);
