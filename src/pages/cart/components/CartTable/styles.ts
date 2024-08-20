import styled from "styled-components";

export const CartTableRowContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-evenly;

  img {
    object-fit: cover;
    width: 50%;
  }

  @media (max-width: 960px) {
    flex-direction: column;

    img {
      height: 100px;
      width: 100px;
    }

    .details {
      font-size: 0.8rem;
    }
  }

  div {
    gap: 1rem;
    display: flex;
    flex-direction: column;
    color: ${({ theme }) => theme["gray-900"]};

    span {
      text-align: start;
    }

    div {
      display: flex;
      align-items: center;
      flex-direction: row;
      gap: 5px;
    }
  }
`;

export const CartTableContainer = styled.div`
  width: 100%;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
`;

export const Button = styled.button`
  border: none;
  border-radius: 10px;
  font-size: 1.2rem;
  padding: 0.6125rem 1.225rem;
  cursor: pointer;

  transition: background-color 0.2s;

  &:hover {
    filter: brightness(0.85);
  }
`;

export const ButtonPlus = styled(Button)`
  font-weight: bold;

  color: ${({ theme }) => theme["white"]};
  background-color: ${({ theme }) => theme["green-300"]};
`;

export const ButtonMinus = styled(Button)`
  font-weight: bold;

  color: ${({ theme }) => theme["white"]};
  background-color: ${({ theme }) => theme["red-500"]};
`;
