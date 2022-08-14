import React, { useState } from "react";
import styled from "styled-components";
import { Title, ToggleChecker, Input, Image } from "../components";
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
