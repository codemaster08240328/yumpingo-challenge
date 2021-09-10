import React from 'react'
import cc from 'classcat'
import Navigation from '../Navigation'
import Logo from '../Logo'
import { navLinks } from '../../shared/utils'

import './Header.css'


/**
 * The application main header
 */
const Header = ({ className, ...rest }) => (
  <header className={cc(['header sticky bg-white shadow-lg p-4 inset-x-0 top-0 z-10', className])} {...rest}>
    <div className="max-w-6xl m-auto flex flex-wrap justify-between">
      <Logo className="logo flex-none" />
      <Navigation links={navLinks} className="flex-none" />
    </div>
  </header>
)

export default React.memo(Header)
