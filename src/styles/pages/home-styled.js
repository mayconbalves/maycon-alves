import styled from 'styled-components'

export const Container = styled.div`
  margin: 60px auto 0;
  width: 65%;

  @media (max-width: 480px) {
    width: 85%;
  }
`

export const Title = styled.h1`
  color: #fff;
`

export const DescriptionWrapper = styled.section`
  margin: 35px 0;
  padding: 10px 0;
`

export const Description = styled.p`
  color: #fff;
  margin: 10px 0;
  font-size: 2rem;
`

export const StrongStyled = styled.strong`
  color: #bb86fc;
`

export const StyledLink = styled.a`
  color: #03dac5;
  cursor: pointer;
  text-decoration: none;
  font-weight: bolder;

  &:hover {
    text-decoration: underline;
  }
`
