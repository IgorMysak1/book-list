import React, { Dispatch, SetStateAction, useState } from "react";
import styled from "styled-components";
import { IColorsTheme, IToggleChecker } from "../types";
import { Text } from "./text";

interface ToggleCheckerProps {
  items: IToggleChecker[];
  setState: Dispatch<SetStateAction<string>>;
  handleClick?: () => void;
  className?: string;
}

export const ToggleChecker: React.FC<ToggleCheckerProps> = ({
  items,
  setState,
  className,
  handleClick,
}) => {
  const [itemsState, setItemsState] = useState<IToggleChecker[]>(items);
  const changeActiveItem = (currentItem: string, checkedItemIndex: number) => {
    const newItems = items.map((item, index) => ({
      ...item,
      checked: index === checkedItemIndex,
    }));
    setState(currentItem);
    setItemsState(newItems);
    handleClick?.();
  };

  return (
    <Container className={className}>
      {itemsState.map(({ content, checked }, index) => (
        <Item
          onClick={() => changeActiveItem(content, index)}
          key={content}
          checked={checked}
        >
          <Text fz={"medium"}>{content}</Text>
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
  background: ${({
    theme,
    checked,
  }: {
    theme: IColorsTheme;
    checked: boolean;
  }) => (checked ? theme.main : theme.secondary)};
`;
