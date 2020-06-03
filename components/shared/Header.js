import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';
import Link from 'next/link';


const BSNavLink = props => {
    const {title, href} = props
    return (
        <Link href={href}>
            <a className='nav-link'>
                {title}
            </a>
        </Link>
    )
}

export default class Header extends React.Component {
    
    state = {isOpen : false}
    toggle = () => this.setState({isOpen: !this.state.isOpen})

    render() {
        return (
            <>
              <Navbar color="light" light expand="md">
                <NavbarBrand href="/">reactstrap</NavbarBrand>
                <NavbarToggler onClick={this.toggle} />
                <Collapse isOpen={this.isOpen} navbar>
                  <Nav className="mr-auto" navbar>
                    <NavItem>
                        <BSNavLink href="/" title="Home" />
                    </NavItem>
                    <NavItem>
                        <BSNavLink href="/about" title="About" />
                    </NavItem>
                    <NavItem>
                        <BSNavLink href="/portfolios" title="Portfolios" />
                    </NavItem>
                    <NavItem>
                        <BSNavLink href="/blogs" title="Blogs" />
                    </NavItem>
                    <NavItem>
                        <BSNavLink href="/cv" title="CV" />
                    </NavItem>
                  </Nav>
                </Collapse>
              </Navbar>
            </>
          );
    }
}