import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";

export const Container = styled.div`
  width: 100%;
  max-width: 132rem;
  height: 77px;
  padding: 2.7rem 1rem;

  margin: 0 auto;

  display: flex;
  justify-content: space-between;
  align-items: center;

  background: ${({ theme }) => theme.COLORS.BACKGROUND_600};

  > p {
    font-size: 0.8rem;
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    p {
      font-size: 1.4rem;
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    padding: 2.7rem 12.3rem;

    p {
      font-size: 1.6rem;
    }
  }
`;

export const Logo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 7px;
  font-size: 1.2rem;

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    gap: 1rem;
  }

  > svg {
    width: 2.9rem;
    height: 2.4rem;
  }

  h1 {
    font-size: 1.2rem;
    color: ${({ theme }) => theme.COLORS.GRAY_700};
  }
  @media (min-width: ${DEVICE_BREAKPOINTS.SM}) {
    h1 {
      font-size: 2.4rem;
    }
  }
`;
