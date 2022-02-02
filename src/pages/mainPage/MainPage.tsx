import React from 'react';
import { PageContent } from '../../components/common/PageContent';
import { PageWrapper } from '../../assets/styles/Wrappers.styles';
import { Navigation } from './Navigation';

export const MainPage = () => {
  return (
    <PageWrapper>
      <Navigation />
      <PageContent />
    </PageWrapper>
  );
};
