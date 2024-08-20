import styled from "styled-components";

export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme["gray-700"]};
  color: ${({ theme }) => theme["white"]};
  padding: 1rem;
  border-radius: 10px;
  font-size: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;
