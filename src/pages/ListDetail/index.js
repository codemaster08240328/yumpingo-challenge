import { connect } from 'react-redux'

import ListDetail from './ListDetail'

const stateToProps = (state) => ({
  restaurants: state.restaurants
})

export default connect(stateToProps, null)(ListDetail)
