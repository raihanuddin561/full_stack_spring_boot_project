import React,{Component} from "react"


class TodoList extends Component {
    constructor(props){
        super(props)
        this.state = {
            todos:[
                {id:1,description:"react app",done:false,targetDate:new Date()},
                {id:2,description:"Web design",done:false,targetDate:new Date()},
                {id:3,description:"Java app",done:false,targetDate:new Date()},
            ]
        }
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