import React from "react";
import styled from "styled-components";
import { deviceBreakpoints } from "../styles";

interface TitleProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}
export const Title: React.FC<TitleProps> = ({ children, color, className }) => {
  return (
    <TitleStyle className={className} color={color}>
      {children}
    </TitleStyle>
  );
};

const TitleStyle = styled.h1`
  font-size: 30px;
  color: ${({ theme, color }) => color ?? theme.text};
  @media (${deviceBreakpoints.lg}) {
    font-size: 24px;
  }
  @media (${deviceBreakpoints.sm}) {
    font-size: 20px;
  }
`;
