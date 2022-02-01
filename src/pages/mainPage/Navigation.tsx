import { Container, Nav, Navbar } from 'react-bootstrap';
import { ContentButton, Logo, NavWrapper, LoginButton, SignUpButton } from '../../assets/styles/Navigation.styles';
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
            <LoginButton as={Link} to="/login">
              Login
            </LoginButton>
            <SignUpButton as={Link} to="/signup">
              Sign up
            </SignUpButton>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </NavWrapper>
  );
};
