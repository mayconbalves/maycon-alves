import React from 'react'
import PropTypes from 'prop-types'
import Navbar from '../nav'
import Footer from '../footer'
import { Container } from './styled'

const Content = ({ children }) => {
  return (
    <Container>
      <header>
        <Navbar />
      </header>
      {children}
      <Footer />
    </Container>
  )
}

export default Content

Content.propTypes = {
  children: PropTypes.node.isRequired
}
