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

    padding: 12px 14px;
    font-size: 12px;

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
