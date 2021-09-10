import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { ReactComponent as LogoImage } from '../../assets/logo.svg'
import cc from 'classcat'

/**
 * The Yumpingo logo
 */
const Logo = ({ linkable, href, className }) => {

  const handleClick = useCallback(() => {
    if (linkable) {
      window.open(href)
    }
  }, [href, linkable])

  return (
    <LogoImage className={cc(['yum-logo', { 'cursor-pointer': linkable }, className])} onClick={handleClick} />
  )
}

Logo.propTypes = {
  linkable: PropTypes.bool,
  href: PropTypes.string
}

Logo.defaultProps = {
  linkable: true,
  href: 'https://www.yumpingo.com/'
}

export default React.memo(Logo)
