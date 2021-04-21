import React from 'react'
import PropTypes from 'prop-types'
import { Container, CardTitle, LinkContainer } from './styled'

const Card = ({ title, href, hoverColor }) => {
  return (
    <LinkContainer href={href} target="_blank" rel="noopener noreferrer">
      <Container hoverColor={hoverColor}>
        <CardTitle>{title}</CardTitle>
      </Container>
    </LinkContainer>
  )
}

Card.propTypes = {
  href: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Card
