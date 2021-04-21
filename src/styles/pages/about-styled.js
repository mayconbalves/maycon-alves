import styled from 'styled-components'

export const Container = styled.div`
  margin: 60px auto 0;
  width: 65%;
`
export const Title = styled.h1`
  color: #fff;
`

export const MediaSocialSection = styled.section`
  display: grid;
  grid-row-gap: 20px;
  grid-column-gap: 20px;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  margin: 35px 0;
`

export const Card = styled.div`
  display: flex;
  height: 280px;
  width: 200px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: -1rem 0 3rem #000;
  transition: 0.4s ease-out;
  position: relative;
  border: 10px solid;
  border-image-slice: 1;
  border-width: 5px;

  &:hover {
    transform: translateY(-10px);
    transition: 0.4s ease-out;
    border-image: linear-gradient(to bottom, #743ad5, #d53a9d, rgba(0, 0, 0, 0))
      1 100%;
  }

  &:before {
    border-radius: inherit;
  }
`
