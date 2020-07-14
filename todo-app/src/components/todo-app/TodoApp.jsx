import React,{Component} from 'react'
import {BrowserRouter as Router,Route,Switch} from "react-router-dom"
import Welcome from "./Welcome"
import WelcomeTo from "./WelcomeTo"
import Header from "./HeaderComponent"
import Footer from "./FooterComponent"
import "./TodoApp.css"
import TodoList from './TodoList'
import LogoutComponent from "./LogoutComponent"
import Authentication from "./Authentication.js"
import AuthenticationRoute from "./AuthenticationRoute"
import TodoComponent from './TodoComponent'
class TodoApp extends Component{
    render(){
        return (
            <div>
            <Router>
               
               <>
               <Header/>
               <Switch>
                <Route path="/" exact component={LoginComponent} />
                <Route path="/login" exact component={LoginComponent} />
                <AuthenticationRoute path="/welcome/:name" exact component={Welcome} />
                <AuthenticationRoute path="/logout" component={LogoutComponent}/>
                <AuthenticationRoute path="/todo/:id" exact component={TodoComponent} />
                <AuthenticationRoute path="/todo" exact component={TodoList} />
                <Route component = {ErrorComponent}/>
                </Switch>
                <Footer/>
               </>
               
            </Router>  
            </div>    
              
        )
    }
}

export default TodoApp


class LoginComponent extends Component{
    constructor(props){
        super(props)
        this.state = {
            username: "raihan",
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
       
        Authentication.basicAuth(this.state.username,this.state.password)
        .then(()=>{
            Authentication.regeisterSuccess(this.state.username,this.state.password)
          
            this.props.history.push(`/welcome/${this.state.username}`)
        }).catch(()=>{
            this.setState({
                showSuccessMessage: false,
                invalidCredential: true
            })
        });
        console.log(this.state.loginSuccess)
    }
    render(){
        return (
            <>
              <h1>Login</h1>
              <div className="container">
                {this.state.invalidCredential && <div className="alert alert-warning">Invalid credential</div>}
               
                User Name: <input className="form-control" type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                Password: <input className="form-control" type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
                </div>
            </>
        )
    }
}

function ErrorComponent(){
    return <div>Something wrong</div>
}

