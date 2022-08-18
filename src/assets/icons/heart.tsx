import React from "react";
import { Svg, Path } from "../../styles";
import { ISvg } from "../../types";

export const HeartSVG: React.FC<ISvg> = ({ className, handleClick }) => {
  return (
    <Svg
      width="23"
      height="21"
      viewBox="0 0 27 25"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={handleClick}
    >
      <Path d="M13.465 20.734L13.332 20.867L13.184 20.734C6.852 14.988 2.664 11.187 2.664 7.332C2.664 4.668 4.664 2.668 7.332 2.668C9.387 2.668 11.387 4 12.094 5.812H14.57C15.277 4 17.277 2.668 19.332 2.668C22 2.668 24 4.668 24 7.332C24 11.187 19.812 14.988 13.465 20.734ZM19.332 0C17.012 0 14.785 1.078 13.332 2.773C11.879 1.078 9.652 0 7.332 0C3.227 0 0 3.215 0 7.332C0 12.359 4.531 16.48 11.398 22.707L13.332 24.465L15.266 22.707C22.132 16.48 26.664 12.359 26.664 7.332C26.664 3.215 23.437 0 19.332 0Z" />
    </Svg>
  );
};
