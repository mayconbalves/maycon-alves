import styled from 'styled-components'

export const NavbarStyled = styled.nav`
  height: 50px;
  width: 100%;
  background-color: #121212;
  color: #fff;
  display: flex;
  justify-content: space-around;
`

export const NavTitle = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 2rem;
  font-family: 'Copperplate', serif;
  cursor: pointer;

  &:hover {
    color: #bb86fc;
  }

  @media (max-width: 420px) {
    font-size: 1.8rem;
  }
`

export const NavList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #fff;
`

export const NavListItem = styled.li`
  list-style: none;
  padding: 0 10px;

  @media (max-width: 420px) {
    padding: 0 5px;
  }
`

export const NavLink = styled.a`
  cursor: pointer;
  font-size: 1.5rem;
  text-decoration: none;

  &:hover {
    color: #bb86fc;
  }

  @media (max-width: 420px) {
    font-size: 1.3rem;
  }
`
