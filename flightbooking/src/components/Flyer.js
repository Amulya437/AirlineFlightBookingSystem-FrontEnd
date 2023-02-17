import { Component } from "react";
import { connect } from "react-redux";
import { AddFlyer } from "./flyer-components/addFlyer";
import FlyerList from "./flyer-components/flyerList";
import { FlightList } from "../store/action/flight";


export class Flyer extends Component {
  constructor(props) {
    super(props);

    this.state = {
        componentNum: 0
    };
  }

  componentDidMount() {
    //this.props.FlyerList();
    //this.props.FlightList();
  }

  render() {
    return (
      <div className="container-fliud">
        <div className="row">
          <div className="col-sm-3">
            <ul className="list-group">
             <li className=" list-group-item"> <button  className="list-group-item employee-sidebar" onClick={()=>{
                 this.setState({componentNum : 1})
                  }} > Show all Flyers </button> </li>
            <li className="list-group-item"> <button className=" list-group-item employee-sidebar" onClick={()=>(this.setState({componentNum : 2}))}>
                Add Flyer</button></li>
            </ul>
          </div>

          <div className="col-lg-9">
          {this.state.componentNum === 1?
           <FlyerList />:  <AddFlyer />}
          </div>
        </div>
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    FlyerList: state.flyer,
    AddFlyer: state.flyer,
    FlightList:state.flight,
    flg : state.flight
  };
}



export default connect( mapStateToProps, { FlyerList})(Flyer);
