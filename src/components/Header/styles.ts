import styled from "styled-components";

export const HeaderContainer = styled.header`
  background-color: ${({ theme }) => theme["gray-700"]};
`;

export const HeaderWrapper = styled.div`
  max-width: 87.5rem;
  margin: 0 auto;
  padding: 1rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  a {
    text-decoration: none;
    color: ${({ theme }) => theme.white};
  }

  nav {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
`;
