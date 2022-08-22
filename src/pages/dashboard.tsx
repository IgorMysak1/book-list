import React, { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import {
  Title,
  ToggleChecker,
  Input,
  BookCard,
  Loader,
  Text,
} from "../components";
import { deviceBreakpoints } from "../styles";
import { IBook } from "../types";
import {
  DashboardFilterCategoriesInput,
  DashboardListOfCategories,
  DashboardTitle,
  initialBookState,
} from "../admin";
import { AppContext } from "../context";
import { addBookRequest } from "../services";

export const Dashboard: React.FC = () => {
  const { books, setModifyBook } = useContext(AppContext);
  const [category, setCategory] = useState<string>("all");
  const [isLoadedBooks, setIsLoadedBooks] = useState<boolean>(false);
  const [valueFilterInput, setValueFilterInput] = useState<string>(
    DashboardFilterCategoriesInput.initialValue
  );
  const filterBooks = () => {
    const sortByCategories = {
      favorite: (book: IBook[]) => book.filter(({ favorite }) => favorite),
      "A-Z": (book: IBook[]) =>
        book.sort((a, b) => (a.title > b.title ? 1 : -1)),
      "Z-A": (book: IBook[]) =>
        book.sort((a, b) => (a.title > b.title ? -1 : 1)),
    };
    const filterByInput = books.filter((book) =>
      book.title
        .toLocaleLowerCase()
        .includes(valueFilterInput.toLocaleLowerCase())
    );
    return category === "all"
      ? filterByInput
      : sortByCategories[category as keyof typeof sortByCategories](
          filterByInput
        );
  };

  const showContent = () => {
    if (category === "favorite" && !books.some(({ favorite }) => favorite)) {
      return <Text fz={"large"}>There is no favorites books</Text>;
    }
    return (
      <Books>
        {filterBooks().map((book) => (
          <BookCard key={book.id + book.title} {...book} />
        ))}
      </Books>
    );
  };

  useEffect(() => {
    if (books.length) setIsLoadedBooks(true);
  }, [books]);
  useEffect(() => {
    setModifyBook((prevState) => ({
      ...prevState,
      state: initialBookState,
      callAction: () => null,
      type: "review",
    }));
  }, []);
  return (
    <Container>
      <Title fz={"medium"}>{DashboardTitle}</Title>
      <FilterBooks>
        <ToggleChecker
          items={DashboardListOfCategories}
          setState={setCategory}
        />
        <WrapperInput>
          <Input
            value={valueFilterInput}
            setValue={(value) => setValueFilterInput(value)}
            placeholder={DashboardFilterCategoriesInput.placeholder}
          />
        </WrapperInput>
      </FilterBooks>
      {isLoadedBooks ? showContent() : <Loader />}
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 30px;
  @media (${deviceBreakpoints.md}) {
    padding-top: 20px;
  }
}
`;
const FilterBooks = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: auto 1fr;
  gap: 10px;
  @media (${deviceBreakpoints.sm}) {
    padding: 10px 0;
    grid-template-rows: 1fr 1fr;
  }
`;
const WrapperInput = styled.div`
  @media (${deviceBreakpoints.sm}) {
    grid-row: 2/3;
    grid-column: 1/3;
  }
`;

const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  grid-auto-rows: 1fr;
  gap: 10px;
  padding-bottom: 20px;
`;
