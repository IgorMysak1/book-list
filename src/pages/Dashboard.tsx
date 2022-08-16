import React, { useState } from "react";
import styled from "styled-components";
import { Title, ToggleChecker, Input, Image, BookCard } from "../components";
import { deviceBreakpoints } from "../styles";
import { IToggleChecker } from "../types";
import {
  DashboardFilterCategoriesInput,
  DashboardListOfCategories,
  DashboardTitle,
} from "../admin";

export const Dashboard: React.FC = () => {
  const [categories, setCategories] = useState<IToggleChecker[]>(
    DashboardListOfCategories
  );
  const [valueFilterInput, setValueFilterInput] = useState<string>(
    DashboardFilterCategoriesInput.initialValue
  );
  const books = [
    {
      title: "AAAA",
      description:
        "гл, англ. Google LLC — американська публічна транснаціональна корпорація, яку заснували 1998 року аспіранти Стенфордського університету Ларрі Пейдж і Сергій Брін. Найпопулярніший пошуковий сервіс станом на 2021 рік, має у власності,",
      author: "auut",
      category: "cat",
      isbn: "726373892",
      favorite: false,
    },
    {
      title: "BBBBB",
      description:
        "гл, англ. Google LLC — американська публічна транснаціональна корпорація, яку заснували 1998 року аспіранти Стенфордського університету Ларрі Пейдж і Сергій Брін. Найпопулярніший пошуковий сервіс станом на 2021 рік, має у власності,",
      author: "auut",
      category: "cat",
      isbn: "923746294",
      favorite: false,
    },
    {
      title: "CCC",
      description:
        "гл, англ. Google LLC — американська публічна транснаціональна корпорація, яку заснували 1998 року аспіранти Стенфордського університету Ларрі Пейдж і Сергій Брін. Найпопулярніший пошуковий сервіс станом на 2021 рік, має у власності,  ",
      author: "bbbb",
      category: "cat",
      isbn: "0197264435",
      favorite: false,
    },
    {
      title: "DDDD",
      description:
        "гл, англ. Google LLC — американська публічна транснаціональна корпорація, яку заснували 1998 року аспіранти Стенфордського університету Ларрі Пейдж і Сергій Брін. Найпопулярніший пошуковий сервіс станом на 2021 рік, має у власності,  ",
      author: "bbbb",
      category: "cat",
      isbn: "8326268942",
      favorite: false,
    },
    {
      title: "EEEE",
      description:
        "гл, англ. Google LLC — американська публічна транснаціональна корпорація, яку заснували 1998 року аспіранти Стенфордського університету Ларрі Пейдж і Сергій Брін. Найпопулярніший пошуковий сервіс станом на 2021 рік, має у власності,  ",
      author: "bbbb",
      category: "cat",
      isbn: "8923652789",
      favorite: false,
    },
  ];
  return (
    <Container>
      <Title>{DashboardTitle}</Title>
      <FilterBooks>
        <ToggleChecker items={categories} setState={setCategories} />
        <FilterBook>
          <Input
            value={valueFilterInput}
            setValue={setValueFilterInput}
            placeholder={DashboardFilterCategoriesInput.placeholder}
          />
          <CustomImage
            src={"image/icons/search.svg"}
            alt={"Search"}
            height={"30px"}
            width={"30px"}
          />
        </FilterBook>
      </FilterBooks>
      <Books>
        {books.map((book) => (
          <BookCard key={book.title + book.isbn} {...book} />
        ))}
      </Books>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 50px;
  @media (${deviceBreakpoints.md}) {
    padding-top: 20px;
  }
}
`;
const FilterBooks = styled.div`
  padding: 30px 0;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  @media (${deviceBreakpoints.sm}) {
    grid-template-rows: 1fr 1fr;
    row-gap: 10px;
  }
`;
const FilterBook = styled.div`
  width: 50%;
  display: flex;
  grid-column: 2/4;
  @media (${deviceBreakpoints.lg}) {
    width: 70%;
    justify-self: center;
  }
  @media (${deviceBreakpoints.md}) {
    width: 100%;
    justify-self: center;
  }
  @media (${deviceBreakpoints.sm}) {
    grid-row: 2/3;
    grid-column: 1/4;
  }
`;
const CustomImage = styled(Image)`
  margin: auto 0 auto 10px;
  cursor: pointer;
`;

const Books = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 10px;
`;
