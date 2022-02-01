import { Container } from 'react-bootstrap';
import React from 'react';
import { StyledCol, Description, StyledRow } from '../../assets/styles/MainPageContent.style';

// export const MainPageContent = styled.div`
//   display: flex;
//   justify-content: center;
//   align-content: center;
//   align-self: center;
//   height: 91vh;
// `;

export const MainPageContent = () => {
  return (
    <Container fluid>
      <StyledRow>
        <StyledCol>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. <br></br>
            Convallis convallis tellus id interdum velit laoreet id donec. Purus in massa tempor nec.
            <br></br>Tellus mauris a diam maecenas sed enim ut. Cursus mattis molestie a iaculis at erat. Ac odio tempor orci dapibus ultrices in
            iaculis nunc sed. Risus in hendrerit gravida rutrum quisque non. Sed velit dignissim sodales ut eu sem integer.
          </Description>
        </StyledCol>
      </StyledRow>
    </Container>
  );
};