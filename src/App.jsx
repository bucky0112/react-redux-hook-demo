import React from 'react'
import { useSelector } from 'react-redux'
import logo from './logo.svg'
import './App.css'
import Counter from './components/Counter'

function App () {
  const countNum = useSelector((state) => state.counter)
  const showCounter = useSelector((state) => state.showCounter)
  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <p>Hello Vite + React!</p>
        <Counter />
        {showCounter && <p>count is: {countNum}</p>}
      </header>
    </div>
  )
}

export default App
