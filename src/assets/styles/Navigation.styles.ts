import styled from 'styled-components';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

export const NavWrapper = styled(Navbar)`
  width: 100%;
  display: flex;
  padding: 30px 20px 10px 30px;
  border-bottom: 2px solid ${({ theme }) => theme.colors.border};
`;

export const Logo = styled(Navbar.Brand)`
  text-decoration: none;
  color: ${({ theme }) => theme.colors.textAndButton};
  font-size: ${({ theme }) => theme.fontSize.xxl};

  &:hover {
    color: ${({ theme }) => theme.colors.textAndButton};
  }
`;

export const ContentButton = styled(Nav.Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textAndButton};
  margin: 5px;
  padding: 0 25px;
  font-size: 1.15rem;
  justify-content: flex-end;
  align-self: center;
  border: none;
  text-decoration: none;
  &:hover {
    color: ${({ theme }) => theme.colors.hoverTextAndButton};
  }
`;

export const LoginButton = styled(Nav.Link)`
  background-color: transparent;
  color: ${({ theme }) => theme.colors.textAndButton};
  margin: 10px;
  margin-left: 50px;
  font-size: 1.1rem;
  align-self: center;
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
  color: ${({ theme }) => theme.colors.backgroundPrimary};
  font-weight: bold;
  background-color: ${({ theme }) => theme.colors.textAndButton};
  border-radius: 20px;
  border: 1px solid transparent;
  align-self: center;
  padding: 2px 10px;
  margin-left: 15px;
  text-decoration: none;

  &:hover {
    box-shadow: 3px 3px 7px 0px rgba(66, 68, 90, 1);
    color: ${({ theme }) => theme.colors.backgroundPrimary};
  }

  @media (max-width: 992px) {
    margin-left: 0px;
  }
`;
