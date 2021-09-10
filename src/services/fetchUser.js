import { withDelayedResponse } from '../shared/utils'

/**
 * Mock a generic user fetch
 * // TODO: you might want to rewrite this function fo task 1
 * // https://random-data-api.com/api/users/random_user
 */
const fetchUser = () => Promise.resolve({
  'id': 2125,
  'uid': '0d36834f-b69d-443a-8548-76f10287bd56',
  'password': 'NET3CUslLe',
  'first_name': 'Kip',
  'last_name': 'Russel',
  'username': 'kip.russel',
  'email': 'kip.russel@email.com',
  'avatar': 'https://robohash.org/necessitatibusquodquia.png?size=300x300\u0026set=set1',
  'gender': 'Male',
  'phone_number': '+34 381.381.8060 x01884',
  'social_insurance_number': '322614496',
  'date_of_birth': '1994-03-14',
  'employment': { 'title': 'Design Architect', 'key_skill': 'Problem solving' },
  'address': {
    'city': 'Rayfordland',
    'street_name': 'Bibi Hollow',
    'street_address': '9112 Berge Dam',
    'zip_code': '79197',
    'state': 'Oklahoma',
    'country': 'United States',
    'coordinates': { 'lat': 89.38526494739102, 'lng': -109.59235685078414 }
  },
  'credit_card': { 'cc_number': '5314-9693-1599-0990' },
  'subscription': { 'plan': 'Basic', 'status': 'Active', 'payment_method': 'Paypal', 'term': 'Full subscription' }
})


export default withDelayedResponse(fetchUser)
