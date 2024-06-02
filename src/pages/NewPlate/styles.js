import styled from "styled-components";
import { DEVICE_BREAKPOINTS } from "../../styles/deviceBreakpoints";
export const Container = styled.div`
  width: 100%;

  padding: 1rem 2rem;
`;

export const Form = styled.form`
  width: 100%;
  max-width: 76.8rem;
  margin: 0 auto;

  display: flex;
  flex-direction: column;
  gap: 2.4rem;

  > header {
    > div:first-child {
      a {
        font-size: 1.6rem;
      }

      > svg {
        font-size: 1.6rem;
      }
      @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
        a {
          font-size: 2.4rem;
        }

        > svg {
          font-size: 3.2rem;
        }
      }
    }

    h2 {
      font-family: Poppins;
      font-size: 3.2rem;
      font-style: normal;
      font-weight: 500;
      line-height: 140%;

      margin-bottom: 2.4rem;
    }
  }

  label {
    font-size: 1.6rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }

  .wrapper-input {
    display: flex;
    flex-direction: column;
    gap: 1.6rem;

    input::placeholder {
      font-size: 1.4rem;
    }
  }

  .wrapper-input:first-child {
    input::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }

    svg {
      color: ${({ theme }) => theme.COLORS.GRAY_100};
    }
  }

  @media (min-width: ${DEVICE_BREAKPOINTS.LG}) {
    max-width: 124rem;

    .wrapper {
      display: flex;
      gap: 3.2rem;
    }

    .wrapper-input:first-child {
      flex: 2;
    }

    .wrapper-input:nth-child(2),
    .wrapper-input:nth-child(3) {
      flex: 3;
    }
    .flex2:nth-child(2) {
      flex: 1;
    }

    .footer {
      width: 100%;

      display: flex;
      justify-content: end;
      gap: 3.2rem;

      button {
        max-width: 17.2rem;
        padding: 1.2rem 2.1rem;
      }
    }
  }
`;
