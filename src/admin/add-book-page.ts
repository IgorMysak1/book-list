import { IBook, IValidFieldsModifyingBook } from "../types";

export const initialBookState = {
  id: 1,
  title: "",
  description: "",
  author: "",
  category: "",
  isbn: "",
  isbnLines: "4707309846638",
  favorite: false,
} as IBook;

export const initialValidFormModifyBook = [
  {
    field: "id",
    value: 1,
    regexp: /\S/,
  },
  {
    field: "title",
    value: "",
    regexp: /\s*(?:[\w\.]\s*){4,}/,
    hint: "enter more than 3 symbols",
  },
  {
    field: "description",
    value: "Add description to remebeber better about book",
    regexp: /\s*(?:[\w\.]\s*){20,}/,
    hint: "enter more than 20 symbols",
  },
  {
    field: "author",
    value: "Add author",
    regexp: /\s*(?:[\w\.]\s*){4,}/,
    hint: "enter more than 3 symbols",
  },
  {
    field: "category",
    value: "What is category?",
    regexp: /\s*(?:[\w\.]\s*){4,}/,
    hint: "enter more than 3 symbols",
  },
  {
    field: "isbn",
    value: "isbn",
    regexp: /^[0-9]{13}$/,
    hint: "the field must contain strictly 13 digits",
  },
  {
    field: "isbnLines",
    value: "4707309846638",
    regexp: /\S/,
    hint: "",
  },
  {
    field: "favorite",
    value: false,
    regexp: /\S/,
    hint: "",
  },
] as IValidFieldsModifyingBook[];
