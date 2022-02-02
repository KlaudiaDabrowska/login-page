import React from 'react';
import { StyledForm, StyledInput, StyledLabel } from '../../assets/styles/Form.styles';
import { Form } from 'react-bootstrap';
import { StyledButton } from '../../assets/styles/Form.styles';

export const LoginForm = () => {
  return (
    <StyledForm>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <StyledLabel>Email address</StyledLabel>
        <StyledInput type="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <StyledLabel>Password</StyledLabel>
        <StyledInput type="password" placeholder="Enter password" />
      </Form.Group>
      <StyledButton variant="primary" type="submit" size="sm">
        Login
      </StyledButton>
    </StyledForm>
  );
};
