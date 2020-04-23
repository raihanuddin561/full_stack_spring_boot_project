import React,{Component} from 'react'
import "./TodoApp.css"
class TodoApp extends Component{
    render(){
        return (
            <div>
                My Todo app
                <LoginComponent />
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
            password:""
        }
        this.handleChange = this.handleChange.bind(this)
    }
    handleChange(event){
        this.setState({
            [event.target.name]: event.target.value
        })
    }
    render(){
        return (
            <div>
                User Name: <input type="text" name="username" value={this.state.username} onChange={this.handleChange}/>
                <br/>
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange}/>
                <br/>
                <button>Login</button>
            </div>
        )
    }
}