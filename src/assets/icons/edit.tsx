import React from "react";
import { Svg, Path } from "../../styles";
import { ISvg } from "../../types";

export const EditSVG: React.FC<ISvg> = ({ className, handleClick }) => {
  return (
    <Svg
      width="23"
      height="22"
      viewBox="0 0 25 24"
      fill="#AB7C94 !important"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      onClick={handleClick}
    >
      <Path d="M14.746 8.00013L16 9.25413L3.895 21.3321H2.668V20.1051L14.746 8.00013ZM19.546 0.000131115C19.215 0.000131115 18.867 0.133131 18.613 0.387131L16.172 2.82813L21.172 7.82813L23.613 5.38713C24.133 4.86713 24.133 4.00013 23.613 3.50713L20.493 0.387131C20.3693 0.262258 20.2217 0.163623 20.0589 0.0971269C19.8962 0.0306312 19.7218 -0.00235856 19.546 0.000131115M14.746 4.25413L0 19.0001V24.0001H5L19.746 9.25413L14.746 4.25413Z" />
    </Svg>
  );
};
