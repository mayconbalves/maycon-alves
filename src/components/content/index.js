import React from 'react'
import Navbar from '../nav'
import { Container } from './styled'

const Content = ({ children }) => {
  return (
    <Container>
      <Navbar />
      Content
      {children}
    </Container>
  )
}

export default Content
