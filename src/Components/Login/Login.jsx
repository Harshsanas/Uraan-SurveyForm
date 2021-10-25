import React, {useContext, useState} from 'react'
import { Redirect } from 'react-router'
import {AuthContext} from "../AuthContext/AuthContext"


export default function Login() {
    const { isAuth, handleLoginAuth } = useContext(AuthContext);

    const[emailid,setEmailid] =useState("")

    const [password,setPassword] = useState("")

    const handleLogin =()=>{
        handleLoginAuth(emailid, password)
    }
    console.log(handleLoginAuth)
    return !isAuth ? (
      <div>
        <label htmlFor="emailid">EMAIL ID</label>
        <input
          type="text"
          value={emailid}
          onChange={(e) => setEmailid(e.target.value)}
        />
        <br />
        <br />

        <label htmlFor="password">PASSWORD</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <br />
        <br />
        <button onClick={handleLogin}>{isAuth ? "LOGOUT" : "LOGIN"}</button>
      </div>
    ) : (
      <Redirect to="/" />
    );
}
