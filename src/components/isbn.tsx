import React from "react";
import styled from "styled-components";
import { Text } from "../components";

interface IsbnProps {
  isbn: string[];
  isbnLines: string[];
  className?: string;
}
export const Isbn: React.FC<IsbnProps> = ({ isbn, isbnLines, className }) => {
  return (
    <Container className={className}>
      <ContainerContent>
        {isbnLines.map((number, numberIndex) => (
          <DoubleLine key={numberIndex}>
            {new Array(2).fill("").map((_, wayIndex) => (
              <Line
                key={wayIndex}
                width={
                  wayIndex
                    ? +number / (wayIndex + 1)
                    : +number / (numberIndex + 1)
                }
              />
            ))}
          </DoubleLine>
        ))}
      </ContainerContent>
      <ContainerContent>
        {isbn.map((number, index) => (
          <IsbnNumber key={index}>
            <Text fz={"small"}>{number}</Text>
          </IsbnNumber>
        ))}
      </ContainerContent>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
`;
const ContainerContent = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-around;
`;
const IsbnNumber = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 5px;
`;
const DoubleLine = styled.div`
  display: flex;
`;
const Line = styled.div`
  height: 35px;
  width: ${({ width }: { width: number }) => width + 1}px;
  margin: 0 ${({ width }: { width: number }) => width / 2 + 1}px;
  background: ${({ theme }) => theme.text};
`;
