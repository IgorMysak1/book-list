import { Dashboard, AddBook, Page404 } from "../pages";

export const pages = [
  { path: "/", component: Dashboard, page: "Home" },
  { path: "/add-book", component: AddBook, page: "Add book" },
  { path: "*", component: Page404, page: "404" },
];
