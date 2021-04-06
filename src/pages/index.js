import React from 'react'
import Content from '../components/content'
import {
  Title,
  Container,
  DescriptionWrapper,
  Description,
  StrongStyled,
  StyledLink
} from '../styles/pages/home-styled'

const home = () => {
  return (
    <Content>
      <Container>
        <Title>Olá, seja bem-vindo!</Title>
        <DescriptionWrapper>
          <Description>
            Meu nome é <StrongStyled>Maycon Alves</StrongStyled> sou
            desenvolvedor <StrongStyled>front-end</StrongStyled> desde{' '}
            <StrongStyled>2016.</StrongStyled>Nesses anos aprendi muito sobre
            desenvolvimento de software.
          </Description>
          <Description>
            Desde sempre atuo com <StrongStyled>HTML</StrongStyled>,
            <StrongStyled>CSS</StrongStyled>, e{' '}
            <StrongStyled>Javascript</StrongStyled>.Por todas as empresas que
            passei passei sempre usei <StrongStyled>React</StrongStyled> com{' '}
            <StrongStyled>Redux</StrongStyled> e desde de 2018 comecei adotar o
            uso de <StrongStyled>styles-components</StrongStyled>.
          </Description>
          <Description>
            Gosto muito de escrever artigos no{' '}
            <StyledLink
              href="https://mayconmustaine.medium.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Medium
            </StyledLink>
            . Também sou criador do BeersTech, no{' '}
            <StyledLink
              href="https://www.instagram.com/beers.tech/"
              target="_blank"
              rel="noopener noreferrer"
            >
              instagram
            </StyledLink>{' '}
            e no{' '}
            <StyledLink
              href="https://www.youtube.com/channel/UC516Uj0C21M57rsAlTrV8OQ/featured"
              target="_blank"
              rel="noopener noreferrer"
            >
              youtube
            </StyledLink>
            .Ambos para trazer mais conteúdo sobre{' '}
            <StrongStyled>tecnologia</StrongStyled>.
          </Description>
        </DescriptionWrapper>
      </Container>
    </Content>
  )
}

export default home
