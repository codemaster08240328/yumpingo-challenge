// Skeleton Component might be implemented here...
import PropTypes from 'prop-types'

const AsyncComponentWrapper = ({isFetching, error, children}) => {
  if (isFetching)  return <p>Fetching...</p>
  if (error) return <p>Something was wrong...</p>

  return  <>{ children }</>
}

AsyncComponentWrapper.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  children: PropTypes.node 
}

AsyncComponentWrapper.defaultProps = {
  error: '',
  children: null
}

export default AsyncComponentWrapper