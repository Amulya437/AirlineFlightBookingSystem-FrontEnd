import { Component } from "react";
import { connect } from "react-redux";
import AddFlight from "./flight-components/addFlight";
import Airline from "./airline-components/addAirline";
import { listAirline } from "../store/action/airline";
import FlightList from "./flight-components/flightList";
export class Flight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentNum: 0
        };
    }
    componentDidMount() {
        this.props.listAirline();
        
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className=" list-group-item">
                                <button className="list-group-item flight-sidebar" onClick={() => { this.setState({ componentNum: 1 }) }} >
                                    Show all Flights </button> </li>
                            <li className="list-group-item">
                                <button className=" list-group-item airline-sidebar" onClick={() => (this.setState({ componentNum: 2 }))}>
                                    Add Airline</button></li>
                            <li className="list-group-item">
                                <button className=" list-group-item flight-sidebar" onClick={() => (this.setState({ componentNum: 3 }))}>
                                    Add Flight</button></li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-9">{this.state.componentNum === 1 ? <FlightList /> : this.state.componentNum === 2 ?
                        <Airline /> : <AddFlight airline1={this.props.airline1} />}
                    </div>
                </div>
            </div>
        );
    }
}; 
function mapStateToProps(state) {
    return {
        airline1: state.airline,
    }
}
export default connect(mapStateToProps, { listAirline })(Flight);