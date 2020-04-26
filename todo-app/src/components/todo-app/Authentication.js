class Authentication{
    regeisterSuccess(name,password){
        console.log("login success with session storage")
        sessionStorage.setItem("authenticationUser",name)
    }
}
export default new Authentication()