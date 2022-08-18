import React from "react";
import { Svg, Path } from "../../styles";
import { ISvg } from "../../types";

export const ArrowSVG: React.FC<ISvg> = ({ handleClick, className }) => {
  return (
    <Svg
      width="15"
      height="9"
      viewBox="0 0 15 9"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={handleClick}
    >
      <Path d="M12.617 0.389999L7.445 5.562L2.273 0.39C1.753 -0.13 0.909996 -0.13 0.389996 0.39C-0.129999 0.91 -0.129999 1.75 0.389996 2.269L6.511 8.389C7.031 8.909 7.871 8.909 8.391 8.389L14.511 2.269C15.031 1.749 15.031 0.909 14.511 0.389C13.991 -0.118 13.136 -0.129 12.617 0.389999Z" />
    </Svg>
  );
};
