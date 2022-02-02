import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavWrapper = styled(Navbar)`
  display: flex;
  padding: 30px 20px 10px 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.navBorder};
`;

export const Logo = styled(Navbar.Brand)`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.textAndButton};
  text-decoration: none;

  &:hover {
    color: ${({ theme }) => theme.colors.textAndButton};
  }
`;

export const ContentButton = styled(Nav.Link)`
  align-self: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textAndButton};
  margin: ${({ theme }) => theme.spacing.xxs};
  padding: 0 25px;
  font-size: ${({ theme }) => theme.fontSize.s};
  border: none;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.hoverTextAndButton};
  }
`;

export const LoginButton = styled(Nav.Link)`
  align-self: center;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textAndButton};
  margin: ${({ theme }) => theme.spacing.xs};
  margin-left: ${({ theme }) => theme.spacing.xxl};
  font-size: ${({ theme }) => theme.fontSize.xs};
  border: none;
  font-weight: bold;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.hoverTextAndButton};
  }

  @media (max-width: 992px) {
    margin-left: 0px;
    margin-right: 0px;
  }
`;

export const SignUpButton = styled(Nav.Link)`
  align-self: center;
  padding: 2px 10px;
  margin-left: ${({ theme }) => theme.spacing.s};
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  background-color: ${({ theme }) => theme.colors.textAndButton};
  border-radius: 20px;
  border: 1px solid transparent;
  font-weight: bold;
  text-decoration: none;

  &:hover {
    box-shadow: 3px 3px 7px 0px rgba(66, 68, 90, 1);
    color: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;
