import axios from "axios";
import { Component } from "react";

export default class Airline  extends Component{

    constructor(){
        super();

        this.state={
                airline: {
                    name: '',
                    code: ''
                    
                },
                errors: {},
                msg: ''
        }
    }

    componentDidMount(){}

    render(){
        return(
            <div>
                <h1>Airline</h1>
                <span>{this.state.msg}</span> <br />
                <label>Enter the AirlineName: </label>
                <input type="name" 
                        name="name"
                        value={this.state.airline.name}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['name']}</span>
                <br /><br />
                <label>Enter the AirlineCode: </label>
                <input type="text" 
                        name="code"
                        value={this.state.airline.code}
                        onChange={this.changeHandler} />
                        <span style={{ color : 'red'}}>{this.state.errors['code']}</span>
                <br /><br />
                
                <button onClick={this.onPost}>Submit</button>
            </div>
        );
    }
    changeHandler= (event) =>{
        this.setState({
            airline: {
                ...this.state.airline, 
                [event.target.name] : event.target.value
            }
        });
    }

    onSubmit = ()=>{
        /* Validate User inputs */
        if(this.handleValidation()){
            console.log(this.state.airline);
            /* Call the API */
           this.postAirline(this.state.airline);
        }
        else{
            /* Display error messages */
            console.log('validation not passed..');
             
        }
        
    }

    handleValidation(){
        let name = this.state.airline.name;
        let code = this.state.airline.code; 
       
        let tempErrors={}
        let formValid = true; 
        if(!name){ //If name is not given
            formValid = false;
            tempErrors['name']='Name cannot be empty';
        }
        if(!code){ //If email is not given
            formValid = false;
            tempErrors['code']='Code cannot be empty';
        }
        

        this.setState({
            errors: tempErrors
        });

        return formValid; 
    }
    async postAirline(airline){
        try {
            const response = axios.post("http://localhost:8585/api/airline/add", airline);
            const data = (await response).data;
            console.log('API success');
            console.log(data);
          } catch (error) {
            console.error(error.response.data.msg);
            this.setState({
                msg: error.response.data.msg
            })
          }
    }
}