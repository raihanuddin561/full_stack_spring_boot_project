import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Welcome from "./Welcome"
import WelcomeTo from "./WelcomeTo"
import Raihan from "./Raihan"
import "./TodoApp.css"
class TodoApp extends Component{
    render(){
        return (
            <Router>
                <div>
                <Switch>
                <Route path="/" exact component={LoginComponent} />
                <Route path="/welcome" component={Welcome} />
                <Route path="/wel" component={WelcomeTo} />
                <Route path="/rai" component={Raihan} />
                </Switch>
                </div>
            </Router>
             
              
                
              
        )
    }
}

export default TodoApp


class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "raihanuddin",
            password:"",
            invalidCredential:false,
            showSuccessMessage: false
            
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    loginClicked(){
        if(this.state.username==="raihanuddin" && this.state.password==="dummy"){
            this.setState({
                showSuccessMessage: true,
                invalidCredential:false
            })
        }else{
           
            this.setState({
                showSuccessMessage: false,
                invalidCredential: true
            })
        }
        console.log(this.state.loginSuccess)
    }
    render(){
        return (
            <div>
               
                {this.state.invalidCredential && <div>Invalid credential</div>}
                {this.state.showSuccessMessage && <div>Login Success</div>}
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <button onClick={this.loginClicked}>Login</button>
            </div>
        )
    }
}

