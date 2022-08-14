enum AllowedBreakpoints {
  xs = "xs",
  sm = "sm",
  md = "md",
  lg = "lg",
  xl = "xl",
  xxl = "xxl",
}

export type IBreakpoints = {
  [key in AllowedBreakpoints]: string;
};
