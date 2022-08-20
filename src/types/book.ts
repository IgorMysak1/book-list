export type IBook = {
  id: number;
  title: string;
  description: string;
  author: string;
  category: string;
  isbn: string;
  isbnLines: string;
  favorite: boolean;
};

export interface IModifyBook {
  state: IBook;
  callAction: (book: IBook) => Promise<IBook> | null;
  type: "add" | "edit" | "review";
  success: boolean;
}
