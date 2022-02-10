import React from 'react';
import { RedirectText, RedirectWrapper, StyledLink } from '../../styles/Redirect.style';

interface RedirectProp {
  redirectTxt?: string;
  redirectLinkTo: string;
  redirectLinkName: string;
}

export const Redirect = ({ redirectTxt, redirectLinkTo, redirectLinkName }: RedirectProp) => {
  return (
    <RedirectWrapper>
      <RedirectText>{redirectTxt}</RedirectText>
      <StyledLink to={redirectLinkTo}>{redirectLinkName}</StyledLink>
    </RedirectWrapper>
  );
};
