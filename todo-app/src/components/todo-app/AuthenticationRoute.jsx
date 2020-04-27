import React, { Component } from "react";
import Authentication from "./Authentication";
import {Route,Redirect} from "react-router-dom"
class AuthenticationRoute extends Component{
    render(){
        if(Authentication.isLoggedIn()){
            return <Route {...this.props}/>
        }
        else{
           return <Redirect path="/login" />
        }
    }
}

export default AuthenticationRoute