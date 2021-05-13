import React from 'react'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { NavbarStyled, NavTitle, NavList, NavListItem, NavLink } from './styled'

const Navbar = () => {
  const router = useRouter()
  return (
    <NavbarStyled>
      <NavTitle onClick={() => router.push('/')}>Maycon Alves</NavTitle>
      <NavList>
        <NavListItem>
          <Link href="/labs">
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
