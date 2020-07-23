import React,{Component} from "react"
import Authentication from "./Authentication"
import TodoService from "../../api/todo/TodoService"
import moment from "moment"


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[],
            message: null
        }
        this.refreshTodos = this.refreshTodos.bind(this)
        this.deleteTodo = this.deleteTodo.bind(this)
        this.updateTodo = this.updateTodo.bind(this)
        this.addTodo = this.addTodo.bind(this)
    }
    componentDidMount(){
        this.refreshTodos()
    }

    refreshTodos(){
        let username = Authentication.getLoggedIn()
        TodoService.getTodoList(username)
        .then(response=>{
            console.log("Username is: "+username)
            console.log(response)

            this.setState({
                todos: response.data
            })
        })
        .catch(

            ()=>{
                let token = Authentication.getToken();
           let newToken= Authentication.refreshAuth(token)
            Authentication.refreshing(newToken)
            }
        )
       
    }
    deleteTodo(id){
        let username = Authentication.getLoggedIn()
        TodoService.deleteTodoList(username,id)
        .then(response=>{
            this.setState({
                message: "Successfully deleted ID : "+id
            })
            this.refreshTodos()
        })
    }
    addTodo(){
        
        this.props.history.push(`/todo/-1`)
    }
    updateTodo(id){
        console.log(`update id ${id}`)
        this.props.history.push(`/todo/${id}`)
        // let username = Authentication.getLoggedIn()
        // TodoService.deleteTodoList(username,id)
        // .then(response=>{
        //     this.setState({
        //         message: "Successfully deleted ID : "+id
        //     })
        //     this.refreshTodos()
        // })
    }
    render(){
        return (
            <>
                <h1>Todo List</h1>
        {this.state.message && <div className="alert alert-warning">{this.state.message}</div>}
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
                            <td>{moment(todo.targetDate).format("YYYY-DD-MM")}</td>
                            <td><button className="btn btn-success" onClick={()=>this.updateTodo(todo.id)}>Update</button></td>
                            <td><button className="btn btn-danger" onClick={()=>this.deleteTodo(todo.id)}>Delete</button></td>
                            
                            </tr>
                            )
                            }
                        </tbody>
                    </table>
                    <button className="btn btn-success" onClick={()=>this.addTodo()}>Add</button>
               </div>
            </>
        )
    }
}
export default TodoList