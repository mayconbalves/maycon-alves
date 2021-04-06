import React from 'react'
import Link from 'next/link'
import { NavbarStyled, NavTitle, NavList, NavListItem, NavLink } from './styled'

const Navbar = () => {
  return (
    <NavbarStyled>
      <NavTitle>Maycon Alves</NavTitle>
      <NavList>
        <NavListItem>
          <Link href="/">
            <NavLink>Redes</NavLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/">
            <NavLink>Laboratório</NavLink>
          </Link>
        </NavListItem>
        <NavListItem>
          <Link href="/">
            <NavLink>Blog</NavLink>
          </Link>
        </NavListItem>
      </NavList>
    </NavbarStyled>
  )
}

export default Navbar
