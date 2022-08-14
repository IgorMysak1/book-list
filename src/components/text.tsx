import React from "react";
import styled from "styled-components";

interface TextProps {
  children: React.ReactNode;
  color: string;
}
export const Text: React.FC<TextProps> = ({ children, color }) => {
  return <TextStyle color={color}>{children}</TextStyle>;
};

const TextStyle = styled.h1`
  font-size: 18px;
  color: ${({ theme, color }) => color ?? theme.text};
`;
