import axios from "axios"

class TodoService{
    getTodoList(username){
        username = "raihan"
        let password = "dummy"
        let auth = "basic "+window.btoa(username+":"+password)
        return axios.get(`http://localhost:8080/get/${username}/todos`,{
            headers:{
                authorization: auth
            }
        })
        
    }
    deleteTodoList(username,id){
        return axios.delete(`http://localhost:8080/delete/${username}/todos/${id}`)
    }

    getTodoById(username,id){
        return axios.get(`http://localhost:8080/get/${username}/todos/${id}`)
    }
    updateTodoById(username,id,todos){
         
        return axios.put(`http://localhost:8080/update/${username}/todos/${id}`,todos)
    }

    postTodo(username,todos){
        return axios.post(`http://localhost:8080/update/${username}/todos/`,todos)
    }
}
export default new TodoService()