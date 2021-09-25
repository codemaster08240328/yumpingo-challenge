import React from 'react'
import Avatar from '../components/Avatar'
import AsyncComponentWrapper from './asyncComponentWrapper'
import PropTypes from 'prop-types'

const UserCard = ({ isFetching, user, error }) => {
  return (
    <pre className="shadow my-8 p-4 rounded bg-gray-100">
      <AsyncComponentWrapper isFetching={isFetching} error={error}>
        <Avatar src={user?.avatar} title={user?.first_name} className="mb-2" />
        <h1 className="font-semibold">{user?.first_name} {user?.last_name}</h1>
        <p>
          email: {user?.email}<br />
          phone: {user?.phone_number}<br />
          gender: {user?.gender}
        </p>
      </AsyncComponentWrapper>
    </pre>
  )
}

UserCard.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  error: PropTypes.string,
  user: PropTypes.object
}

UserCard.defaultProps = {
  user: {},
  error: ''
}

export default UserCard