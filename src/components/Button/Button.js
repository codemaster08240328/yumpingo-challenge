import React from 'react'
import cc from 'classcat'

/**
 * A common button
 */
const Button = ({ children, className, ...rest }) => (
  <button className={cc(['bg-pink-500 hover:bg-pink-700 text-white font-bold py-2 px-4 rounded', className])} {...rest}>
    {children}
  </button>
)

export default React.memo(Button)
