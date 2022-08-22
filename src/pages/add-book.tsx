import React, { useContext, useEffect, useState } from "react";
import { BookCard, Form } from "../components";
import styled from "styled-components";
import { AppContext } from "../context";
import { IBook } from "../types";
import { deviceBreakpoints } from "../styles";
import { addBookRequest } from "../services";
import { initialBookState, initialValidFormModifyBook } from "../admin";

export const AddBook: React.FC = () => {
  const { modifyBook, setModifyBook, books, setBooks } = useContext(AppContext);
  const [book, setBook] = useState<IBook>(modifyBook.state);

  const getBookState = (book: IBook) => setBook(book);

  const createListOfFields = () => {
    return Object.entries(modifyBook.state).reduce<any>((acc, [key, value]) => {
      const findBookState = initialValidFormModifyBook.find(
        ({ field }) => field === key
      );
      return [...acc, { ...findBookState, value, valid: true }];
    }, []);
  };

  const approveModifying = async (modifiedBook: IBook) => {
    const response = await modifyBook.callAction(modifiedBook);
    const newBooks =
      modifyBook.type === "add"
        ? [...books, modifiedBook]
        : books.map((previousBook) =>
            previousBook.id === modifiedBook.id ? modifiedBook : previousBook
          );
    setBooks(newBooks);
    setModifyBook({
      state: initialBookState,
      callAction: () => null,
      type: "review",
    });
  };
  useEffect(() => {
    if (modifyBook.type === "review") {
      setModifyBook((prevState) => ({
        ...prevState,
        state: initialBookState,
        callAction: addBookRequest,
        type: "add",
      }));
    }
  }, []);

  return (
    <AddBookContainer>
      <PreViewBook>
        <BookCard {...book} />
      </PreViewBook>
      <ModifyBook>
        <Form
          fields={createListOfFields()}
          initialState={modifyBook}
          submitHandle={approveModifying}
          getFormState={getBookState}
          hideInputs={["id", "isbnLines", "favorite"]}
        />
      </ModifyBook>
    </AddBookContainer>
  );
};
const AddBookContainer = styled.div`
  height: 100%;
  display: flex;
  justify-content: space-between;
  align-items: stretch;
  padding-top: 50px;
`;
const PreViewBook = styled.div`
  width: 40%;
  display: flex;
  align-items: center;
  @media (${deviceBreakpoints.md}) {
    display: none;
  }
`;
const ModifyBook = styled.div`
  width: 60%;
  padding-left: 40px;
  @media (${deviceBreakpoints.md}) {
    width: 100%;
    padding-left: 0;
  }
`;
