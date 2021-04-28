import styled from 'styled-components'

export const Container = styled.div`
  margin: 60px auto 0;
  width: 65%;

  @media (max-width: 640px) {
    width: 85%;
  }
`
export const Title = styled.h1`
  color: #fff;

  @media (max-width: 520px) {
    font-size: 1.3rem;
    text-align: center;
    margin-top: 100px;
  }
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
