import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
  className?: string;
  type?: "button" | "reset" | "submit";
}
export const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  className,
  type = "button",
}) => {
  return (
    <ButtonStyled type={type} onClick={handleClick} className={className}>
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: 100%;
  border: 0;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  cursor: pointer;
  text-transform: capitalize;
`;
