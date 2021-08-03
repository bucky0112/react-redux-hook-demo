// import { createStore } from 'redux'
import { createSlice, configureStore } from '@reduxjs/toolkit'

const initialState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState,
  reducers: {
    plus(state) {
      state.counter++
    },
    increase(state, action) {
      state.counter = state.counter + action.payload
    },
    minus(state) {
      state.counter--
    },
    toggleCounter(state) {
      state.showCounter = !state.showCounter
    }
  }
})

/* const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter
      }
    case 'increase':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter
      }
    case 'minus':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter
      }
    case 'toggle':
      return {
        counter: state.counter,
        showCounter: !state.showCounter
      }
    default:
      return state
  }
} */

const store = configureStore({ reducer: counterSlice.reducer })

export const counterActions = counterSlice.actions

export default store
