import styled from "styled-components";

export const ProductCardContainer = styled.div`
  margin: 0 auto;
  max-width: 87.5rem;

  display: flex;
  flex-direction: column;

  background-color: ${({ theme }) => theme["white"]};
  align-items: center;

  border-radius: 10px;
  position: relative;
`;

export const FooterCard = styled.div`
  background-color: ${({ theme }) => theme["gray-500"]};
  width: 100%;
  padding: 1rem;
  border-radius: 0 0 10px 10px;
  margin-top: 2rem;

  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme["gray-900"]};
    font-size: 1.5rem;
  }

  .price {
    color: ${({ theme }) => theme["gray-900"]};
    font-weight: bold;
  }
`;
