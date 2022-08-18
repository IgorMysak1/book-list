import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Title, ToggleChecker } from "../components";
import { AppContext } from "../hooks";
import { deviceBreakpoints } from "../styles";
import { GenerallyThemeColors, HeaderTitle } from "../admin";
import { ArrowSVG } from "../assets";

export const Header: React.FC = () => {
  const { setTheme } = useContext(AppContext);
  const [isThemesOpen, setIsThemesOpen] = useState<boolean>(false);

  const toggleThemeBlock = () => setIsThemesOpen(!isThemesOpen);

  return (
    <HeaderStyled>
      <CustomTitle fz={"large"}>{HeaderTitle}</CustomTitle>
      <Theme reverse={isThemesOpen}>
        <ImageWrapper reverse={isThemesOpen}>
          <CustomImage reverse={isThemesOpen} handleClick={toggleThemeBlock} />
        </ImageWrapper>
        <CustomToggleChecker
          items={GenerallyThemeColors}
          setState={setTheme}
          handleClick={toggleThemeBlock}
        />
      </Theme>
    </HeaderStyled>
  );
};

const HeaderStyled = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (${deviceBreakpoints.sm}) {
    justify-content: flex-start;
  }
`;

const CustomTitle = styled(Title)`
  padding-right: 30px;
  @media (${deviceBreakpoints.sm}) {
    padding: 0;
  }
`;
const Theme = styled.div`
  @media (${deviceBreakpoints.sm}) {
    display: flex;
    align-items: stretch;
    position: fixed;
    top: 60px;
    transition: 0.5s;
    right: ${({ reverse }: { reverse: boolean }) => (reverse ? "0" : "-121px")};
  }
`;

const ImageWrapper = styled.div`
  display: none;
  @media (${deviceBreakpoints.sm}) {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: ${({ reverse }: { reverse: boolean }) =>
      reverse ? "0 0 0 7px" : "0 4px 0 7px"};
    background: ${({ theme }) => theme.secondary};
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    transform: translateX(1px);
  }
`;
const CustomImage = styled(ArrowSVG)`
  transition: 0.5s;
  transform: rotate(
    ${({ reverse }: { reverse: boolean }) => (reverse ? "270deg" : "90deg")}
  );
`;

const CustomToggleChecker = styled(ToggleChecker)`
  padding: 7px;
  @media (${deviceBreakpoints.sm}) {
    border-radius: 0;
`;
