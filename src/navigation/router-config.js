import { Routes, Route } from "react-router-dom";
import { Dashboard, AddBook, Page404 } from "../pages";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/" element={<AddBook />} />
      <Route path="*" element={<Page404 />} />
    </Routes>
  );
};
