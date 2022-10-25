import styled, { css } from "styled-components";

export const Home = styled.main`
  ${({ theme }) => css`
    background-image: ${theme.constants.xboxBackground};
    background-repeat: no-repeat;
    background-size: cover;
    width: 100vw;
    height: 100vh;
    display: grid;
  `}
`;

export const HomeTitle = styled.h1`
  ${({ theme }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bold;
    padding: .2rem;
    background-color: black;
    color: ${theme.colors.thirdBgColor};
    ${theme.mixins.logoStyle};
  `}
`;

export const HomeSection = styled.section`
  ${() => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 1.5rem;
  `}
`;

export const HomeDescription = styled.p`
  ${({ theme }) => css`
    font-style: oblique;
    font-size: 8rem;
    ${theme.mixins.bodyStyle}
    color: ${theme.colors.titleColor};
    background-color: black;
    ::selection {
      background: transparent;
      color: ${theme.colors.textColor};
    }
  `}
`;

export const IconLog = styled.i`
  ${({ theme }) => css`
    font-size: 8rem;
    color: ${theme.colors.thirdBgColor};
    margin: 2rem auto;
    cursor: pointer;
    transition: all ease-in-out 0.6s;
    :hover {
      transform: scale(1.3);
    }
  `}
`;
