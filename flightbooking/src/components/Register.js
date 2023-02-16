import axios from "axios";
import { Component } from "react";

export default class SignIn extends Component{ 
    constructor(){
        super(); 
        this.state={
            "firstName": "", 
            "lastName": "",
            "middleName": "",
            "email": "",
            "phone": "",
            "user": {
                "username": "",
                "password": ""
            },
            errors: {},
            msg: ''
        } 
    }
    componentDidMount(){} 
    render(){
        return(
            <div>
            <h1>Registration</h1>
            <span>{this.state.msg}</span> <br />
            <label>Enter the firstName: </label>
            <input type="text"
            name="firstName" 
            value={this.state.user.name} 
            onChange={this.changeHandler} />
            <span style={{ color : 'red'}}>{this.state.errors['firstName']}</span>
            <br /><br /> 
            <label>Enter the lastName: </label>
            <input type="text"
            name="name"
            value={this.state.user.name} 
            onChange={this.changeHandler} />
            <br /><br /> 
            <label>Enter the middleName: </label> 
            <input type="text"
            name="name"
            value={this.state.user.name}
            onChange={this.changeHandler} />
            <br /><br /> 
            <label>Enter Email: </label> 
            <input type="text" 
            name="email"
            value={this.state.user.email}
            onChange={this.changeHandler} />
            <span style={{ color : 'red'}}>{this.state.errors['email']}</span>
            <br /><br />
            <label>Enter the Phone: </label> 
            <input type="text"
            name="phone"
            value={this.state.user.name}
            onChange={this.changeHandler} />
            <span style={{ color : 'red'}}>{this.state.errors['phone']}</span>
            <br /><br />
            <label>Enter the username: </label>
            <input type="text"
            name="name"
            value={this.state.user.name}
            onChange={this.changeHandler} />
            <span style={{ color : 'red'}}>{this.state.errors['username']}</span>
            <br /><br />
            <label>Enter password: </label>
            <input type="password"
            name="password"
            value={this.state.user.password}
            onChange={this.changeHandler} />
            <span style={{ color : 'red'}}>{this.state.errors['password']}</span>
            <br /><br />
            <button type="button" class="btn btn-primary" onClick={this.onSignUp}>Login</button>
            </div>
            );
        }
        changeHandler= (event) =>{ 
            this.setState({
                user: {
                    ...this.state.user,
                    [event.target.name] : event.target.value
                } 
            });
        }
        onSignUp = ()=>{ 
            /* Validate User inputs */
            if(this.handleValidation()){
                console.log(this.state.user);
                /* Call the API */
                this.postUser(this.state.user);
            }
            else{
                /* Display error messages */
                console.log('validation not passed..');
            }
        }
        handleValidation(){
            let firstName = this.state.user.firstName;
            let email = this.state.user.email;
            let phone = this.state.user.phone;
            let username = this.state.user.username;
            let password = this.state.user.password;
            let tempErrors={}
            let formValid = true;
            if(!firstName){ 
                //If name is not given            
                formValid = false;
                tempErrors['firstName']='firstName cannot be empty';
            }
            if(!email){ 
                //If email is not given            
                formValid = false;
                
                tempErrors['email']='Email cannot be empty';
            }
            if(!phone){ 
                //If name is not given            
                formValid = false; 
                tempErrors['phone']='Phone cannot be empty';
            } 
            if(!username){ 
                //If name is not given            
                formValid = false;
                tempErrors['username']='username cannot be empty';
            }
            if(!password){ 
                //If password is not given            
                formValid = false;
                tempErrors['password']='Password cannot be empty';
            }
            this.setState({
                errors: tempErrors
            });
            return formValid;
        }
        async postUser(person){
            try {
                const response = axios.post("http://localhost:8585/person/add", person); 
                const data = (await response).data;
                console.log('API success');
                console.log(data);
            } 
            catch (error) {
                console.error(error.response.data.msg); 
                this.setState({
                    msg: error.response.data.msg
                }) 
            }
        }}