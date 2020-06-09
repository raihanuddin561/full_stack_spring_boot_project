import axios from "axios"

class TodoService{
    getTodoList(username){
        return axios.get(`http://localhost:8080/get/${username}/todos`)
    }
    deleteTodoList(username,id){
        return axios.delete(`http://localhost:8080/delete/${username}/todos/${id}`)
    }
}
export default new TodoService()