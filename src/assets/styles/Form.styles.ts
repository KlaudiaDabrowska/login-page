import Form from 'react-bootstrap/Form';
import styled from 'styled-components';

export const StyledForm = styled(Form)`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  flex-direction: column;
  width: 100%;
  max-width: 600px;
  margin-bottom: ${({ theme }) => theme.spacing.xxxl};
  padding: 40px 40px 0px;
  border-radius: 25px;
`;

export const StyledInput = styled(Form.Control)`
  color: #000;
  font-weight: bold;
  background-color: yellow;
`;

export const StyledLabel = styled(Form.Label)`
  color: yellow;
  font-weight: bold;
`;
