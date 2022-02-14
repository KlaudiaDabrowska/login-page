import React from 'react';
import { PageContent } from '../../components/common/PageContent';
import { PageWrapper } from '../../styles/Wrappers.styles';
import { Navigation } from './Navigation';

export const MainPage = () => {
  return (
    <PageWrapper>
      <Navigation />
      <PageContent />
    </PageWrapper>
  );
};
