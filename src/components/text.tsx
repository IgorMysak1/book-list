import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  color?: string;
  className?: string;
}
export const Text: React.FC<TextProps> = ({ children, color, className }) => {
  return (
    <TextStyle className={className} color={color}>
      {children}
    </TextStyle>
  );
};

const TextStyle = styled.p`
  font-size: 18px;
  color: ${({ theme, color }) => color ?? theme.text};
`;
