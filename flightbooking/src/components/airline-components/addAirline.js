import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { addAirline } from "../../store/action/airline";
export class AddAirline extends Component {
    constructor(props) {
        super(props);
        this.state = {
            airline: {
                code: '',
                name: '',
            },
            errors: {},
            msg: '',
        };
    }
    componentDidMount() {
<<<<<<< HEAD
        //fetch all airline: call action        
        //this.props.listAirline();    
=======
        //fetch all airline: call action        
        //this.props.listAirline();    
>>>>>>> 7e71f45f724a2ad86f2008d74e60782414b906ce
    }
    render() {
        return (
            <div>
                <div className="card">
                    <h5 className="card-header">Add Airline</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Airline Info: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>Airline Code: </label>
                            <input type="text"
                                name="code"
                                value={this.state.airline.code}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['code']}</span>
                            <br /><br />
                            <label>Airline Name: </label>
                            <input type="text"
                                name="name"
                                value={this.state.airline.name}
                                onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['name']}</span>
                            <br /><br />
                            <button onClick={this.onAdd} className="btn btn-primary">Add Airline</button>
                        </p>
                    </div>
                </div>
            </div>
        );
    }
    changeHandler = (event) => {
        this.setState({
            airline: {
                ...this.state.airline,
                [event.target.name]: event.target.value
            }
        });
    }
    onAdd = () => {
        /* Validate User inputs */
        if (this.handleValidation()) {
            console.log(this.state.airline);
            /* Call the API */
            this.postAirline(this.state.airline);
        }
        else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }
    handleValidation() {
        let code = this.state.airline.code;
        let name = this.state.airline.name;
        let tempErrors = {}
        let formValid = true;
        if (!code) {
<<<<<<< HEAD
            //If name is not given        
=======
            //If name is not given        
>>>>>>> 7e71f45f724a2ad86f2008d74e60782414b906ce
            formValid = false;
            tempErrors['code'] = 'Airline code cannot be empty';
        }
        if (!name) {
<<<<<<< HEAD
            //If name is not given        
=======
            //If name is not given        
>>>>>>> 7e71f45f724a2ad86f2008d74e60782414b906ce
            formValid = false;
            tempErrors['name'] = 'Airline Name cannot be empty';
        }
        this.setState({
            errors: tempErrors
        });
        return formValid;
    } async postAirline(a) {
        let airline = {
            code: a.code,
            name: a.name
        }
        try {
            const response = axios.post("http://localhost:8585/api/airline/add/", airline);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
<<<<<<< HEAD
                msg: 'Airline added'
=======
                msg: "Airline added"
>>>>>>> 7e71f45f724a2ad86f2008d74e60782414b906ce
            })
            this.props.AddAirline(data);
        } catch (error) {
            this.setState({
                msg: 'Operation Failed'
            })
        }
    }
}
function mapStateToProps(state) {
    return {

    }
}
<<<<<<< HEAD
export default connect(mapStateToProps, { AddAirline })(AddAirline);
=======
export default connect(mapStateToProps, { AddAirline })(AddAirline);
>>>>>>> 7e71f45f724a2ad86f2008d74e60782414b906ce
