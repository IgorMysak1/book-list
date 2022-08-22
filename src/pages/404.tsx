import React from "react";
import styled from "styled-components";
import { Button, Text } from "../components";
import { useNavigate } from "react-router-dom";

export const Page404: React.FC = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <CustomText fz={"large"}> 404</CustomText>
      <Button handleClick={() => navigate("/")}>
        <Text fz={"large"}>Go to dashboard</Text>
      </Button>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  height: 100%;
`;
const CustomText = styled(Text)`
  font-size: 100px;
  padding-top: 100px;
`;
