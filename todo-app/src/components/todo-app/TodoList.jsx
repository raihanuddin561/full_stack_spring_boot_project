import React,{Component} from "react"


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[
                {id:1,description:"react app"},
                {id:2,description:"Web design"},
                {id:3,description:"Java app"},
            ]
        }
    }
    render(){
        return (
            <div className="todoList">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Description</th>
                        </tr>
                    </thead>
                    <tbody>
                       { 
                        this.state.todos.map(
                            todo=>
                            <tr>
                            <td>{todo.id}</td>
                        <td>{todo.description}</td>
                        </tr>
                        )
                        }
                    </tbody>
                </table>
            </div>
        )
    }
}
export default TodoList