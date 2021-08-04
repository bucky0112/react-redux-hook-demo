import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { counterActions } from '../store/counterSlice'

const Counter = () => {
  const counter = useSelector((state) => state.counter.counter)
  const dispatch = useDispatch()

  const handlePlusNum = () => {
    dispatch(counterActions.plus())
  }

  const handleMinusNum = () => {
    dispatch(counterActions.minus())
  }

  const handlePlus20Num = () => {
    dispatch(counterActions.increase(20))
  }

  const handleMinus20Num = () => {
    dispatch(counterActions.increase(-20))
  }

  const handleToggleCount = () => {
    dispatch(counterActions.toggleCounter())
  }

  return (
    <div>
      <button
        type='button'
        onClick={handlePlusNum}
        className='btn btn-light mx-1'
      >
        +1
      </button>
      <button
        type='button'
        onClick={handlePlus20Num}
        className='btn btn-light mx-1'
      >
        + 20
      </button>
      <button
        type='button'
        onClick={handleMinus20Num}
        className='btn btn-light mx-1'
      >
        - 20
      </button>
      <button
        type='button'
        onClick={handleMinusNum}
        className='btn btn-light mx-1'
      >
        -1
      </button>
      <button
        type='button'
        onClick={handleToggleCount}
        className='btn btn-warning mx-1'
      >
        Show Count Toggle
      </button>
    </div>
  )
}

export default Counter
