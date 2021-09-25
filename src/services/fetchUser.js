import { RANDOM_USER_API } from '../shared/utils'

const fetchUser = async () => {
  return await fetch(RANDOM_USER_API)
    .then(res => res.json())
    .catch(err => err)
}

export default fetchUser
