import axios from "axios"

class TodoService{
    getTodoList(username){
        return axios.get(`http://localhost:8080/get/${username}/todos`)
    }
}
export default new TodoService()