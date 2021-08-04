import { createSlice } from '@reduxjs/toolkit'

const initialCounterState = {
  counter: 0,
  showCounter: true
}

const counterSlice = createSlice({
  name: 'counter',
  initialState: initialCounterState,
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

export const counterActions = counterSlice.actions
export default counterSlice
