import React from 'react'
import { useSelector } from 'react-redux'
import './App.css'
import Counter from './components/Counter'
import Header from './components/Header'
import Auth from './components/Auth'

function App() {
  const countNum = useSelector((state) => state.counter.counter)
  const showCounter = useSelector((state) => state.counter.showCounter)
  const isAuth = useSelector((state) => state.auth.isAuthenticated)

  return (
    <>
      <Header />
      <div className='App'>
        {!isAuth ? <Auth /> : <h2>Login Success</h2>}
        <Counter />
        {showCounter && <p>count is: {countNum}</p>}
      </div>
    </>
  )
}

export default App
