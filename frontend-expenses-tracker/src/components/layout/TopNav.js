import React from "react";
import { Container, Nav, Navbar } from "react-bootstrap";
// import { Link } from "react-router-dom";
import { LinkContainer } from "react-router-bootstrap";

export const TopNav = () => {
  return (
    <Navbar bg="info" expand="md">
      <Container>
        <Navbar.Brand href="/">Expense Tracker</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <LinkContainer to="/">
              <Nav.Link>Login</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/register">
              <Nav.Link>Register</Nav.Link>
            </LinkContainer>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
