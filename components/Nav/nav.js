import React, { useState } from "react"
import { Link } from "gatsby"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  // UncontrolledDropdown,
  // DropdownToggle,
  // DropdownMenu,
  // DropdownItem,
} from "reactstrap"
import logo from "../../src/img/vegan-restaurant-niagara-on-the-lake.png"
import "../Nav/nav.scss"

const Example = props => {
  const [isOpen, setIsOpen] = useState(false)

  const toggle = () => setIsOpen(!isOpen)

  return (
    <div>
      <Navbar id="nav" expand="lg">
        <NavbarBrand href="/">
          <Link to="/" className="logo">
            <img src={logo} alt="vegan restaurant niagara on the lake" />
          </Link>
        </NavbarBrand>
        <NavbarToggler className="custom-toggler" onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <Link to="/menu" className="nav-link">
                Menu
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/about" className="nav-link">
                About
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/gallery" className="nav-link">
                Gallery
              </Link>
            </NavItem>
            <NavItem>
              <Link to="/contact" className="nav-link">
                Contact
              </Link>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  )
}

export default Example
