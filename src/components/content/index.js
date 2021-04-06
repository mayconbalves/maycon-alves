import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../nav'
import { Container } from './styled'

const Content = ({ children }) => {
  return (
    <Container>
      <Navbar />
      {children}
    </Container>
  )
}

export default Content

Content.propTypes = {
  children: PropTypes.node.isRequired
}
