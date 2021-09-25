import { combineReducers } from 'redux'

// reducers
import mockReducer from './mock/mockReducer'
import restaurantReducer from './restaurant/restaurantReducer'

export default combineReducers({
  mock: mockReducer,
  restaurants: restaurantReducer
})
