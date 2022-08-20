import React, { useContext, useState } from "react";
import styled from "styled-components";
import { Title, ToggleChecker } from "../components";
import { AppContext } from "../context";
import { deviceBreakpoints } from "../styles";
import { GenerallyThemeColors } from "../admin";
import { ArrowSVG } from "../assets";
import { Link } from "react-router-dom";
import { pages } from "../navigation";
import { useLocation } from "react-router-dom";
import { IColorsTheme, IModifyBook } from "../types";
import { initialBookState } from "../admin";
import { addBookRequest } from "../services";

export const Header: React.FC = () => {
  const { setTheme, setModifyBook } = useContext(AppContext);
  const location = useLocation();
  const [isThemesOpen, setIsThemesOpen] = useState<boolean>(false);

  const toggleThemeBlock = () => setIsThemesOpen(!isThemesOpen);
  const filterPages = () => {
    const hidePages = ["*"];
    return pages.filter(({ path }) => !hidePages.includes(path));
  };
  const actionOnRoute = (path: string) => {
    const actions = {
      "/add-book": () =>
        setModifyBook((prevState: IModifyBook) => ({
          ...prevState,
          state: initialBookState,
          type: "add",
          callAction: addBookRequest,
        })),
    };
    if (!actions.hasOwnProperty(path)) return;
    actions[path as keyof typeof actions]();
  };
  return (
    <HeaderStyled>
      <Routes>
        {filterPages().map(({ path, page }) => (
          <CustomLink
            to={path}
            key={path}
            onClick={(event) => actionOnRoute(path)}
          >
            <Route fz={"small"} isPageCurrent={location.pathname === path}>
              {page}
            </Route>
          </CustomLink>
        ))}
      </Routes>
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

const CustomLink = styled(Link)`
  text-decoration: none;
`;
const Routes = styled.div`
  display: flex;
`;
const Route = styled(Title)`
  padding-right: 20px;
  color: ${({
    theme,
    isPageCurrent,
  }: {
    theme: IColorsTheme;
    isPageCurrent: boolean;
  }) => (isPageCurrent ? theme.highlight : theme.text)};
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
