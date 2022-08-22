import React from "react";
import styled from "styled-components";
import { capitalizeFirstLetter } from "../utils";

enum fontSize {
  large = 22,
  medium = 16,
  small = 14,
}

interface TextProps {
  children: React.ReactNode;
  color?: string;
  fz: keyof typeof fontSize;
  className?: string;
}
export const Text: React.FC<TextProps> = ({
  children,
  color,
  fz,
  className,
}) => {
  return (
    <TextStyle className={className} color={color} fz={fontSize[fz]}>
      {typeof children === "string"
        ? capitalizeFirstLetter(children)
        : children}
    </TextStyle>
  );
};

const TextStyle = styled.p`
  font-size: ${({ fz }: { fz: number }) => fz}px;
  color: ${({ theme, color }) => color ?? theme.text};
`;
