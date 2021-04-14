import styled from 'styled-components'

export const Container = styled.div`
  margin: 60px auto 0;
  width: 65%;
`

export const Title = styled.h1`
  color: #fff;
`

export const StrongStyled = styled.strong`
  color: ${(props) => props.color ?? '#fff'};
  cursor: pointer;
  letter-spacing: 2px;

  &:hover {
    -webkit-text-stroke-width: 1px;
    -webkit-text-stroke-color: ${(props) => props.color};
  }
`
