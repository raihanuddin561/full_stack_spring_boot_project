import React,{Component} from "react"
import {Link} from "react-router-dom"

class Welcome extends Component{
    render(){
        return (
            <>
                <div className="container">
                    <h1>Welcome {this.props.match.params.name}!</h1>
                    <p>You can go to you todo from <Link to="/todo">Here</Link></p>
                </div>
               
            </>
        )
    }
}

export default Welcome