import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem
} from 'reactstrap';
import Link from 'next/link';


const BSNavLink = props => {
    const {title, href} = props
    return (
        <Link href={href}>
            <a className='nav-link port-navbar-link'>
                {title}
            </a>
        </Link>
    )
}

const BSNavBrand = () =>{
    return(
        <Link href="/">
            <a className="navbar-brand port-navbar-brand">Thomas Boittin</a>
        </Link>
    )
}

const Header = () => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Navbar 
                className="port-navbar port-default absolute" 
                color="transparent" 
                dark 
                expand="md"
            >
                <BSNavBrand />
                <NavbarToggler onClick={toggle} />
                <Collapse isOpen={isOpen} navbar>
                    <Nav className="mr-auto" navbar>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/" title="Home" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/about" title="About" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/portfolios" title="Portfolios" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/blogs" title="Blogs" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/cv" title="CV" />
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header