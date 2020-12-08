import React from "react";
import { CategoriesPage } from "./CategoriesPage";

export default {
  title: "Pages/Home",
  component: CategoriesPage,
};

const Template = (args) => <CategoriesPage {...args} />;

export const Home = Template.bind({});
Home.args = {
  title: "Home",
};
