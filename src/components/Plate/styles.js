import styled from "styled-components";

export const Container = styled.div`
  border-radius: 8px;
  border: 1px solid #000204;
  background: #00070a;
  padding: 2.4rem;

  /* width: 100%;
  max-width: 278px; */

  width: 278px;

  position: relative;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;

  /* background-color: #c9c9c9;
  color: #000204; */

  > h2 {
    font-family: Poppins;
    font-size: 1.4rem;
    font-style: normal;
    font-weight: 500;
    line-height: 2.4rem;
    text-align: center;
  }

  > p {
    color: var(--Light-Light-400, #c4c4cc);
    text-align: center;

    font-size: 1.4rem;
    font-style: normal;
    font-weight: 400;
    line-height: 160%;

    display: block;
  }

  > span {
    color: var(--Tints-Cake-200, #82f3ff);
    text-align: center;

    font-size: 1.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%;
  }
`;

export const Image = styled.div`
  width: 100%;
  margin: 0 auto;
  max-width: 8.8rem;

  align-items: center;

  > img {
    display: flex;
    width: 8.8rem;
    height: 8.8rem;
    justify-content: center;
    align-items: center;

    margin: 0 auto;
  }
`;

export const Icon = styled.div`
  width: 2.4rem;
  height: 2.2rem;

  position: absolute;
  top: 1rem;
  right: 1rem;
`;

export const AddItem = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.4rem;

  margin-top: 1.4rem;

  > button {
    border: none;
    background: transparent;
    width: 2.4rem;
    height: 2.4rem;

    color: #fff;
  }
`;
