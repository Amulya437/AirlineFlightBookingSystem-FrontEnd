import { Component } from "react";
import { connect } from "react-redux";
import { FlightList } from "../store/action/flight";

export class Flight extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
       this.props.FlightList();
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className="list-group-item">Show all Flight</li>
                            <li className="list-group-item">Add Flight</li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Flight Id</th>
                                    <th scope="col">Arrival City</th>
                                    <th scope="col">Departure City</th>
                                    <th scope="col">Flight Name</th>
                                    <th scope="col">Airline Id</th>
                                    <th scope="col">Departure Date</th>
                                    <th scope="col">Executive Id</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   
                                    this.props.flightList.list.map((f, index) => (
                                        <tr key={f.id}>
                                            <th scope="row" key={f.id}> {index + 1}</th>
                                            <td>{f.flightId}</td>
                                            <td>{f.arrivalCity}</td>
                                            <td>{f.departureCity}</td>
                                            <td>{f.flightName}</td>  
                                            <td>{f.airline.id}</td>
                                            <td>{f.departureDate}</td>
                                            <td>{f.executive.id}</td>
                                        </tr>
                                    ))
                                }
                            </tbody>
                        </table>
                     </div>
                </div>
            </div>
        );
    }
};
function mapStateToProps(state) {
    return {
        flightList: state.flight
    };
}
export default connect(mapStateToProps, { FlightList })(Flight);
