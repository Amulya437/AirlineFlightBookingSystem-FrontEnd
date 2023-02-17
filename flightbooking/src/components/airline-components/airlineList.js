import { Component } from "react";
import { connect } from "react-redux";
import Airline from "../Airline";
import { listAirline } from "../../store/action/airline";

export class AirlineList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.listAirline();
    }
    render() {
        return (
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
        );
    }
};
function mapStateToProps(state) {
    return {
        airlineList: state.airline
    };
}
export default connect(mapStateToProps, { listAirline })(AirlineList);