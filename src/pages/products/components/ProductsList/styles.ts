import styled from "styled-components";

export const ProductListWrapper = styled.div`
  margin: 0 auto 3rem;
  max-width: 87.5rem;

  display: grid;
  grid-template-columns: repeat(3, minmax(18.75rem, auto));

  align-items: end;
  justify-items: space-between;
  flex-wrap: wrap;

  background-color: ${({ theme }) => theme["gray-600"]};
  border-radius: 10px;

  padding: 2rem;
  gap: 2rem;

  @media (max-width: 1440px) {
    grid-template-columns: repeat(2, minmax(18.75rem, auto));
  }

  @media (max-width: 960px) {
    grid-template-columns: repeat(1, minmax(1rem, auto));
  }

  @media (max-width: 510px) {
    img {
      height: 150px;
      width: 210px;
    }
  }
`;
