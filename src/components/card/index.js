import React from 'react'
import PropTypes from 'prop-types'
import { Container, CardTitle, LinkContainer } from './styled'

const Card = ({ title }) => {
  return (
    <LinkContainer
      href="https://www.linkedin.com/in/mayconbalves/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <Container>
        <CardTitle>{title}</CardTitle>
      </Container>
    </LinkContainer>
  )
}

Card.propTypes = {
  title: PropTypes.string.isRequired
}

export default Card
