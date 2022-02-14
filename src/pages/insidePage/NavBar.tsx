import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Logo, NavWrapper, LogButton } from '../../styles/Navigation.styles';
import { Link } from 'react-router-dom';
import { getAuth, signOut } from 'firebase/auth';
import { app } from '../../config/firebase';

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
            <LogButton
              as={Link}
              to="/"
              onClick={() => {
                const auth = getAuth(app);
                signOut(auth)
                  .then(() => {
                    console.log('Wylogowano');
                  })
                  .catch((error) => {
                    console.log('Nie udalo sie wylogować');
                  });
              }}
            >
              Log out
            </LogButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavWrapper>
  );
};
