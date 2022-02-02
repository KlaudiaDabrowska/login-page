import React from 'react';
import { MainPageContent } from './MainPageContent';
import { MainPageWrapper } from '../../assets/styles/Wrappers.styles';
import { Navigation } from './Navigation';

export const MainPage = () => {
  return (
    <MainPageWrapper>
      <Navigation />
      <MainPageContent />
    </MainPageWrapper>
  );
};
