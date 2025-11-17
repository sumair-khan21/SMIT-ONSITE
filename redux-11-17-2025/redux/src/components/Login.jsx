import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { loginFailure, loginStart, loginSuccess } from '../features/authSlice'
import { loginAPI } from '../services/authService'

const Login = () => {
    const dispatch = useDispatch()
    const loading = useSelector((state)=> state.auth.loading)
    const error = useSelector((state)=> state.auth.error)
    const [form, setForm] = useState({email: "", password: ""})

    const handleLogin = async (e)=>{
        e.preventDefault()
        dispatch(loginStart())
        try {
            const res = await loginAPI(form)
            dispatch(loginSuccess(res))
        } catch (error) {
            dispatch(loginFailure(error || "Login failed"))  
        }
    }
    
  return (
    <div>
      <form onSubmit={handleLogin}>
        <input 
          type="email" 
          value={form.email}  
          onChange={(e)=> setForm({ ...form, email: e.target.value})} 
          placeholder='email'
        />
        <input 
          type="password" 
          value={form.password} 
          onChange={(e)=> setForm({...form, password: e.target.value})}  
          placeholder='password'
        />
        {error && <p style={{color: 'red'}}>{error}</p>}

        <button type='submit' disabled={loading}>
            {loading ? "Signing in..." : "Sign In"}  
        </button>
      </form>
    </div>
  )
}

export default Login