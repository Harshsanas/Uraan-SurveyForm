import React from 'react'
import styled from "styled-components"

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

export default function Survey() {
    return (
      <div>
        <FORMDATA>
          <form action="">
            <p htmlFor="firstname">FIRST NAME</p>
            <input type="text" />
            <br />
            <p htmlFor="lastname">LAST NAME</p>
            <input type="text" />
            <br />
            <p htmlFor="mobile">MOBILE NO</p>
            <input type="text" />
            <br />
            <p htmlFor="emailid">EMAIL ID</p>
            <input type="text" />
            <br />
            <p htmlFor="portfolio">PROTFOLIO</p>
            <input type="text" />
            <br />
            <p htmlFor="occupation">OCCUPATION</p>
            <input type="text" />
            <br />
            <button>ADD</button>
          </form>
        </FORMDATA>
      </div>
    );
}
