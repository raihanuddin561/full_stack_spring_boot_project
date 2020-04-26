import React,{Component} from "react"
import {Link} from "react-router-dom"

class LogoutComponent extends Component{
    render(){
        return (
            <>
                <h1>You have successfully logged out</h1>
                <div>Thank you for using our site</div>
            </>
        )
    }
}

export default LogoutComponent