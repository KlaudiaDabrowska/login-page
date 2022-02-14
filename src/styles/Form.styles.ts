import styled from 'styled-components';
import { Form, Button } from 'react-bootstrap';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin-top: ${({ theme }) => theme.spacing.l};
  padding: 40px 40px 0px;
`;

export const StyledInput = styled(Form.Control)`
  height: 35px;
  border: 1px solid ${({ theme }) => theme.colors.backgroundPrimary};
  border-radius: 20px;
  font-weight: 200;

  &:focus {
    border-color: ${({ theme }) => theme.colors.formBorder};
    box-shadow: 0px 1px 5px 0rem rgb(41 107 206 / 25%);
  }
`;

export const StyledLabel = styled(Form.Label)`
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  font-weight: bold;
`;

export const StyledButton = styled(Button)`
  margin-top: ${({ theme }) => theme.spacing.xs};
  width: 80px;
  background-color: ${({ theme }) => theme.colors.backgroundPrimary};
  border: none;
  border-radius: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.darkerBackgroundPrimary};
  }
`;

export const StyledFeedback = styled(Form.Control.Feedback)`
  font-size: 12px;
`;
