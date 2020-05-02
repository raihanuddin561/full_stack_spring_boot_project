import axios from "axios"

class HelloWorldService{
    helloWorldService(){
        console.log("Hellow world service")
        return axios.get("http://localhost:8080/hello-world")
    }
    helloWorldBeanService(){
        return axios.get("http://localhost:8080/hello-world-bean")
    }
    helloWorldPathVariableService(name){
        return axios.get(`http://localhost:8080/hello-world-bean/path-variable/${name}`)
    }
}
export default new HelloWorldService()