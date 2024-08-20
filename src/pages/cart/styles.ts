import styled from "styled-components";

export const CartWrapper = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    margin: 3rem 0;
  }

  main {
    margin: 3rem 0;
    background-color: ${({ theme }) => theme["gray-600"]};
    border-radius: 10px;
    padding: 2rem;

    div {
      > div:first-child {
        margin-bottom: 2rem;
      }
    }

    .content-cart {
      background-color: ${({ theme }) => theme.white};
      border-radius: 10px;
    }
  }
`;
