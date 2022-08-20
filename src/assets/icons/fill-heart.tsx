import React from "react";
import { Svg, Path } from "../../styles";
import { ISvg } from "../../types";

export const FillHeartSVG: React.FC<ISvg> = ({ className, handleClick }) => {
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
      <Path
        fill={"#cf6969"}
        d="M13.332 24.465L11.398 22.707C4.532 16.48 0 12.359 0 7.332C0 3.215 3.227 0 7.332 0C9.652 0 11.879 1.078 13.332 2.773C14.785 1.078 17.012 0 19.332 0C23.437 0 26.664 3.215 26.664 7.332C26.664 12.359 22.133 16.48 15.266 22.707L13.332 24.465Z"
      />
    </Svg>
  );
};
