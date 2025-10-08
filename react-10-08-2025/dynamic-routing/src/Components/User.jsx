import React from 'react'
import { Link } from 'react-router-dom'

const User = () => {
    
    const users = [
        {id: 1, name: "Sumair"},
        {id: 2, name: "Umer"},
        {id: 3, name: "Owais"}
    ]
    console.log(users);
    
  return (
    <>
    <h1>User Page</h1>
    <ul>
        {users.map((user)=>(
            
            <li key={user.id}>
                <Link to={`/users/${user.id}`} data={users}>{user.name}</Link>
            </li>
        ))}
    </ul>
    </>
  )
}

export default User
