import React,{Component} from "react"
import {Link} from "react-router-dom"

class HeaderComponent extends Component{
    render(){
        return (
            
            <header>

                <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <a className="navbar-brand" href="/">Todo App</a>
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" to="/welcome/raihan">Home <span className="sr-only">(current)</span></Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" to="/todo">Todos</Link>
                    </li>
                    
                    </ul>
                    <ul className="navbar-nav justify-content-end">
                
                <li className="nav-item">
                <Link className="nav-link" to="/login">Login</Link>
                </li>
                <li className="nav-item">
                    <Link className="nav-link" to="/logout">Logout</Link>
                </li>
                
                </ul>
                    
                </div>
                </nav>
          
            </header>
              
        )
    }
}

export default HeaderComponent