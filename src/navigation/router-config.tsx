import { Routes, Route } from "react-router-dom";
import { pages } from "./";
import { Dashboard, AddBook, Page404 } from "../pages";

export const RouterConfig = () => {
  return (
    <Routes>
      {pages.map(({ path, component: Component }) => (
        <Route key={path} path={path} element={<Component />} />
      ))}
    </Routes>
  );
};
