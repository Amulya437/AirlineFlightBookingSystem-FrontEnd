import { Component } from "react";
import { connect } from "react-redux";
import { AddAirline } from "./airline-components/addAirline";
import AirlineList from "./airline-components/airlineList";

export class Airline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentNum: 0
        };
    }
    componentDidMount() {
<<<<<<< HEAD
        //this.props.AirlineList();     
=======
        //this.props.AirlineList();     
>>>>>>> 7e71f45f724a2ad86f2008d74e60782414b906ce
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className=" list-group-item"> <button
                                className="list-group-item employee-sidebar" onClick={() => {
                                    this.setState({ componentNum: 1 })
                                }
                                }
                            >
                                Show all Airline </button> </li>
                            <li className="list-group-item">
                                <button className=" list-group-item employee-sidebar"
                                    onClick={() => (this.setState({ componentNum: 2 }))}>
                                    Airline</button>
                            </li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        {this.state.componentNum === 1 ?
                            <AirlineList /> : <AddAirline />}
                    </div>
                </div>
            </div>
        );
    }
};
function mapStateToProps(state) {
    return {
        AirlineList: state.airline,
        AddAirline: state.airline
    };
}
export default connect(mapStateToProps, { AirlineList })(Airline);