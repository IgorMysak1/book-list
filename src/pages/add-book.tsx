import React, { useContext, useEffect, useState } from "react";
import { BookCard, Button, Form, Text, Title } from "../components";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { AppContext } from "../context";
import { IBook } from "../types";
import { deviceBreakpoints } from "../styles";
import { addBookRequest } from "../services";
import { initialBookState } from "../admin";
import { ModalWindow } from "../components";

export const AddBook: React.FC = () => {
  const navigate = useNavigate();
  const { modifyBook, setModifyBook, books, setBooks } = useContext(AppContext);
  const [book, setBook] = useState<IBook>(modifyBook.state);
  const [isOpenModalWindow, setIsOpenModalWindow] = useState(false);

  const getBookState = (book: IBook) => setBook(book);
  const toggleWindow = () => setIsOpenModalWindow((prevState) => !prevState);

  const approveModifying = async (modifiedBook: IBook) => {
    const response = await modifyBook.callAction(modifiedBook);
    const newBooks =
      modifyBook.type === "add"
        ? [...books, modifiedBook]
        : books.map((previousBook) =>
            previousBook.id === modifiedBook.id ? modifiedBook : previousBook
          );
    setBooks(newBooks);
    setIsOpenModalWindow(true);
  };
  const addOnMoreBook = () => {
    setModifyBook({
      state: initialBookState,
      callAction: () => null,
      type: "add",
    });
    toggleWindow();
  };
  const goTodDashboard = () => {
    setModifyBook({
      state: initialBookState,
      callAction: () => null,
      type: "review",
    });
    navigate("/");
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
    <>
      {isOpenModalWindow && (
        <ModalWindow closeWindow={toggleWindow}>
          <ModalWindowContainer>
            <ModalTitle fz={"large"}>{`Book ${
              modifyBook.type === "add" ? "added" : "edited"
            } successfully`}</ModalTitle>
            {modifyBook.type === "add" && (
              <Button handleClick={addOnMoreBook}>
                <Text fz={"small"}>Add on more book</Text>
              </Button>
            )}
            <Button handleClick={goTodDashboard}>
              <Text fz={"small"}>Go to dashboard</Text>
            </Button>
          </ModalWindowContainer>
        </ModalWindow>
      )}
      <AddBookContainer>
        <PreViewBook>
          <BookCard {...book} />
        </PreViewBook>
        <ModifyBook>
          <Form
            fields={modifyBook.state}
            initialState={modifyBook}
            submitHandle={approveModifying}
            getFormState={getBookState}
            hideInputs={["id", "isbnLines", "favorite"]}
          />
        </ModifyBook>
      </AddBookContainer>
    </>
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
const ModalWindowContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
`;
const ModalTitle = styled(Title)`
  margin-bottom: 50px;
`;
