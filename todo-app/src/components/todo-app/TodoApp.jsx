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
                <Route path="/welcome/:name" exact component={Welcome} />
                <Route path="/logout" component={LogoutComponent} />
                <Route path="/todo" exact component={TodoList} />
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
            Authentication.regeisterSuccess(this.state.username,this.state.password)
            this.setState({
                showSuccessMessage: true,
                invalidCredential:false
            })
            this.props.history.push(`/welcome/${this.state.username}`)
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

