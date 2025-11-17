import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../features/authSlice'

const Profile = () => {
    const dispatch = useDispatch()
    const { user, token } = useSelector((state)=> state.auth)
    if(!token) return <h3>you are not login</h3>
  return (
    <div>
      <h1>{user.name}</h1>
      <h2>{user.email}</h2>
      <button onClick={()=> dispatch(logout())}>
        logOut
      </button>
    </div>
  )
}

export default Profile
