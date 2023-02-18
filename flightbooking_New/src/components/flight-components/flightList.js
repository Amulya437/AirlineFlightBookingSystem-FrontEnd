import { Component } from "react";
import { connect } from "react-redux";
import { listFlight } from "../../store/action/flight";
export class FlightList extends Component {
    constructor(props) {
        super(props);
        this.state = {

        };
    }
    componentDidMount() {
        this.props.listFlight();
    }
    render() {
        return (
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
            </table>)
    }
}
function mapStateToProps(state) {
    return {
        flightList: state.flight
    };
}
export default connect(mapStateToProps, { listFlight })(FlightList);