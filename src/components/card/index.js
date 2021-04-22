import React from 'react'
import PropTypes from 'prop-types'
import { Container, CardTitle, LinkContainer } from './styled'

const Card = ({ color, href, hoverColor, title }) => {
  return (
    <LinkContainer href={href} target="_blank" rel="noopener noreferrer">
      <Container hoverColor={hoverColor} color={color}>
        <CardTitle>{title}</CardTitle>
      </Container>
    </LinkContainer>
  )
}

Card.propTypes = {
  color: PropTypes.string,
  href: PropTypes.string.isRequired,
  hoverColor: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Card
