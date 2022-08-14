import { IToggleChecker, IInput } from "../types";

export const DashboardTitle = "Your list of books:";
export const DashboardSubtitle = "Your personal list";
export const DashboardListOfCategories = [
  { content: "all", checked: true },
  { content: "heart", checked: false },
] as IToggleChecker[];
export const DashboardFilterCategoriesInput = {
  placeholder: "Filter your book",
  initialValue: "",
} as IInput;
