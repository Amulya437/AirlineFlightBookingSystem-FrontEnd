import { Component } from "react";
import { connect } from "react-redux";
import { FlyerList } from "../store/action/flyer";

export class Flyer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
       this.props.FlyerList();
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className="list-group-item">Show all Flyer</li>
                            <li className="list-group-item">Add Flyer</li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Flyer Id</th>
                                    <th scope="col">First Name</th>
                                    <th scope="col">Last Name</th>
                                    <th scope="col">Middle Name</th>
                                    <th scope="col">Email</th>
                                    <th scope="col">Phone</th>
                                    
                                </tr>
                            </thead>
                            <tbody>
                                {
                                   
                                    this.props.flyerList.list.map((f, index) => (
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