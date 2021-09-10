import React from 'react'
import cc from 'classcat'
import Header from '../Header'
import Footer from '../Footer'

/**
 * Wraps its children into the app elements
 */
const Scaffold = ({ children, className, ...rest }) => (
  <main className={cc(['scaffold antialiased bg-pink-50 flex flex-col absolute inset-0', className])} {...rest}>
    <Header className="flex-none" />
    <section className="content flex-grow overflow-y-scroll">
      {children}
    </section>
    <Footer className="flex-none" />
  </main>
)

export default React.memo(Scaffold)
