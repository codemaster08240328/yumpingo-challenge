import React from 'react'
import { useHistory } from 'react-router-dom'
import PropTypes from 'prop-types'
import cc from 'classcat'

/**
 * Takes an array of link definitions (href, link) and displays an horizontal nav bar
 */
const Navigation = ({ links, className, ...rest }) => {
  const history = useHistory()

  const navTo = (nextLocation) => () => {
    history.push(nextLocation)
  }

  return (
    <nav className={cc(['nav text-md text-gray-900 font-semibold', className])} {...rest}>
      <ul className="lg:flex items-center justify-between pt-4 lg:pt-0">
        {links.map((item) => (
          <li className="link relative inline-block text-left" key={item.href}>
            <button className="flex items-center lg:p-4 py-3 px-0 block hover:text-pink-600 font-semibold" onClick={navTo(item.href)}>
              {item.label}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  )
}

Navigation.propTypes = {
  /**
   * The links definition
   */
  links: PropTypes.arrayOf(
    PropTypes.exact({
      href: PropTypes.string,
      label: PropTypes.string
    })
  )
}

Navigation.defaultProps = {
  links: []
}

export default Navigation
