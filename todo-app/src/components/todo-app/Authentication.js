class Authentication{
    regeisterSuccess(name,password){
        console.log("login success with session storage")
        sessionStorage.setItem("authenticationUser",name)
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
}
export default new Authentication()