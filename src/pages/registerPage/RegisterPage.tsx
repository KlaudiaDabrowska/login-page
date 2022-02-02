import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { WelcomeText } from '../../components/common/WelcomeText';
import { RightContainerTxt } from '../../components/common/RightContainerTxt';
import { RegisterForm } from './RegisterForm';
import { StyledCol } from '../../assets/styles/StyledColumn.style';
import { Redirect } from '../../components/common/Redirect';

export const RegisterPage = () => {
  return (
    <Container fluid>
      <Row>
        <StyledCol sm={4}>
          <WelcomeText header="Vetty" welcomeText="Nice to meet you!" welcomeTextTwo="Sign Up for a Free account" />
          <RegisterForm />
          <Redirect RedirectTxt="Already registered?" RedirectLinkName="Log in" RedirectLinkTo="/login" />
        </StyledCol>
        <Col sm={8}>
          <RightContainerTxt textOne="Welcome to Vetty." textTwo="Your veterinary organizer." />
        </Col>
      </Row>
    </Container>
  );
};
