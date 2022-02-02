import React from 'react';
import { PageWrapper } from '../../assets/styles/Wrappers.styles';
import { PageContent } from '../../components/common/PageContent';
import { NavBar } from './NavBar';

export const InsidePage = () => {
  return (
    <PageWrapper>
      <NavBar />
      <PageContent />
    </PageWrapper>
  );
};
