import styled from 'styled-components'

export const Container = styled.footer`
  position: absolute;
  bottom: 0;
  width: 100%;
`

export const MediaSocialSection = styled.section`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 40px;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  margin: 35px 0;

  @media (max-width: 430px) {
    margin-top: 60;
  }
`
