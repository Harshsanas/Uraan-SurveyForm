import React, {useContext, useState} from 'react'
import { Redirect } from 'react-router'
import {AuthContext} from "../AuthContext/AuthContext"
import styled from "styled-components";

const FORMDATA = styled.div`
  margin: 50px 20px;
  input {
    border-radius: 4px;
    cursor: pointer;
    border: 1px solid grey;
    height: 25px;
    width: 25vw;
  }
  button {
    width: 120px;
    height: 35px;
    border-radius: 4px;
    border: 1px solid grey;
    cursor: pointer;
    margin: 10px 0px 20px 0px;
    font-size: 18px;
  }
  button:hover {
    color: grey;
    background-color: black;
  }
`;


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
        <FORMDATA>
          <p>EMAIL ID</p><br />
          <input
            type="text"
            value={emailid}
            onChange={(e) => setEmailid(e.target.value)}
          />
          <br />
          <br />

          <p>PASSWORD</p><br />
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />

          <br />
          <br />
          <button onClick={handleLogin}>{isAuth ? "LOGOUT" : "LOGIN"}</button>
        </FORMDATA>
      </div>
    ) : (
      <Redirect to="/" />
    );
}
