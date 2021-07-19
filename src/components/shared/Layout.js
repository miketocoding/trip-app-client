import React, { Fragment } from 'react'

import Footer from './Footer'

const Layout = props => (
  <Fragment>
    {props.children}
    <Footer />
  </Fragment>
)

export default Layout
