import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const RedirectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  margin-top: ${({ theme }) => theme.spacing.xxxl};
`;

export const RedirectText = styled.div`
  font-size: ${({ theme }) => theme.fontSize.xxs};
`;

export const StyledLink = styled(Link)`
  align-self: center;
  font-size: ${({ theme }) => theme.fontSize.xxs};
  margin-left: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.backgroundPrimary};

  &:hover {
    color: ${({ theme }) => theme.colors.darkerBackgroundPrimary};
  }
`;
