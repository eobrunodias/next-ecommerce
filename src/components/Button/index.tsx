import { ButtonHTMLAttributes, ReactNode } from "react";
import { StyledButton } from "./styles";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
}

export default function Button({ children }: ButtonProps) {
  return (
    <StyledButton>
      <span>{children}</span>
    </StyledButton>
  );
}
