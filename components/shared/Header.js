import React, { useState } from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  Nav,
  NavItem,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from 'reactstrap';
import Link from 'next/link';
import { isAuthorized } from '@/utils/auth0'


const BSNavLink = props => {
    const {title, href, className=''} = props
    return (
        <Link href={href}>
            <a className={'nav-link port-navbar-link '+ className}>
                {title}
            </a>
        </Link>
    )
}

const BSNavBrand = () =>
    <Link href="/">
        <a className="navbar-brand port-navbar-brand">Thomas Boittin</a>
    </Link>


const LoginLink = () => 
    <a href="/api/v1/login" className='nav-link port-navbar-link'>Login</a>

const LogoutLink = () =>
    <a href="/api/v1/logout" className='nav-link port-navbar-link'>Logout</a>


const AdminMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    return (
        <Dropdown
            className="port-navbar-link port-dropdown-menu"
            nav
            isOpen={isOpen}
            toggle={()=> setIsOpen(!isOpen)}
        >
            <DropdownToggle className="port-dropdown-toggle" nav caret>
                Admin
            </DropdownToggle>
            <DropdownMenu right>
                <DropdownItem>
                    <BSNavLink 
                        className="port-dropdown-item" 
                        href="/portfolios/new" 
                        title="Create Portfolio" 
                    />
                </DropdownItem>
                <DropdownItem>
                    <BSNavLink 
                        className="port-dropdown-item" 
                        href="/blogs/editor" 
                        title="Blog Editor" 
                    />
                </DropdownItem>
                <DropdownItem>
                    <BSNavLink 
                        className="port-dropdown-item" 
                        href="/dashboard" 
                        title="Dashboard" 
                    />
                </DropdownItem>
            </DropdownMenu>
        </Dropdown>
    )
}

const Header = ({user, loading, className}) => {
    
    const [isOpen, setIsOpen] = useState(false)
    const toggle = () => setIsOpen(!isOpen)

    return (
        <>
            <Navbar 
                className={"port-navbar port-default absolute " + className} 
                // dark 
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
                        {/* <NavItem className="port-navbar-item">
                            <BSNavLink href="/secret" title="Secret" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/secretssr" title="SecretSSR" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/onlyadmin" title="Only Admin" />
                        </NavItem>
                        <NavItem className="port-navbar-item">
                            <BSNavLink href="/onlyadminssr" title="Only Admin SSR" />
                        </NavItem> */}
                    </Nav>
                    <Nav navbar>
                        {!loading &&
                            <>
                                {user &&
                                    <>
                                        {isAuthorized(user, 'admin') && <AdminMenu />}
                                        <NavItem className="port-navbar-item">
                                            <LogoutLink />
                                        </NavItem>
                                    </>
                                }
                                {!user &&
                                    <NavItem className="port-navbar-item">
                                        <LoginLink />
                                    </NavItem>
                                }
                            </>
                        }
                    </Nav>
                </Collapse>
            </Navbar>
        </>
    );
}

export default Header