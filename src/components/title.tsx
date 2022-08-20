import React from "react";
import styled from "styled-components";
import { deviceBreakpoints } from "../styles";

enum fontSize {
  large = 36,
  medium = 28,
  small = 22,
}

interface TitleProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
  fz: keyof typeof fontSize;
}
export const Title: React.FC<TitleProps> = ({
  children,
  color,
  fz = "medium",
  className,
}) => {
  return (
    <TitleStyle className={className} color={color} fz={fontSize[fz]}>
      {children}
    </TitleStyle>
  );
};

const TitleStyle = styled.h1`
  font-size: ${({ fz }: { fz: number }) => fz}px;
  color: ${({ theme, color }) => color ?? theme.text};
  text-transform: capitalize;
  @media (${deviceBreakpoints.lg}) {
    font-size: ${({ fz }: { fz: number }) => fz - 2}px;
  }
  @media (${deviceBreakpoints.sm}) {
    font-size: ${({ fz }: { fz: number }) => fz - 4}px;
  }
`;
