import React from 'react'
import cc from 'classcat'
import PropTypes from 'prop-types'

/**
 * Displays a rounded picture of someone
 */
const Avatar = ({ src, title, alt, className }) => (
  <img src={src} title={title} alt={alt} className={cc(['rounded-full w-16 border-4 border-white shadow', className])} />
)

Avatar.propTypes = {
  src: PropTypes.string.isRequired,
  title: PropTypes.string,
  alt: PropTypes.string
}

Avatar.defaultProps = {
  title: 'User',
  alt: 'Yumpingo user avatar'
}

export default React.memo(Avatar)
