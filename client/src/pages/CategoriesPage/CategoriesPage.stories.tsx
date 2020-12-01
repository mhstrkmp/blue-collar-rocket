import React from "react";
import { CategoriesPage } from "./CategoriesPage";

export default {
  title: "Pages/CategoriesPage",
  component: CategoriesPage,
};

export const Standard = (args: any) => <CategoriesPage {...args} />;
