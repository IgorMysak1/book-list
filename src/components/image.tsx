import React from "react";
import styled from "styled-components";

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
  height?: string;
  width?: string;
  handleClick?: () => void;
}
export const Image: React.FC<ImageProps> = ({
  src,
  alt,
  className,
  height = "auto",
  width = "auto",
  handleClick,
}) => {
  return (
    <ImageStyled
      className={className}
      src={src}
      alt={alt}
      height={height}
      width={width}
      onClick={handleClick}
    />
  );
};

const ImageStyled = styled.img`
  height: ${({ height }) => height};
  width: ${({ width }) => width};
`;
