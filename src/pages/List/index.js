import { connect } from 'react-redux'
import List from './List'

const mapStateToPros = state => ({
  data: state.restaurants
})

export default connect(mapStateToPros, null)(List)
