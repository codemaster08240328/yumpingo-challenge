import React from 'react'
import cc from 'classcat'
import Navigation from '../Navigation'
import Logo from '../Logo'
import { navLinks } from '../../shared/utils'

import './Footer.css'

/**
 * The application footer
 */
const Footer = ({ className }) => (
  <footer className={cc(['footer bg-gray-700 text-white p-2', className])}>
    <div className="max-w-6xl m-auto flex flex-wrap justify-between items-center">
      <div>
        <Logo className="footer-logo" />
        <p className="text-sm mb-0 mt-2">Yumpingo tech challenge 2021</p>
      </div>
      <Navigation links={navLinks} />
    </div>
  </footer>
)

export default Footer
