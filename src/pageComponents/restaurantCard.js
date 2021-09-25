import Card from '../components/Card'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const RestaurantCard = ({ item }) => {
  return (
    <Card title={item.name} className="mt-4">
      <img src={item.logo} alt={item.name} className="object-cover w-full h-48" />
      <br />
      <p><b>Phone Number:</b> {item.phone_number} </p>
      <p><b>Address:</b> {item.address} </p>

      <Link data-testid="detail-link" to={`list/${item.uid}`}>See more...</Link>
    </Card>
  )
}

RestaurantCard.propTypes = {
  item: PropTypes.object.isRequired
}

export default RestaurantCard