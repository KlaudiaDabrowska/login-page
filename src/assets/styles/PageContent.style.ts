import styled from 'styled-components';
import { Col, Row } from 'react-bootstrap';

export const StyledMainPageCol = styled(Col)`
  display: flex;
  justify-content: center;
  margin: ${({ theme }) => theme.spacing.xxxxl};
`;

export const StyledRow = styled(Row)`
  display: flex;
  justify-content: center;
  height: 89vh;
`;

export const Description = styled.div`
  margin: ${({ theme }) => theme.spacing.xxxxl};
  font-size: ${({ theme }) => theme.fontSize.l};
  font-family: 'Montserrat';
  color: '#bbc0d4';
  text-align: justify;
`;
