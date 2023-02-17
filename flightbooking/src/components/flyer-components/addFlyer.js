import axios from "axios";
import { Component } from "react";
import { connect } from "react-redux";
import { addFlyer } from "../../store/action/flyer";
export class AddFlyer extends Component{

    constructor(props){
        super(props);

        this.state = {
            flyer:{
                firstName:'',
                lastName:'',
                middleName:'',
                email:'',
                phone:'',
                username:'',
                password:'',
                role:'FLYER'
             },
             errors:{},
             msg:'',


        };
        
        
    }
    componentDidMount(){
        
    }  

    render(){
        return(
            <div>
            <div className="card">
              <h5 className="card-header">Add Flyer</h5>
              <div className="card-body">
                <h5 className="card-title">Enter Flyer Info: </h5>
                <p className="card-text">
                <span>{this.state.msg}</span> <br />
                <label>Enter the firstName: </label>
                <input type="text" 
                        name="firstName"
                        value={this.state.flyer.firstName}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['firstName']}</span>
                <br /><br />
                <label>Enter the lastName: </label>
                <input type="text" 
                        name="lastName"
                        value={this.state.flyer.lastName}
                        onChange={this.changeHandler} />
                         <span style={{ color : 'red'}}>{this.state.errors['lastName']}</span>
                <br /><br />
                <label>Enter the middleName: </label>
                <input type="text" 
                        name="middleName"
                        value={this.state.flyer.middleName}
                        onChange={this.changeHandler} />
                <br /><br />
                <label>Enter Email: </label>
                <input type="text" 
                        name="email"
                        value={this.state.flyer.email}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['email']}</span>
                <br /><br />
                <label>Enter the Phone: </label>
                <input type="text" 
                        name="phone"
                        value={this.state.flyer.phone}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['phone']}</span>
                <br /><br />
                <label>Enter the username: </label>
                <input type="text" 
                        name="username"
                        value={this.state.flyer.username}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['username']}</span>
                <br /><br />
                <label>Enter password: </label>
                <input type="password" 
                        name="password"
                        value={this.state.flyer.password}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['password']}</span>
                <br /><br />
                    <button onClick={this.onAdd} className="btn btn-primary">Add Flyer</button>
                </p>
                 
              </div>
            </div>
          </div>
        );
    }


  changeHandler= (event) =>{
    this.setState({
        flyer:{
            ...this.state.flyer,
            [event.target.name] : event.target.value
        }
    });
}
 onAdd = ()=>{
    /* Validate Flyer inputs */
    if(this.handleValidation()){
        console.log(this.state.flyer);
        /* Call the API */
       this.postFlyer(this.state.flyer);
    }
    else{
        /* Display error messages */
        console.log('validation not passed..');     
    }
}

 handleValidation() {
    let firstName = this.state.flyer.firstName;
    let lastName = this.state.flyer.lastName;
    let email = this.state.flyer.email; 
    let phone = this.state.flyer.phone;
    let username = this.state.flyer.username;
    let password = this.state.flyer.password; 
    let tempErrors={}
    let formValid = true; 
    if(!firstName){ //If firstname is not given
        formValid = false;
        tempErrors['firstName']='firstName cannot be empty';
    }
    if(!lastName){ //If lastname is not given
        formValid = false;
        tempErrors['lastName']='lastName cannot be empty';
    }
   
    if(!email){ //If email is not given
        formValid = false;
        tempErrors['email']='Email cannot be empty';
    }
    if(!phone){ //If name is not given
        formValid = false;
        tempErrors['phone']='Phone cannot be empty';
    }
    if(!username){ //If name is not given
        formValid = false;
        tempErrors['username']='username cannot be empty';
    }
    if(!password){ //If password is not given
        formValid = false;
        tempErrors['password']='Password cannot be empty';
    }

    this.setState({
        errors: tempErrors
    });

    return formValid; 
   }
 async postFlyer(e){
    let fly = {
       firstName: e.firstName,
       lastName: e.lastName,
       middleName: e.middleName,
       email: e.email,
       phone: e.phone,
        user: {
            username: e.username,
            password: e.password,
            role: 'FLYER'
        }       
    }
    try {
        const response = axios.post("http://localhost:8585/api/flyer/add",fly);
        const data = (await response).data;
        console.log('API success');
        console.log(data);
        this.setState({
            msg: "Flyer Registered"
        })
        this.props.addFlyer(data);
        } catch (error) {
            this.setState({
                msg: 'Operation Failed'
            })
        }
}
}
function mapStateToProps(state){
    return {
       addFlyer:state.flyer
    }    
}

export default connect(mapStateToProps, {addFlyer})(AddFlyer); 