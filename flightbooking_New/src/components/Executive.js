import { Component } from "react";
import { connect } from "react-redux";
import ExecutiveList from "./executive-components/executiveList";
import { AddExecutive } from "./executive-components/addExecutive";
export class Executive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            componentNum: 0
        };
    }
    componentDidMount() {
        //this.props.listExecutive();
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className=" list-group-item">
                                <button className="list-group-item executive-sidebar" onClick={() => { this.setState({ componentNum: 1 }) }} >
                                    Show all executors </button> </li>
                            <li className="list-group-item"> <button className=" list-group-item executor-sidebar" onClick={() => (this.setState({ componentNum: 2 }))}>
                                Add Executor</button></li>
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        {this.state.componentNum === 1 ?
                            <ExecutiveList /> : <AddExecutive />}
                    </div>
                </div>
            </div>
        );
    }
};
function mapStateToProps(state) {
    return {
        ExecutiveList: state.executive,
        AddExecutive: state.executive,
    };
}
export default connect(mapStateToProps, { ExecutiveList })(Executive);