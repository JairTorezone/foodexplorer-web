import styled from "styled-components";

export const Container = styled.div`
  padding: 2rem;

  display: flex;
  align-items: center;

  > svg {
    font-size: 3.2rem;
  }

  a {
    font-family: Poppins;
    font-size: 2.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;

    color: ${({ theme }) => theme.COLORS.GRAY_300};
  }
`;
