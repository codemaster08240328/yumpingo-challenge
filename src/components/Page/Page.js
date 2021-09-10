import React, { useEffect } from 'react'
import cc from 'classcat'
import PropTypes from 'prop-types'

import './Page.css'

/**
 * Provides the standard page layout, wraps its children into a centered box with margin/padding.
 * Takes a title and makes sure it's set as the document title
 */
const Page = ({ children, className, title }) => {

  useEffect(() => {
    document.title = `Yumpingo - Tech Challenge${title ? ` - ${title}` : ''}`
  }, [title])

  return (
    <div className={cc(['page my-6 max-w-6xl m-auto p-4 lg:p-0', className])}>
      {children}
    </div>
  )
}

Page.propTypes = {
  title: PropTypes.string
}

Page.defaultProps = {
  title: ''
}

export default React.memo(Page)
