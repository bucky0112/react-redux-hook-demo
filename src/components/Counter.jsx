import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

const Counter = () => {
  const counter = useSelector((state) => state.counter)
  const dispatch = useDispatch()

  const handlePlusNum = () => {
    dispatch({ type: 'plus' })
  }

  const handleMinusNum = () => {
    dispatch({ type: 'minus' })
  }

  const handlePlus20Num = () => {
    dispatch({ type: 'increase', amount: + 20 })
  }

  const handleMinus20Num = () => {
    dispatch({ type: 'increase', amount: - 20 })
  }

  const handleToggleCount = () => {
    dispatch({ type: 'toggle' })
  }

  return (
    <div>
      <button type='button' onClick={handlePlusNum}>
        +1
      </button>
      <button type='button' onClick={handlePlus20Num}>
        + 20
      </button>
      <button type='button' onClick={handleMinus20Num}>
        - 20
      </button>
      <button type='button' onClick={handleMinusNum}>
        -1
      </button>
      <button type='button' onClick={handleToggleCount}>
        Show Count Toggle
      </button>
    </div>
  )
}

export default Counter
