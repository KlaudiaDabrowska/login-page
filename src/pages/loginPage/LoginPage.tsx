import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { WelcomeText } from '../../components/common/WelcomeText';
import { LoginForm } from './LoginForm';
import { RightContainerTxt } from '../../components/common/RightContainerTxt';
import { StyledCol } from '../../assets/styles/StyledColumn.style';
import { Redirect } from '../../components/common/Redirect';
import { Link } from 'react-router-dom';

export const LoginPage = () => {
  return (
    <Container fluid>
      <Row>
        <StyledCol sm={4}>
          <WelcomeText header="Vetty" welcomeText="Welcome back!" welcomeTextTwo="Login to your account" />
          <LoginForm />
          <Redirect RedirectTxt="Don't have an account?" RedirectLinkName="Sign up for free" RedirectLinkTo="/signup" />
          <Link to="/inside">INSIDE</Link>
        </StyledCol>
        <Col sm={8}>
          <RightContainerTxt textOne="Oh, hello." textTwo="Welcome back!" />
        </Col>
      </Row>
    </Container>
  );
};
