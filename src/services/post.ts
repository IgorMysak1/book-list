import { IBook } from "../types";
import { mixSymbolsString } from "../utils";

export const addBookRequest = async (book: IBook) => {
  const id = new Date().getTime() * Math.floor(Math.random() * (50 - 2)) + 2;
  const isbnLines = mixSymbolsString(book.isbnLines);

  const response = await fetch("http://localhost:3001/books", {
    method: "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      ...book,
      id,
      isbnLines,
    }),
  });
  return await response.json();
};
