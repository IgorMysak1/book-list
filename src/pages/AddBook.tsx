import React, { useContext, useEffect, useState } from "react";
import { BookCard, Input, Text, Title } from "../components";
import styled from "styled-components";
import { AppContext } from "../context";
import { IBook } from "../types";
import { deviceBreakpoints } from "../styles";
import { Button } from "../components";
import { initialBookState } from "../admin";
import { addBookRequest } from "../services";

export const AddBook: React.FC = () => {
  const { modifyBook, setModifyBook, books, setBooks } = useContext(AppContext);
  const [book, setBook] = useState<IBook>(modifyBook.state);

  const updateValueField = (field: keyof IBook, value: string) =>
    setBook({ ...book, [field]: value });

  const showNecessaryInputs = () => {
    const hideInputs = ["id", "isbnLines", "favorite"];
    return Object.entries(modifyBook.state).filter(
      ([valueName]) => !hideInputs.includes(valueName)
    );
  };
  const approveModifying = async (event: React.SyntheticEvent) => {
    event.preventDefault();
    console.log("SSS");
    const response = await modifyBook.callAction(book);
    if (modifyBook.type === "add") {
      setBooks((prevBooks) => [...prevBooks, book]);
    }
    if (modifyBook.type === "edit") {
      const newBooks = books.map((previousBook) =>
        previousBook.id === book.id ? book : previousBook
      );
      setBooks(newBooks);
    }
    // setModifyBook((prevState) => ({
    //   ...prevState,
    //   state: initialBookState,
    //   callAction: () => null,
    //   type: "review",
    //   success: true,
    // }));
  };
  const value = (fieldName: keyof IBook) => {
    if (modifyBook.type === "edit") return book[fieldName] as string;
    return book[fieldName] === modifyBook.state[fieldName]
      ? ""
      : book[fieldName];
  };
  useEffect(() => {
    if (modifyBook.type === "review") {
      setModifyBook((prevState) => ({
        ...prevState,
        state: initialBookState,
        callAction: addBookRequest,
        type: "add",
        success: false,
      }));
    }
  }, []);
  return (
    <AddBookContainer>
      <PreViewBook>
        <BookCard {...book} />
      </PreViewBook>
      <ModifyBook onSubmit={approveModifying}>
        {showNecessaryInputs().map(([fieldName]) => (
          <BookValue key={fieldName}>
            <CustomTitleValue fz={"small"}>{fieldName}</CustomTitleValue>
            <Input
              value={value(fieldName as keyof IBook) as string}
              setValue={(value) =>
                updateValueField(fieldName as keyof IBook, value)
              }
              placeholder={modifyBook.state[fieldName as keyof IBook] as string}
            />
          </BookValue>
        ))}
        <Button type={"submit"}>
          <Text fz={"large"}>{`${modifyBook.type} book`}</Text>
        </Button>
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

const ModifyBook = styled.form`
  width: 60%;
  padding-left: 40px;
  @media (${deviceBreakpoints.md}) {
    width: 100%;
    padding-left: 0;
  }
`;
const BookValue = styled.div`
  :not(:last-child) {
    margin-bottom: 30px;
  }
  @media (${deviceBreakpoints.md}) {
    margin-bottom: 15px;
  }
`;
const CustomTitleValue = styled(Title)`
  margin-bottom: 10px;
`;
