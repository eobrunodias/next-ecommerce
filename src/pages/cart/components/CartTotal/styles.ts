import styled from "styled-components";

export const CartTotalContainer = styled.div`
  padding: 1rem;
  font-size: 1.5rem;

  display: flex;
  justify-content: flex-end;
  align-items: center;
  background-color: ${({ theme }) => theme["gray-500"]};
  color: ${({ theme }) => theme["gray-900"]};
  border-radius: 0 0 10px 10px;

  strong {
    margin-right: 8px;
  }
`;
