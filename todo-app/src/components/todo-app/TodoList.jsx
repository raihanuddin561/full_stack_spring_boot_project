import React,{Component} from "react"
import Authentication from "./Authentication"
import TodoService from "../../api/todo/TodoService"


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[
                
            ]
        }
    }
    componentDidMount(){
        let username = Authentication.getLoggedIn()
        TodoService.getTodoList(username)
        .then(response=>{
            console.log("Username is: "+username)
            console.log(response)

            this.setState({
                todos: response.data
            })
        })
    }
    render(){
        return (
            <>
                <h1>Todo List</h1>
               <div className="container">
                <table className="table">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Description</th>
                                <th>Is Completed</th>
                                <th>Target date</th>
                            </tr>
                        </thead>
                        <tbody>
                        { 
                            this.state.todos.map(
                                todo=>
                                <tr key={todo.id}>
                                <td>{todo.id}</td>
                            <td>{todo.description}</td>
                            <td>{todo.done.toString()}</td>
                            <td>{todo.targetDate.toString()}</td>
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
               </div>
            </>
        )
    }
}
export default TodoList