import React,{createContext,useState}from "react";

export const AuthContext=createContext()

export function AuthContextProvider({children}){

    const[isAuth,setIsAuth]=useState(false)

    const handleLoginAuth = (emailid, password) => {
      if (emailid === "abc@gmail.com" && password === "abc123") {
        setIsAuth(true);
        alert("Login SuccessFul");
      } else {
        alert("Login Fail, Please try again");
      }
    };

    const value={isAuth,setIsAuth,handleLoginAuth}

    return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>

}