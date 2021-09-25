import { RANDOM_RESTAURANT_API } from '../shared/utils'

/**
 * Mock the available restaurants data API
 * // TODO: you might want to rewrite this function fo task 2
 * // https://random-data-api.com/api/restaurant/random_restaurant?size=10
 */
// const fetchRestaurants = () => Promise.resolve([])

// export default withDelayedResponse(fetchRestaurants)

const fetchRestaurants = () => {
  return fetch(RANDOM_RESTAURANT_API)
    .then(res => res.json())
    .catch(err => err)
}

export default fetchRestaurants