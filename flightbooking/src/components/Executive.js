import { Component } from "react";
import { connect } from "react-redux";
import { ExecutiveList } from "../store/action/executive";

export class Executive extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.ExecutiveList();
    }
    render() {
        return (
            <div className="container-fliud">
                <div className="row">
                    <div className="col-sm-3">
                        <ul className="list-group">
                            <li className="list-group-item">Show all Executive</li>
                            <li className="list-group-item">Add Executive</li>
                            
                        </ul>
                    </div>
                    <div className="col-lg-9">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">S.No</th>
                                    <th scope="col">Id</th>
                                    
                                    <th scope="col">Executive Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.executiveList.list.map((e, index) => (
                                        <tr key={e.id}>
                                            <th scope="row" key={e.id}> {index + 1}</th>
                                            <td>{e.id}</td>
                                           
                                            <td>{e.name}</td>
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
        executiveList: state.executive
    };
}
export default connect(mapStateToProps, { ExecutiveList })(Executive);