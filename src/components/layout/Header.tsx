import React from 'react';
import { Navbar, Nav, NavDropdown } from 'react-bootstrap';
import { Outlet } from 'react-router-dom';

const Header = () => {
  const logoutHandler = () => {
    console.log('logout!');
  };

  return (
    <div>
      <Navbar bg="light" expand="sm">
        <Navbar.Brand href="/">
          <i className="fas fa-list-ul"></i> Docket
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/profile">PROFILE</Nav.Link>

            <NavDropdown title="ADMIN" id="basic-nav-dropdown">
              <NavDropdown.Item href="/admin/todolist">Todos</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/admin/userlist">Users</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item onClick={logoutHandler}>
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
        <Navbar.Text>
          Signed in as: <a href="/"> Henry </a>
        </Navbar.Text>
      </Navbar>

      <Outlet />
    </div>
  );
};

export default Header;
