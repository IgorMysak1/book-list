import { initialValidFormModifyBook } from "../admin";
import { IBook } from "../types";

export const createListOfFields = (data: IBook) =>
  Object.entries(data).reduce<any>((acc, [key, value]) => {
    const findBookState = initialValidFormModifyBook.find(
      ({ field }) => field === key
    );
    return [...acc, { ...findBookState, value, valid: true }];
  }, []);
