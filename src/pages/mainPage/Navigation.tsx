import { Container, Nav, Navbar } from 'react-bootstrap';
import { ContentButton, Logo, NavWrapper, LogButton, SignUpButton } from '../../styles/Navigation.styles';
import { Link } from 'react-router-dom';

export const Navigation = () => {
  return (
    <NavWrapper collapseOnSelect expand="lg">
      <Container fluid>
        <Logo as={Link} to="/">
          Vetty
        </Logo>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="ms-auto">
            <ContentButton as={Link} to="#">
              How It Works
            </ContentButton>
            <ContentButton as={Link} to="#">
              Features
            </ContentButton>
            <ContentButton as={Link} to="#">
              Pricing
            </ContentButton>
          </Nav>
          <Nav>
            <LogButton as={Link} to="/login">
              Log in
            </LogButton>
            <SignUpButton as={Link} to="/signup">
              Sign up
            </SignUpButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavWrapper>
  );
};
