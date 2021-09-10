import React from 'react'
import Page from '../../components/Page/Page'

/**
 * Standard 404 page
 */
const PageNotFound = () => (
  <Page>
    <h1>ops... page not found</h1>
  </Page>
)

export default React.memo(PageNotFound)
