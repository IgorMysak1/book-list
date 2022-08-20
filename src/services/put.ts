import { IBook } from "../types";

export const updateBookRequest = async (book: IBook) => {
  const response = await fetch(`http://localhost:3001/books/${book.id}`, {
    method: "PUT",
    headers: {
      "Content-type": "application/json; charset=UTF-8",
    },
    body: JSON.stringify(book),
  });
  return await response.json();
};
