import styled, { css } from 'styled-components'
import { Navbar as BsNavbar, NavLink as BsNavLink } from 'reactstrap'

export const Navbar = styled(BsNavbar)(
  () => css`
    position: fixed;
    top: 15px;
    right: 15px;
    background: #777;
    z-index: 1;
    padding: 0;
  `
)

export const NavLink = styled(BsNavLink)(
  () => css`
    &:hover {
      background: #007bff;
    }
  `
)
