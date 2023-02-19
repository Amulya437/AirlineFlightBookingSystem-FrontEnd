import { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";
import { addSignUp } from "../store/action/signUp";
import Login from "./auth/login";


class SignUp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            signUp: {
                userName: '',
                emailId: '',
                userrole: '',
                password: '',
            },
            errors: {},
            msg: '',
            
           
        };
    }
    componentDidMount() { }
    render() {
        return (
            
                <div>
                    <div id="signup">
                        <div className="container">
                            <div id="signup-row" className="row justify-content-center align-items-center">
                                <div id="signup-column" className="col-md-6">
                                    <div id="signup-box" className="col-md-12">
                                        <h3 className="text-center text-info">Sign Up</h3>
                                        <section>
                                            <div className="form-group">
                                                <label htmlFor="name" className="text-info">Name:</label><br />
                                                <input type="text" name="userName" id="name" className="form-control"
                                                    value={this.state.signUp.userName}
                                                    onChange={this.changeHandler} />
                                                <span style={{ color: 'red' }}>{this.state.errors['userName']}</span>
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="username" className="text-info">Email:</label><br />
                                                <input type="text" name="emailId" id="username" className="form-control"
                                                    value={this.state.signUp.emailId}
                                                    onChange={this.changeHandler} />
                                                <span style={{ color: 'red' }}>{this.state.errors['emailId']}</span>
                                            </div>
                                            <label htmlFor="userrole" className="text-info" >Select User Type:</label><br />
                                            <select className="form-control" defaultValue={"DEFAULT"} name="userrole"
                                                value={this.state.signUp.userrole}
                                                onChange={this.changeHandler} >
                                                <option key={0} value="">--SELECT USER--</option>
                                                <option key={1} value="FLYER">FLYER</option>
                                                <option key={2} value="AIRLINE">AIRLINE</option>
                                                <option key={3} value="EXECUTIVE">EXECUTIVE</option>
                                            </select>
                                            <div className="form-group">
                                                <label htmlFor="password" className="text-info">Password:</label><br />
                                                <input type="text" name="password" id="password" className="form-control"
                                                    value={this.state.signUp.password}
                                                    onChange={this.changeHandler} />
                                                <span style={{ color: 'red' }}>{this.state.errors['password']}</span>
                                            </div>
                                            <div className="form-group">
                                                <br />
                                                <input className="btn btn-primary btn-lg" type="submit" value="SignUp" onClick={this.onSignUp} />
                                            </div>
                                        </section>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
        )
    }
    changeHandler = (event) => {
        this.setState({
            signUp: {
                ...this.state.signUp,
                [event.target.name]: event.target.value
            }
        });
    }
    onSignUp = () => {
        if (this.handleValidation()) {
            // console.log(this.state.signUp);
            this.postUser(this.state.signUp);
        }
        else {
            console.log('validation not passed..');
        }
    }
    handleValidation() {
        let userName = this.state.signUp.userName;
        let emailId = this.state.signUp.emailId;
        let password = this.state.signUp.password;
        let tempErrors = {}
        let formValid = true;
        if (!userName) {
            formValid = false;
            tempErrors['userName'] = 'Name cannot be empty';
        }
        if (!emailId) {
            formValid = false;
            tempErrors['emailId'] = 'Email cannot be empty';
        }
        if (!password) {
            formValid = false;
            tempErrors['password'] = 'Password cannot be empty';
        }

        this.setState({
            errors: tempErrors
        });
        return formValid;
    }
    async postUser(signUp) {
        // let exe = {
        //     name: signUp.name,
        //     user: {
        //         userName: signUp.userName,
        //         emailId: signUp.emailId,
        //         userrole: signUp.userrole,
        //         password: signUp.password,  
        //     }
        // }    
        try {
            const response = axios.post("http://localhost:8585/api/user/sign-up", signUp);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
            this.setState({
                msg: "Signed Up"
            })
            this.props.addSignUp(data);
        } catch (error) {
            // console.log(error.response.data.msg)
            this.setState({
                msg: ' '
            })
        }
    }
}
function mapStateToProps(state) {
    return {
        signupList: state.signUp
    }
}

export default connect(mapStateToProps, { addSignUp })(SignUp);