import styled from "styled-components";

// Product

export const ProductWrapper = styled.div`
  max-width: 87.5rem;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 10px;
  background-color: ${({ theme }) => theme["gray-700"]};

  h1 {
  }
`;

// Products

export const ProductsWrapper = styled.div`
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 0 1rem;

  h1 {
    margin: 3rem 0;
  }
`;
