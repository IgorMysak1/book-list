import React from "react";
import { IBook } from "../types";
import styled from "styled-components";

export const BookCard: React.FC<IBook> = ({
  title,
  category,
  favorite,
  isbn,
  author,
}) => {
  return <Container></Container>;
};
const Container = styled.div``;
