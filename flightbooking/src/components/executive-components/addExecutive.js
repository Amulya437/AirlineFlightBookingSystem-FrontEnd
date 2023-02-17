import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { addExecutive } from "../../store/action/executive";
export class AddExecutive extends Component {
    constructor(props) {
        super(props);
        this.state = {
            executive: {
                name: '',

                username: '',
                password: '',
                role: 'EXECUTIVE'
            },
            errors: {},
            msg: '',
        };
    }
    componentDidMount() {


    }
    render() {
        return (
            <div>
                <div className="card">

                    <h5 className="card-header">Add Executive</h5>
                    <div className="card-body">
                        <h5 className="card-title">Enter Executive Info: </h5>
                        <p className="card-text">
                            <span>{this.state.msg}</span> <br />
                            <label>Enter the Name: </label>
                            <input type="text" name="name" value={this.state.executive.name} onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['name']}</span>
                            <br /><br />
                            <label>Enter the username: </label>
                            <input type="text" name="username" value={this.state.executive.username} onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['username']}</span>
                            <br /><br />
                            <label>Enter password: </label>
                            <input type="password" name="password" value={this.state.executive.password} onChange={this.changeHandler} />
                            <span style={{ color: 'red' }}>{this.state.errors['password']}</span>
                            <br /><br />
                            <button onClick={this.onAdd} className="btn btn-primary">Add Executive</button>
                        </p>
                    </div>
                </div>
            </div>);
    }
    changeHandler = (event) => {
        this.setState({
            executive:
            {
                ...this.state.executive,
                [event.target.name]: event.target.value
            }
        });
    }
    onAdd = () => {
        /* Validate Executive inputs */
        if (this.handleValidation()) {
            console.log(this.state.executive);
            /* Call the API */
            this.postExecutive(this.state.executive);
        } else {
            /* Display error messages */
            console.log('validation not passed..');
        }
    }
    handleValidation() {
        let name = this.state.executive.name;
        let username = this.state.executive.username;
        let password = this.state.executive.password;
        let tempErrors = {}
        let formValid = true;
        if (!name) {
            //If firstname is not given      
            formValid = false;
            tempErrors['name'] = 'Name cannot be empty';
        }
        if (!username) {
            //If name is not given   
            formValid = false;
            tempErrors['username'] = 'username cannot be empty';
        }
        if (!password) {
            //If password is not given      
            formValid = false;
            tempErrors['password'] = 'Password cannot be empty';
        } this.setState({
            errors: tempErrors
        });
        return formValid;
    }
    async postExecutive(e) {
        let exe = {
            name: e.name,
            user: {
                username: e.username,
                password: e.password,
                role: 'EXECUTIVE'
            }
        }
        try {
            const response = axios.post("http://localhost:8585/api/executive/add", exe);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: "Executive Registered"
            })
            this.props.addExecutive(data);
        } catch (error) {
            this.setState({
                msg: 'Operation Failed'
            })
        }
    }
}
function mapStateToProps(state) {
    return {
        addExecutive: state.executive
    }
}
export default connect(mapStateToProps, { addExecutive })(AddExecutive);