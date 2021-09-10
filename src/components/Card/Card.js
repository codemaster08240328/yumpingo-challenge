import React from 'react'
import PropTypes from 'prop-types'
import cc from 'classcat'

import './Card.css'

/**
 * Generic layout container
 */
const Card = ({ title, children, className }) => (
  <div className={cc(['card bg-white rounded shadow hover:shadow-lg p-4 transition-shadow', className])}>
    {title && (
      <div className="py-2 mb-5 border-gray-200 border-b">
        <h1 className="font-semibold text-pink-500">{title}</h1>
      </div>
    )}
    {children}
  </div>
)

Card.propTypes = {
  title: PropTypes.string
}

Card.defaultProps = {
  title: ''
}


export default React.memo(Card)
