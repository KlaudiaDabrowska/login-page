import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  position: absolute;
  top: 35%;
  left: 50%;
`;

export const HeaderOne = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xxl};
  color: ${({ theme }) => theme.colors.darkerBackgroundPrimary};
`;

export const HeaderTwo = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-top: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.darkerBackgroundPrimary};
`;

export const HeaderThree = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.m};
  margin-top: ${({ theme }) => theme.spacing.m};
  color: ${({ theme }) => theme.colors.darkerBackgroundPrimary};
`;
