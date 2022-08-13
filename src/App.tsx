import React, { useState } from "react";
import { ThemeProvider } from "styled-components";
import { themeColors } from "./theme";
import { IThemeColors } from "./types";

function App() {
  const [currentTheme, setCurrentTheme] = useState<IThemeColors>("light");
  return (
    <ThemeProvider theme={themeColors[currentTheme]}>
      <div className="App"></div>
    </ThemeProvider>
  );
}

export default App;
