import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children: React.ReactNode;
  handleClick?: () => void;
  className?: string;
  type?: "button" | "reset" | "submit";
  fullWidth?: boolean;
}
export const Button: React.FC<ButtonProps> = ({
  children,
  handleClick,
  className,
  type = "button",
  fullWidth = false,
}) => {
  return (
    <ButtonStyled
      type={type}
      fullWidth={fullWidth}
      onClick={handleClick}
      className={className}
    >
      {children}
    </ButtonStyled>
  );
};

const ButtonStyled = styled.button`
  width: ${({ fullWidth }: { fullWidth: boolean }) =>
    fullWidth ? "100%" : "fit-content"};
  border: 0;
  background: ${({ theme }) => theme.secondary};
  color: ${({ theme }) => theme.text};
  padding: 10px 20px;
  cursor: pointer;
`;
