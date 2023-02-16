import { Component } from "react";
import { connect } from "react-redux";
import { AirlineList } from "../store/action/airline";

export class Airline extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.AirlineList();
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className="list-group-item">Show all Airline</li>
                            <li className="list-group-item">Add Airline</li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Id</th>
                                    <th scope="col">Airline Code</th>
                                    <th scope="col">Airline Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.airlineList.list.map((a, index) => (
                                        <tr key={a.id}>
                                            <th scope="row" key={a.id}> {index + 1}</th>
                                            <td>{a.id}</td>
                                            <td>{a.code}</td>
                                            <td>{a.name}</td>
                                        </tr>
                                    ))}
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
        airlineList: state.airline
    };
}
export default connect(mapStateToProps, { AirlineList })(Airline);
