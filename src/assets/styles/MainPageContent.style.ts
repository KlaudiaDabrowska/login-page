import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const StyledCol = styled(Col)`
  display: flex;
  justify-content: center;
  margin: 100px;
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  height: 89vh;
`;

export const Description = styled.div`
  margin: 100px;
  font-size: 25px;
  font-family: 'Montserrat';
  color: '#bbc0d4';
  text-align: justify;
`;
