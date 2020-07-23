import axios from "axios"

import {api_url} from "../../Constants"
class TodoService{
    getTodoList(username){
        
        return axios.get(`${api_url}/get/${username}/todos`)
        
    }
    deleteTodoList(username,id){
        return axios.delete(`${api_url}/delete/${username}/todos/${id}`)
    }

    getTodoById(username,id){
        return axios.get(`${api_url}/get/${username}/todos/${id}`)
    }
    updateTodoById(username,id,todos){
         
        return axios.put(`${api_url}/update/${username}/todos/${id}`,todos)
    }

    postTodo(username,todos){
        return axios.post(`${api_url}/update/${username}/todos/`,todos)
    }
}
export default new TodoService()