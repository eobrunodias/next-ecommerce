import styled from "styled-components";

export const ProductDetailsContainer = styled.div`
  background-color: ${({ theme }) => theme["white"]};
  border-radius: 10px;
  gap: 1rem;

  display: flex;
  align-items: center;

  padding: 1rem 3rem;

  @media (max-width: 1280px) {
    flex-direction: column;

    img {
      object-fit: contain;
      height: 400px;
      width: 400px;
    }

    div {
      font-size: 0.8rem;
    }
  }

  div {
    width: 50%;

    color: ${({ theme }) => theme["gray-900"]};
    display: flex;
    flex-direction: column;
    gap: 1rem;

    text-align: justify;
  }

  img {
    object-fit: cover;
    width: 50%;
    /* border-radius: 10px; */
  }
`;
