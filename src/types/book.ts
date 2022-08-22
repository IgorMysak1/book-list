export interface IBook {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  isbn: string;
  isbnLines: string;
  favorite: boolean;
}

export interface IValidFieldsModifyingBook {
  field: keyof IBook;
  value: string;
  regexp: RegExp;
  hint: string;
  valid: boolean;
}
export interface IModifyBook {
  state: IBook;
  callAction: (book: IBook) => Promise<IBook> | null;
  type: "add" | "edit" | "review";
}
