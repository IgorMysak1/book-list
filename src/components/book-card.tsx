import React, { useContext } from "react";
import { IBook } from "../types";
import styled from "styled-components";
import { Isbn, Title, Text } from "../components";
import { deleteBookRequest, patchBookRequest } from "../services";
import { AppContext } from "../hooks";
import { EditSVG, HeartSVG, FillHeartSVG, TrashSVG } from "../assets";

export const BookCard: React.FC<IBook> = ({
  id,
  isbnLines,
  isbn,
  title,
  description,
  category,
  author,
  favorite,
}) => {
  const { books, setBooks } = useContext(AppContext);
  const deleteBook = async (bookId: number) => {
    const newListOfBooks = books.filter(({ id }) => bookId !== id);
    setBooks(newListOfBooks);
    await deleteBookRequest(id);
  };
  const likeBook = async (bookId: number, favorite: boolean) => {
    const newListOfBooks = books.map((book) =>
      bookId === book.id ? { ...book, favorite: !favorite } : book
    );
    setBooks(newListOfBooks);
    const body = {
      favorite: !favorite,
    };
    await patchBookRequest(bookId, body);
  };
  return (
    <Container>
      <CustomIsbn>
        <IsbnText fz={"large"}>isbn</IsbnText>
        <Isbn isbn={isbn.split("")} isbnLines={isbnLines.split("")} />
      </CustomIsbn>
      <ContentLayout>
        <CustomTitle fz={"small"}>{title}</CustomTitle>
        <CustomText fz={"small"}>{description}</CustomText>
        <BookInfo>
          <TextInfo fz={"small"}>Author: {author}</TextInfo>
          <TextInfo fz={"small"}>Category: {category}</TextInfo>
          <Images>
            <CustomSvg>
              <ImageLike onClick={() => likeBook(id, favorite)}>
                {favorite ? <FillHeartSVG /> : <HeartSVG />}
              </ImageLike>
            </CustomSvg>
            <CustomSvg>
              <EditSVG />
            </CustomSvg>
            <CustomSvg>
              <TrashSVG handleClick={() => deleteBook(id)} />
            </CustomSvg>
          </Images>
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
  text-transform: uppercase;
`;
const ContentLayout = styled.div`
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  background: ${({ theme }) => theme.main};
  border-radius: 8px;
  padding: 10px;
`;
const CustomTitle = styled(Title)`
  text-overflow: ellipsis;
  overflow: hidden;
  width: 100%;
  white-space: nowrap;
`;
const CustomText = styled(Text)`
  font-size: 14px;
  padding: 5px 0 10px;
  flex: 1 1 auto;
`;
const Images = styled.div`
  display: flex;
  padding-top: 10px;
`;
const ImageLike = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const CustomSvg = styled.div`
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-left: 8px;
`;
const BookInfo = styled.div`
  font-size: 14px;
  padding-top: 5px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
`;
const TextInfo = styled(Text)`
  width: 100%;
  font-size: 14px;
  padding-top: 5px;
  text-align: left;
  text-transform: capitalize;
`;
