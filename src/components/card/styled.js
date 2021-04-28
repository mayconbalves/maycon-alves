import styled from 'styled-components'

export const LinkContainer = styled.a`
  text-decoration: none;
  border: none;
`

export const Container = styled.div`
  display: flex;
  height: 80px;
  width: 150px;
  background-color: #17141d;
  border-radius: 10px;
  box-shadow: 0.1rem 0.1rem 3rem #bb86fc;
  transition: 0.4s ease-out;
  position: relative;
  border-image-slice: 1;
  cursor: pointer;

  &:hover {
    background-color: ${(props) => props.hoverColor};
    box-shadow: 0.1rem 0.1rem 5rem #0c66c2;
    transform: translateY(-10px);
    transition: 0.4s ease-out;
  }

  &:hover h1 {
    color: ${(props) => (props.color ? props.color : '#fff')};
  }

  @media (max-width: 640px) {
    width: 80%;
  }

  @media (max-width: 430px) {
    margin: 0 auto;
  }
`

export const CardTitle = styled.h1`
  color: #fff;
  margin: auto;
`
