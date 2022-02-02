import React from 'react';
import { RedirectText, RedirectWrapper, StyledLink } from '../../assets/styles/Redirect.style';

interface RedirectProp {
  RedirectTxt: string;
  RedirectLinkTo: string;
  RedirectLinkName: string;
}

export const Redirect = ({ RedirectTxt, RedirectLinkTo, RedirectLinkName }: RedirectProp) => {
  return (
    <RedirectWrapper>
      <RedirectText>{RedirectTxt}</RedirectText>
      <StyledLink to={RedirectLinkTo}>{RedirectLinkName}</StyledLink>
    </RedirectWrapper>
  );
};
