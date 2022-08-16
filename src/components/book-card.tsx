import React from "react";
import { IBook } from "../types";
import styled from "styled-components";
import { Isbn, Title, Text, Image } from "../components";

export const BookCard: React.FC<IBook> = ({
  isbn,
  title,
  description,
  category,
  author,
  favorite,
}) => {
  return (
    <Container>
      <CustomIsbn>
        <IsbnText>ISBN</IsbnText>
        <Isbn isbn={isbn.split("")} />
      </CustomIsbn>
      <ContentLayout>
        <Title>{title}</Title>
        <CustomText>{description}</CustomText>
        <BookInfo>
          <TextInfo>Author: {author}</TextInfo>
          <TextInfo>Category: {category}</TextInfo>
          <CustomImage
            src={"image/icons/heart.svg"}
            alt={"heart"}
            height={"25px"}
            width={"25px"}
          />
        </BookInfo>
      </ContentLayout>
    </Container>
  );
};
const Container = styled.div`
  background: ${({ theme }) => theme.secondary};
  border-radius: 8px;
  padding: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const CustomIsbn = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 10px 0;
`;
const IsbnText = styled(Text)`
  writing-mode: vertical-rl;
`;
const ContentLayout = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.main};
  border-radius: 8px;
  padding: 10px;
`;
const CustomText = styled(Text)`
  font-size: 14px;
  padding: 5px 0 10px;
`;
const BookInfo = styled.div`
  font-size: 14px;
  padding-top: 5px;
  display: grid;
  grid-template: repeat(2, 1fr) / repeat(2, 1fr);
`;
const TextInfo = styled(Text)`
  font-size: 14px;
  padding-top: 5px;
`;
const CustomImage = styled(Image)`
  grid-column: 2/3;
  grid-row: 1/3;
  align-self: flex-end;
  justify-self: flex-end;
  cursor: pointer;
`;
