/**
 * The app shared navigation links
 */
export const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/list', label: 'List' }
]

/**
 * Takes a promise returning function and return a new function that
 * delays the executing by the provided one by the defined delay
 * @param fn
 * @param delay
 * @return {function(...[*]): Promise<unknown>}
 */
export const withDelayedResponse = (fn, delay = 1500) => (...args) => new Promise((resolve) => {
  setTimeout(() => {
    fn(...args).then(resolve)
  }, delay)
})

export const RANDOM_USER_API = 'https://random-data-api.com/api/users/random_user'

export const RANDOM_RESTAURANT_API = 'https://random-data-api.com/api/restaurant/random_restaurant?size=10'
