import React from 'react';
import { Header, StyledWelcomeTxt, WelcomeWrapper } from '../../styles/WelcomeText.style';

interface WelcomeTextProps {
  header: string;
  welcomeText: string;
  welcomeTextTwo: string;
  welcomeTextThree?: string;
}

export const WelcomeText = ({ header, welcomeText, welcomeTextTwo }: WelcomeTextProps) => {
  return (
    <WelcomeWrapper>
      <Header>{header}</Header>
      <StyledWelcomeTxt>{welcomeText}</StyledWelcomeTxt>
      <StyledWelcomeTxt>{welcomeTextTwo}</StyledWelcomeTxt>
    </WelcomeWrapper>
  );
};
