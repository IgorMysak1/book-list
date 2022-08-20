import { IBook } from "../types";

export const initialBookState = {
  id: 1,
  title: "Title",
  description: "Add description to remebeber better about book",
  author: "Add author",
  category: "What is category?",
  isbn: "isbn",
  isbnLines: "4707309846638",
  favorite: false,
} as IBook;
