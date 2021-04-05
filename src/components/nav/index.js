import React from 'react'
import { NavbarStyled, NavTitle, NavList, NavListItem } from './styled'

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavTitle>Maycon Alves</NavTitle>
      <NavList>
        <NavListItem>hello</NavListItem>
        <NavListItem>hello2</NavListItem>
        <NavListItem>hello3</NavListItem>
      </NavList>
    </NavbarStyled>
  )
}

export default Navbar
