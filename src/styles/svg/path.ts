import styled from "styled-components";

export const Path = styled.path`
  fill: ${({ theme, fill = null }) => fill ?? theme.text};
`;
