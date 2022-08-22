import React from "react";
import { Portal } from "../utils";
import styled from "styled-components";
import { breakpoints } from "../styles";
import { CrossSVG } from "../assets";

interface ModalWindowProps {
  children: React.ReactNode;
  closeWindow: () => void;
}
export const ModalWindow: React.FC<ModalWindowProps> = ({
  children,
  closeWindow,
}) => {
  return (
    <Portal id={"portal"}>
      <Shadow>
        <Container>
          <CustomCross handleClick={closeWindow} />
          {children}
        </Container>
      </Shadow>
    </Portal>
  );
};
const Shadow = styled.div`
  height: 100%;
  width: 100%;
  background: ${({ theme }) => theme.backgroundShadow};
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Container = styled.div`
  position: relative;
  width: 70%;
  background: ${({ theme }) => theme.main};
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 70px 50px;
  @media (max-width: ${breakpoints.sm}) {
    width: 90%;
  }
`;
const CustomCross = styled(CrossSVG)`
  position: absolute;
  top: 20px;
  right: 20px;
  width: 25px;
  height: 25px;
`;
