import React from 'react'
import { useParams } from 'react-router-dom'

const UserDetail = () => {
    // console.log(data);
    
    const { id } = useParams()
    console.log(id);
    
  return (
    <>
    <h1>User detail</h1>
    <p>user ki id {id}</p>
    {/* <p>user ka name {data.name}</p> */}
    
    </>
  )
}

export default UserDetail
