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
  categories: [
    {
      id: "209345",
      category: "Kategorie 1",
      description: ["Category 1 description"],
    },
    {
      id: "2509789",
      category: "Kategorie 2",
      description: ["Category 2 description"],
    },
    {
      id: "89745",
      category: "Kategorie 3",
      description: ["Category 3 description"],
    },
    {
      id: "82435745",
      category: "Kategorie 4",
      description: ["Category 4 description"],
    },
    {
      id: "87789275",
      category: "Kategorie 5",
      description: ["Category 5 description"],
    },
    {
      id: "87789875",
      category: "Kategorie 6",
      description: ["Category 6 description"],
    },
    {
      id: "80782275",
      category: "Kategorie 7",
      description: ["Category 7 description"],
    },
    {
      id: "60988925",
      category: "Kategorie 8",
      description: ["Category 8 description"],
    },
    {
      id: "690875",
      category: "Kategorie 9",
      description: ["Category 9 description"],
    },
    {
      id: "98798925",
      category: "Kategorie 10",
      description: ["Category 10 description"],
    },
  ],
};
