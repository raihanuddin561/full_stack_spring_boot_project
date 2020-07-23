import axios from "axios"
import {api_url} from "../../Constants"
export const USER_NAME_SESSION_STORAGE = "authenticationUser"
class Authentication{


    basicAuth(username,password){
      return  axios.get(`${api_url}/basicauth`,{headers:{authorization:this.createAuthToken(username,password)}})
    }

    jwtAuth(username,password){
        return  axios.post(`${api_url}/authenticate`,{
            username,
            password
        })
      }
    createAuthToken(username,password){
        return "basic "+window.btoa(username+":"+password)
    }
    createAuthTokenForJwt(token){
        return "Bearer "+token
    }
    regeisterSuccess(username,password){
       
        console.log("login success with session storage")
        sessionStorage.setItem(USER_NAME_SESSION_STORAGE,username)
        this.setInterceptorConfig(this.createAuthToken(username,password))
    }
    regeisterSuccessForJwt(username,token){
       
        console.log("login success with session storage")
        sessionStorage.setItem(USER_NAME_SESSION_STORAGE,username)
        this.setInterceptorConfig(this.createAuthTokenForJwt(token))
    }
    logout(){
        sessionStorage.removeItem(USER_NAME_SESSION_STORAGE)
    }
    isLoggedIn(){
        if(sessionStorage.getItem(USER_NAME_SESSION_STORAGE)!=null){
            return true
        }
        return false
    }
    getLoggedIn(){
        let username = sessionStorage.getItem(USER_NAME_SESSION_STORAGE);
        if(username!=null){
            return username
        }
        return ""
    }

    setInterceptorConfig(token){
        
        axios.interceptors.request.use(
            (config)=>{
                if(this.isLoggedIn()){
                    config.headers.authorization = token
                }
                return config
            }
        )
    }
}
export default new Authentication()