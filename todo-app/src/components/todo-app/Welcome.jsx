import React,{Component} from "react"
import {Link} from "react-router-dom"
import HelloWorldService from "../../api/todo/HelloWorldService.js"

class Welcome extends Component{
    constructor(props){
        super(props)
        this.retrieveMessage = this.retrieveMessage.bind(this)
        this.handleSuccessfullRespone = this.handleSuccessfullRespone.bind(this)
        this.handleError = this.handleError.bind(this)
        this.state = {
            message: ''
        }
    }
    render(){
        return (
            <>
                <div className="container">
                    <h1>Welcome {this.props.match.params.name}!</h1>
                    <p>You can go to you todo from <Link to="/todo">Here</Link></p>
                </div>
                <div className="container">
                   
                    <p>Get Welcome Message</p>
                    <button onClick={this.retrieveMessage} className="btn btn-success">Get Message</button>
                </div>
                <div className="container">
                   {this.state.message}
                </div>
                
               
            </>
        )
    }

    retrieveMessage(){
        //console.log("retrieve message")
        HelloWorldService.helloWorldPathVariableService(this.props.match.params.name)
        .then(response=>this.handleSuccessfullRespone(response))
        .catch(error=> this.handleError(error))
    }

    handleSuccessfullRespone(response){
        this.setState({message:response.data.message})
    }

    handleError(error){
        let errorMessage = ''
        if(error.message){
            errorMessage += error.message
        }
        if(error.response && error.response.data.message){
            errorMessage += error.response.data.message
        }
        this.setState({message:errorMessage})
    }
}

export default Welcome