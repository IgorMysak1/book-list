import React, { useState, Dispatch, SetStateAction } from "react";
import { IToggleChecker } from "../types";
import { GenerallyThemeColors } from "../admin";

type IAppContext = {
  themes: IToggleChecker[];
  setThemes: Dispatch<SetStateAction<IToggleChecker[]>>;
};
export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [themes, setThemes] = useState<IToggleChecker[]>(GenerallyThemeColors);
  return (
    <AppContext.Provider value={{ themes, setThemes }}>
      {children}
    </AppContext.Provider>
  );
};
