import { createStore } from 'redux'

const initialState = {
  counter: 0,
  showCounter: true
}

const counterReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'plus':
      return {
        counter: state.counter + 1,
        showCounter: state.showCounter
      }
      break
    case 'increase':
      return {
        counter: state.counter + action.amount,
        showCounter: state.showCounter
      }
      break
    case 'minus':
      return {
        counter: state.counter - 1,
        showCounter: state.showCounter
      }
      break
    case 'toggle':
      return {
        counter: state.counter,
        showCounter: !state.showCounter
      }
      break
    default:
      return state
      break
  }
  /* if (action.type === 'plus') {
    return {
      counter: state.counter + 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'increase') {
    return {
      counter: state.counter + action.amount,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'minus') {
    return {
      counter: state.counter - 1,
      showCounter: state.showCounter
    }
  }

  if (action.type === 'toggle') {
    return {
      counter: state.counter,
      showCounter: !state.showCounter
    }
  } */

  // return state
}

const store = createStore(
  counterReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

export default store
