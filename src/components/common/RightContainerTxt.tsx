import React from 'react';
import { ContainerWrapper, HeaderOne, HeaderThree, HeaderTwo } from '../../styles/RightContainerTxt.style';

interface Props {
  textOne: string;
  textTwo: string;
  textThree?: string;
}

export const RightContainerTxt = ({ textOne, textTwo, textThree }: Props) => {
  return (
    <ContainerWrapper>
      <HeaderOne>{textOne}</HeaderOne>
      <HeaderTwo>{textTwo}</HeaderTwo>
      <HeaderThree>{textThree}</HeaderThree>
    </ContainerWrapper>
  );
};
