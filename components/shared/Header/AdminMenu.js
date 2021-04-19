import React, { useState } from "react";
import {
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap'
import {NavLink} from './NavLink'

export const AdminMenu = () => {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <Dropdown
      className="port-navbar-link port-dropdown-menu"
      nav
      isOpen={isOpen}
      toggle={() => setIsOpen(!isOpen)}
    >
      <DropdownToggle className="port-dropdown-toggle" nav caret>
        Admin
      </DropdownToggle>
      <DropdownMenu right>
        <DropdownItem>
          <NavLink
            className="port-dropdown-item"
            href="/portfolios/new"
            title="Create Portfolio"
          />
        </DropdownItem>
        <DropdownItem>
          <NavLink
            className="port-dropdown-item"
            href="/blogs/editor"
            title="Blog Editor"
          />
        </DropdownItem>
        <DropdownItem>
          <NavLink
            className="port-dropdown-item"
            href="/dashboard"
            title="Dashboard"
          />
        </DropdownItem>
      </DropdownMenu>
    </Dropdown>
  )
}
