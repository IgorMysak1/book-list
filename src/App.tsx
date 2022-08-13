import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { themeColors } from "./theme";
import { IThemeColors } from "./types";
import { RouterConfig } from "./navigation";

function App() {
  const [currentTheme, setCurrentTheme] = useState<IThemeColors>("light");
  return (
    <BrowserRouter>
      <ThemeProvider theme={themeColors[currentTheme]}>
        <RouterConfig />
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;
