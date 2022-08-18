import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { IBook, IToggleChecker } from "../types";
import { GenerallyThemeColors } from "../admin";
import { getBooksRequest } from "../services";

type IAppContext = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  books: IBook[];
  setBooks: Dispatch<SetStateAction<IBook[]>>;
};
export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [books, setBooks] = useState<IBook[]>([]);

  useEffect(() => {
    (async () => {
      const data = await getBooksRequest();
      setBooks(data);
    })();
  }, []);
  return (
    <AppContext.Provider value={{ theme, setTheme, books, setBooks }}>
      {children}
    </AppContext.Provider>
  );
};
