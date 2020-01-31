import styled, { css } from 'styled-components'
import { Navbar as BsNavbar, NavLink as BsNavLink, Nav as BsNav } from 'reactstrap'

export const Navbar = styled(BsNavbar)(
  () => css`
    padding: 0;
    display: flex;
    justify-content: flex-end;
  `
)

export const NavLink = styled(BsNavLink)(
  () => css`
    &:hover {
      background: #007bff;
    }
  `
)

export const Nav = styled(BsNav)(
  () => css`
    background-color: #777;
  `
)
