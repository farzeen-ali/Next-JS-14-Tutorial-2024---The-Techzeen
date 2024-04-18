"use client";
import { useEffect, useState } from "react";

const Users = () => {
    const [users, setUsers] = useState([]);
    useEffect(()=> {
        async function getUsers () {
            const usersData = await fetch('https://jsonplaceholder.typicode.com/users')
            setUsers(await usersData.json())
        }
        getUsers();
    }, [])
  return (
    <>
     <h2>Users List | Fetch Data With API</h2>
     {
        users.map((user) => <li key={user.id}>{user.username}</li>)
     }
    </>
  );
}

export default Users;
