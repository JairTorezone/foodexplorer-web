import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  height: 100vh;

  display: flex;
  flex-direction: column;
  justify-content: center;

  padding: 0px 10px;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 0;
    margin: auto;

    max-width: 132rem;
    flex-direction: row;
    align-items: center;
  }
`;

export const Banner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  gap: 10px;

  margin-bottom: 73px;

  > h1 {
    font-size: 3.5rem;
    font-style: normal;
    font-weight: 700;
    line-height: normal;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin: 0px auto;

    > h1 {
      font-size: 4.7rem;
    }
  }
`;
export const Form = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 25rem;

  > h2 {
    display: none;
    font-size: 3.2rem;
    margin-bottom: 3.2rem;
  }

  > a {
    display: block;
    text-align: center;
    margin-top: 3.2rem;
    text-decoration: nome;

    font-family: Poppins;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 24px;

    cursor: pointer;

    /* border: 1px solid red; */
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 47.6rem;
    padding: 6.4rem;
    border-radius: 16px;

    background: ${({ theme }) => theme.COLORS.BACKGROUND_700};

    > h2 {
      display: block;
    }
  }
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;

  margin-bottom: 2.5rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    margin-bottom: 3.2rem;
  }
`;
