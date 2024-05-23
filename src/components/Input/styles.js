import styled from "styled-components";

export const Container = styled.div`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_900};

  border-radius: 8px;

  padding: 0 16px;

  > input {
    width: 100%;

    padding: 1.2rem 1.4rem;
    font-size: 1.2rem;

    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: ${({ theme }) => theme.COLORS.BACKGROUND_900};
    border: none;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }

    > svg {
      color: ${({ theme }) => theme.COLORS.GRAY_500};
    }
  }
`;
