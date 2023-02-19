import { Component } from "react";
import { connect } from "react-redux";
import { listExecutive } from "../../store/action/executive";
export class ExecutiveList extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    componentDidMount() {
        this.props.listExecutive();
    }
    render() {
        return (
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">S.No</th>
                        <th scope="col"> Id</th>
                        <th scope="col">Executive Name</th>
                        <th scope="col">UserId</th>
                    </tr>
                </thead>
                <tbody>

                    {this.props.executiveList.list.map((e, index) => (
                        <tr key={e.id}>
                            <th scope="row" key={e.id}> {index + 1}</th>
                            <td>{e.id}</td>
                            <td>{e.name}</td>
                            <td>{e.user.id}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        );
    }
};
function mapStateToProps(state) {
    return {
        executiveList: state.executive
    };
}
export default connect(mapStateToProps, { listExecutive })(ExecutiveList);