import styled from "styled-components";

export const Container = styled.textarea`
  width: 100%;
  height: 172px;

  color: ${({ theme }) => theme.COLORS.GRAY_400};
  background: ${({ theme }) => theme.COLORS.BACKGROUND_800};

  border: none;
  resize: none;

  margin-bottom: 8px;
  border-radius: 10px;
  padding: 1.2rem;

  &::placeholder {
    color: ${({ theme }) => theme.COLORS.GRAY_500};
  }
`;
