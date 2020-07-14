import axios from "axios"
class Authentication{


    basicAuth(username,password){
      return  axios.get("http://localhost:8080/basicauth",{headers:{authorization:this.createAuthToken(username,password)}})
    }
    createAuthToken(username,password){
        return "basic "+window.btoa(username+":"+password)
    }
    regeisterSuccess(username,password){
       
        console.log("login success with session storage")
        sessionStorage.setItem("authenticationUser",username)
        this.setInterceptorConfig(this.createAuthToken(username,password))
    }
    logout(){
        sessionStorage.removeItem("authenticationUser")
    }
    isLoggedIn(){
        if(sessionStorage.getItem("authenticationUser")!=null){
            return true
        }
        return false
    }
    getLoggedIn(){
        let username = sessionStorage.getItem("authenticationUser");
        if(username!=null){
            return username
        }
        return ""
    }

    setInterceptorConfig(auth){
        
        axios.interceptors.request.use(
            (config)=>{
                if(this.isLoggedIn()){
                    config.headers.authorization = auth
                }
                return config
            }
        )
    }
}
export default new Authentication()