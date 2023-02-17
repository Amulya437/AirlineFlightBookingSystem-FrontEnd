import { Component } from "react";
import { connect } from "react-redux";
import Flyer from "../Flyer";
import { listFlyer }  from "../../store/action/flyer";


export class FlyerList extends Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentDidMount() {
    this.props.listFlyer();
  }

  render() {
    return (
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
                  <th scope="col">User Id</th>
                </tr>
              </thead>

              <tbody>
              
             {this.props.flyerList.list.map((f, index) => (
                <tr key={f.id}>
                  <th scope="row" key={f.id}> {index + 1}</th>
                  <td>{f.flyerId}</td>
                  <td>{f.firstName}</td>
                  <td>{f.lastName}</td>
                  <td>{f.middleName}</td>
                  <td>{f.email}</td>
                  <td>{f.phone}</td>
                  <td>{f.user.id}</td>
                </tr>
              ))}
              
             </tbody>
            </table>
        
    );
  }
};

function mapStateToProps(state) {
  return {
    flyerList: state.flyer
  };
}

export default connect(mapStateToProps, { listFlyer })(FlyerList);