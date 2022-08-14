import { IBreakpoints } from "../../types";

export const breakpoints = {
  xs: "499.98px",
  sm: "639.98px",
  md: "767.98px",
  lg: "991.98px",
  xl: "1199.98px",
  xxl: "1799.98px",
} as IBreakpoints;

export const deviceBreakpoints = {
  xs: `max-width: ${breakpoints.xs}`,
  sm: `max-width: ${breakpoints.sm}`,
  md: `max-width: ${breakpoints.md}`,
  lg: `max-width: ${breakpoints.lg}`,
  xl: `max-width: ${breakpoints.xl}`,
  xxl: `max-width: ${breakpoints.xxl}`,
} as IBreakpoints;
