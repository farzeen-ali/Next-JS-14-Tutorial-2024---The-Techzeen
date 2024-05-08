'use client';

import { useState } from "react";

const Register = () => {
    const [username, setUserName] = useState("");
    const [age, setAge] = useState("");
    const registerUser = async () => {
        // console.log(username,age)
        let data = await fetch('http://localhost:3000/api/users', {
            method: 'Post',
            body: JSON.stringify({username,age})
        })
        data = await data.json();
        console.log(data)
    }
  return (
    <>
     <h2>Register Users</h2>
     <input type='text' value={username} placeholder='Enter Your Name' onChange={(e) => setUserName(e.target.value)} /> <br /><br />
     <input type='text' value={age} placeholder='Enter Your Age' onChange={(e) => setAge(e.target.value)} /> <br /><br />
     <button onClick={registerUser}>Register User</button>
    </>
  );
}

export default Register;
