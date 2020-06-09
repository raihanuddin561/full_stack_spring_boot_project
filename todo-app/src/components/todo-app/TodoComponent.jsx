import React,{Component} from "react"

class TodoComponent extends Component{
    render(){
        return <div>
            <h3>Todo Component for ID: {this.props.match.params.id}</h3>
        </div>
    }
}

export default TodoComponent