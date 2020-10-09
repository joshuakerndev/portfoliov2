import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from 'reactstrap';

import { HashLink as Link } from 'react-router-hash-link';

import "./AppNavbar.scss"

const AppNavbar = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return (
    <div className="AppNavbar fixed-top">
      <Navbar className="fixed-top" color="dark" light expand="md">
        <NavbarBrand>
          <Link className="NavBrandLogo" smooth to="/#Welcome">
            JKD
          </Link>
        </NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>
                <Link className="NavText" smooth to="/#Portfolio">
                  Portfolio
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="NavText" smooth to="/#About">
                  About
                </Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
                <Link className="NavText" smooth to="/#Contact">
                  Contact
                </Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
}

export default AppNavbar;