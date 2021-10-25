import React from 'react'

export default function Signup() {
    return (
      <div>
        <h1>SIGNUP FORM</h1>

        <label for="firstname">FIRSTNAME</label>
        <input type="text" id="firstname" />
        <br />
        <label for="lastname">LASTNAME</label>
        <input type="text" id="lastname" />
        <br />
        <label for="emailid">EMAIl</label>
        <input type="text" id="emailid" />
        <br />
        <label for="password">PASSWORD</label>
        <input type="password" id="password" />
        <br />
      </div>
    );
}
