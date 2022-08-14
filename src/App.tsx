import styled, { ThemeProvider } from "styled-components";
import { RouterConfig } from "./navigation";
import { breakpoints } from "./styles";
import { Header } from "./components";
import { AppContext } from "./hooks";
import React, { useContext } from "react";
import { themeColors } from "./theme";

function App() {
  const { themes } = useContext(AppContext);
  const findCurrentTheme = () => {
    const theme = themes.find(({ checked }) => checked);
    return theme?.content ?? "light";
  };
  return (
    <ThemeProvider
      theme={themeColors[findCurrentTheme() as keyof typeof themeColors]}
    >
      <Container>
        <Header />
        <RouterConfig />
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
    padding: 20px 10px;
  }
`;
