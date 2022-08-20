import styled, { ThemeProvider } from "styled-components";
import { RouterConfig } from "./navigation";
import { breakpoints } from "./styles";
import { Header } from "./components";
import { AppContext } from "./context";
import React, { useContext } from "react";
import { themeColors } from "./theme";
import { createGlobalStyle } from "styled-components";
import { IColorsTheme, ITheme } from "./types";

function App() {
  const { theme } = useContext(AppContext);

  return (
    <ThemeProvider theme={themeColors[theme as keyof ITheme]}>
      <Container>
        <Header />
        <RouterConfig />
        <GlobalStyle />
      </Container>
    </ThemeProvider>
  );
}

export default App;

const Container = styled.div`
  min-height: 100vh;
  max-width: 1170px;
  margin: 0 auto;
  padding: 15px 25px;
  @media (max-width: ${breakpoints.xl}) {
    max-width: 970px;
  }
  @media (max-width: ${breakpoints.lg}) {
    max-width: 750px;
  }
  @media (max-width: ${breakpoints.md}) {
    max-width: none;
  }
  @media (max-width: ${breakpoints.xs}) {
    padding: 10px;
  }
`;

const GlobalStyle = createGlobalStyle<{ theme: IColorsTheme }>`
  body {
    background: ${({ theme }) => theme.main};
    color: ${({ theme }) => theme.text};
  }
`;
