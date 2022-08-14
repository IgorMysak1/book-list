import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Title, ToggleChecker, Image } from "../components";
import { AppContext } from "../hooks";
import { deviceBreakpoints } from "../styles";
import { HeaderTitle } from "../admin";

export const Header: React.FC = () => {
  const { themes, setThemes } = useContext(AppContext);
  const [isThemesOpen, setIsThemesOpen] = useState<boolean>(false);

  const toggleThemeBlock = () => setIsThemesOpen(!isThemesOpen);

  return (
    <HeaderStyled>
      <CustomTitle>{HeaderTitle}</CustomTitle>
      <Theme reverse={isThemesOpen}>
        <ImageWrapper reverse={isThemesOpen}>
          <CustomImage
            reverse={isThemesOpen}
            src={"image/icons/arrow.svg"}
            alt={"Arrow"}
            handleClick={toggleThemeBlock}
          />
        </ImageWrapper>
        <CustomToggleChecker items={themes} setState={setThemes} />
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
  font-size: 36px;
  @media (${deviceBreakpoints.lg}) {
    font-size: 32px;
  }
  @media (${deviceBreakpoints.md}) {
    font-size: 28px;
  }
  @media (${deviceBreakpoints.sm}) {
    padding: 0;
  }
  @media (${deviceBreakpoints.xs}) {
    font-size: 24px;
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
  }
`;
const CustomImage = styled(Image)`
  cursor: pointer;
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
