import styled from "styled-components";

export const Container = styled.button`
  width: 100%;
  padding: 1.2rem 3.2rem;
  border-radius: 0.5rem;
  cursor: pointer;

  background-color: ${({ theme, $isedit }) =>
    $isedit ? theme.COLORS.BACKGROUND_800 : theme.COLORS.TOMATO_400};

  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;

  color: ${({ theme }) => theme.COLORS.GRAY_100};
  border: none;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 5px;
`;
