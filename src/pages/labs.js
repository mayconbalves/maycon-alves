// https://codepen.io/malves/pen/QYqNdK?editors=0110
import React from 'react'
import Content from '../components/content'
import { Container, Title, StrongStyled } from '../styles/pages/labs-styled'

const Labs = () => {
  return (
    <Content>
      <Container>
        <Title>
          Brincando com <StrongStyled color="#dd4b25">HTML</StrongStyled>,{' '}
          <StrongStyled color="#2387c2">CSS</StrongStyled> e{' '}
          <StrongStyled color="#eed604">Javascript</StrongStyled> !!
        </Title>
      </Container>
    </Content>
  )
}

export default Labs
