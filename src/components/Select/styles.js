import styled from "styled-components";

export const Container = styled.div`
  select {
    color: ${({ theme }) => theme.COLORS.GRAY_400};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};

    width: 100%;
    padding: 1.3rem 1.6rem;
    border: transparent;
    border-radius: 8px;
    outline: none;

    padding: 1.6rem;
    font-size: 1.6rem;

    margin-bottom: 10px;
  }
`;
