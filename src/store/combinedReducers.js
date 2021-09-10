import { combineReducers } from 'redux'

// reducers
import mockReducer from './mock/mockReducer'

export default combineReducers({
  mock: mockReducer
})
