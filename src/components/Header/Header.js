import React from 'react'
import { NavItem } from 'reactstrap'
import { NavLink as RouterNavLink } from 'react-router-dom'
import { Navbar, NavLink, Nav } from './styled'
import { homeRoute } from '~config/home-route'

const getRandomUrl = () =>
  homeRoute +
  Math.random()
    .toString()
    .slice(-7, -2)
    .padEnd(5, `0`)

const Header = () => (
  <Navbar>
    <Nav>
      <NavItem>
        <NavLink exact activeClassName="bg-primary" className="text-white" tag={RouterNavLink} to={homeRoute}>
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

export default Header
