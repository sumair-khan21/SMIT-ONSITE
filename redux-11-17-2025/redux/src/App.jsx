import React from 'react'
import { useSelector } from 'react-redux'
import Profile from './components/Profile'
import Login from './components/Login'
// import Todo from './components/Todo'

const App = () => {
  const token = useSelector((state)=> state.auth.token)
  return (
    <div>
      {/* <Todo /> */}
        <div>
          {token ? <Profile /> : <Login />}
        </div>
    </div>
  )
}

export default App
