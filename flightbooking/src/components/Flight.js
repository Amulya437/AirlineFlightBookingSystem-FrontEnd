import { Component } from "react";
import { connect } from "react-redux";
import AddFlight from "./flight-components/addFlight";
import Airline from "./airline-components/addAirline";
import { listAirline } from "../store/action/airline";
import FlightList from "./flight-components/flightList";
import { listExecutive } from "../store/action/executive";
import AddExecutive from "./executive-components/addExecutive";

export class Flight extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentNum: 0,
            isLoggedIn: false
        };
    }
    componentDidMount() {
        this.props.listAirline();
        this.props.listExecutive();
        let username = localStorage.getItem('username');

        if (username === null || username === undefined)
            this.setState({ isLoggedIn: false })
        else
            this.setState({ isLoggedIn: true })
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
                            <li className="list-group-item">
                                <button className=" list-group-item executive-sidebar" onClick={() => (this.setState({ componentNum: 4}))}>
                                    Add Executive</button></li>

                        </ul>
                    </div>
                    <div className="col-lg-9">{this.state.componentNum === 1 ? <FlightList /> : this.state.componentNum === 2 ?
                        <Airline /> : this.state.componentNum === 3?
                        <AddFlight airline1={this.props.airline1} executive1={this.props.executive1}  />:<AddExecutive />
                        }
                    </div>
                </div>
            </div>
        );
    }
};
function mapStateToProps(state) {
    return {
        airline1: state.airline,
        executive1: state.executive
    }
}
export default connect(mapStateToProps, { listAirline ,listExecutive})(Flight);