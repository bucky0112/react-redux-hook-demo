import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { authActions } from '../store/authSlice'

const Header = () => {
  const isAuth = useSelector((state) => state.auth.isAuthenticated)
  const dispatch = useDispatch()

  const handleLogout = (e) => {
    e.preventDefault()
    dispatch(authActions.logout())
  }

  return (
    <ul className='nav justify-content-end'>
      <li className='nav-item'>
        <a className='nav-link active' aria-current='page' href='#'>
          Home
        </a>
      </li>
      {isAuth && (
        <>
          <li className='nav-item'>
            <a className='nav-link active' aria-current='page' href='#'>
              Profile
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#'>
              Setting
            </a>
          </li>
          <li className='nav-item'>
            <a className='nav-link' href='#' onClick={handleLogout}>
              Logout
            </a>
          </li>
        </>
      )}
    </ul>
  )
}

export default Header
