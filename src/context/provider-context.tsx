import React, { useState, Dispatch, SetStateAction, useEffect } from "react";
import { IBook, IModifyBook } from "../types";
import { initialBookState } from "../admin";
import { getBooksRequest } from "../services";

type IAppContext = {
  theme: string;
  setTheme: Dispatch<SetStateAction<string>>;
  books: IBook[];
  setBooks: Dispatch<SetStateAction<IBook[]>>;
  modifyBook: IModifyBook;
  setModifyBook: Dispatch<SetStateAction<IModifyBook>>;
};
export const AppContext = React.createContext<IAppContext>({} as IAppContext);

export const AppProvider: React.FC<{
  children: React.ReactNode;
}> = ({ children }) => {
  const [theme, setTheme] = useState<string>("light");
  const [books, setBooks] = useState<IBook[]>([]);
  const [modifyBook, setModifyBook] = useState<IModifyBook>({
    state: initialBookState,
    callAction: () => null,
    type: "review",
  });

  useEffect(() => {
    (async () => {
      const data = await getBooksRequest();
      setBooks(data);
    })();
  }, []);
  return (
    <AppContext.Provider
      value={{
        theme,
        setTheme,
        books,
        setBooks,
        modifyBook,
        setModifyBook,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};
