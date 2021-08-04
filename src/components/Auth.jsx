import React from 'react'
import { useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice'

const Auth = () => {
  const dispatch = useDispatch()

  const handleLogin = (e) => {
    e.preventDefault()    
    dispatch(authActions.login())
  }

  return (
    <div className='bg-info p-5 rounded text-dark'>
      <form className='mb-5' onSubmit={handleLogin}>
        <div className='mb-3'>
          <label htmlFor='inputEmail' className='form-label'>
            Email address
          </label>
          <input type='email' className='form-control' id='inputEmail' />
        </div>
        <div className='mb-3'>
          <label htmlFor='inputPassword' className='form-label'>
            Password
          </label>
          <input type='password' className='form-control' id='inputPassword' />
        </div>
        <button type='submit' className='btn btn-primary'>
          Login
        </button>
      </form>
    </div>
  )
}

export default Auth
