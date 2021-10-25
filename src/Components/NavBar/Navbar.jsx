import React, {useContext} from 'react'
import styled from "styled-components"
import {NavLink} from "react-router-dom"
import { AuthContext } from '../AuthContext/AuthContext'

const NAVBAR = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 10px;
  background-color: #f50057;

  .navbar-text {
    cursor: pointer;
    color: #fff;
    font-size: 22px;
    text-decoration: none;
  }

  button {
    cursor: pointer;
    color: #fff;
    font-size: 22px;
    background-color:transparent;
    border: none;
  }
`;

export default function Navbar() {

    const {isAuth,setIsAuth}=useContext(AuthContext)

    const handleLogout=(e)=>{
        setIsAuth(!isAuth)
    }
    return (
      <div>
        <NAVBAR>
          <NavLink to="/" className="navbar-text">
            URAAN
          </NavLink>
          <NavLink to="/survey" className="navbar-text">
            SURVEY
          </NavLink>
          <NavLink to="/signup" className="navbar-text">
            SINGUP
          </NavLink>
          <NavLink to="/login" className="navbar-text">
            {!isAuth ? (
              <button>LOGIN</button>
            ) : (
              <button onClick={handleLogout}>LOGOUT</button>
            )}
          </NavLink>
        </NAVBAR>
      </div>
    );
}
