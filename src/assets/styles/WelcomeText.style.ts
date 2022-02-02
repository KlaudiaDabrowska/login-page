import styled from 'styled-components';

export const WelcomeWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  flex-direction: column;
`;

export const Header = styled.h3`
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  font-size: ${({ theme }) => theme.fontSize.xxl};
  text-align: center;
  margin-top: 10vh;
  margin-bottom: 10vh;
`;

export const StyledWelcomeTxt = styled.div`
  text-align: center;
  margin-bottom: ${({ theme }) => theme.spacing.m};
  font-size: ${({ theme }) => theme.fontSize.s};
  color: #4a5f759c;
`;
