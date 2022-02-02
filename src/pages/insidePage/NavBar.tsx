import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Logo, NavWrapper, LogButton } from '../../assets/styles/Navigation.styles';
import { Link } from 'react-router-dom';

export const NavBar = () => {
  return (
    <NavWrapper collapseOnSelect expand="lg">
      <Container fluid>
        <Logo as={Link} to="#">
          Vetty
        </Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <LogButton as={Link} to="#">
              Log out
            </LogButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavWrapper>
  );
};
