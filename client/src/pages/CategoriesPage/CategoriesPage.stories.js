import React from "react";
import { CategoriesPage } from "./CategoriesPage";

export default {
  title: "Pages/Categories",
  component: CategoriesPage,
};

const Template = (args) => <CategoriesPage {...args} />;

export const Categories = Template.bind({});
Categories.args = {
  children: "Home",
};
