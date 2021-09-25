import fetchRestaurants from '../../services/fetchRestaurants'
const FETCH_RESTAURANT = 'FETCH_RESTAURANT'
const UPDATE_RESTAURANT = 'UPDATE_RESTAURANT'

export const fetchData = (data) => ({
  type: FETCH_RESTAURANT,
  data
})

export const updateData = (data) => ({
  type: UPDATE_RESTAURANT,
  data
})

export const fetchRestaurantData = () => {
  return (dispatch) => {
    return fetchRestaurants()
      .then(res => {
        dispatch(fetchData(res))
      })
      .catch(e => {
        throw(e);
      })
  }
}

export default function restaurantReducer(state = [], action) {
  switch(action.type) {
    case FETCH_RESTAURANT:
      return action.data;
    case UPDATE_RESTAURANT:
      const newRests = state.map(rest => {
        if (rest.uid === action.data.uid) {
          return action.data;
        }

        return rest
      })

      return newRests 
    default:
      return state;
  }
}