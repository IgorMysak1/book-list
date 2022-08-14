import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components";
import { IColorsTheme, IToggleChecker } from "../types";

interface ToggleCheckerProps {
  items: IToggleChecker[];
  setState: Dispatch<SetStateAction<IToggleChecker[]>>;
  className?: string;
}

export const ToggleChecker: React.FC<ToggleCheckerProps> = ({
  items,
  setState,
  className,
}) => {
  const changeActiveItem = (checkedItemIndex: number) => {
    const newItems = items.map((item, index) => ({
      ...item,
      checked: index === checkedItemIndex,
    }));
    setState(newItems);
  };

  return (
    <Container className={className}>
      {items.map(({ content, checked }, index) => (
        <Item
          onClick={() => changeActiveItem(index)}
          key={content}
          checked={checked}
        >
          {content}
        </Item>
      ))}
    </Container>
  );
};

const Container = styled.div`
  width: fit-content;
  padding: 5px;
  background: ${({ theme }) => theme.secondary};
  border-radius: 10px;
  display: flex;
`;
const Item = styled.div`
  padding: 6px 10px;
  border-radius: 10px;
  cursor: pointer;
  text-transform: capitalize;
  background: ${({
    theme,
    checked,
  }: {
    theme: IColorsTheme;
    checked: boolean;
  }) => (checked ? theme.main : theme.secondary)};
`;
