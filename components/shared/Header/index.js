import React, { useState } from "react";
import ReactResizeDetector from 'react-resize-detector'
import { Collapse, Navbar, NavbarToggler, Nav, NavItem } from 'reactstrap'
import { isAuthorized } from "@/utils/auth0";

import { NavBrand } from './NavBrand'
import { NavLink } from './NavLink'
import { LogoutLink, LoginLink } from './LogLinks'
import {AdminMenu} from './AdminMenu'

export const Header = ({ user, loading, className }) => {
  const [isOpen, setIsOpen] = useState(false)
  const toggle = () => setIsOpen(!isOpen)

  return (
    <ReactResizeDetector handleWidth>
      {({ width }) => (
        <Navbar
          className={
            'port-navbar port-default ' +
            className +
            (width < 992 && isOpen ? ' is-open' : ' is-closed')
          }
          dark
          expand="lg"
        >
          <NavBrand />
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className="mr-auto" navbar>
              <NavItem className="port-navbar-item">
                <NavLink href="/" title="Home" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <NavLink href="/about" title="About" />
              </NavItem>
              <NavItem className="port-navbar-item">
                <NavLink href="/portfolios" title="Portfolios" />
              </NavItem>
              {/* <NavItem className="port-navbar-item">
                <BSNavLink href="/blogs" title="Blogs" />
              </NavItem> */}
              <NavItem className="port-navbar-item">
                <NavLink href="/CV" title="CV" />
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
              {!loading && (
                <>
                  {user && (
                    <>
                      {isAuthorized(user, 'admin') && <AdminMenu />}
                      <NavItem className="port-navbar-item">
                        <LogoutLink />
                      </NavItem>
                    </>
                  )}
                  {!user && (
                    <NavItem className="port-navbar-item">
                      <LoginLink />
                    </NavItem>
                  )}
                </>
              )}
            </Nav>
          </Collapse>
        </Navbar>
      )}
    </ReactResizeDetector>
  )
}
