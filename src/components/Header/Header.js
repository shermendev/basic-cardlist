import React from 'react'
import { Nav, NavItem } from 'reactstrap'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { getRandomUrl } from 'Utils/random'
import { Navbar, NavLink } from './styled'

const Header = () => (
  <Navbar>
    <Nav>
      <NavItem>
        <NavLink exact activeClassName="bg-primary" className="text-white" tag={RouterNavLink} to="/">
          Home
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink className="text-white" tag={RouterNavLink} to={getRandomUrl()}>
          404
        </NavLink>
      </NavItem>
    </Nav>
  </Navbar>
)

export default React.memo(Header)
