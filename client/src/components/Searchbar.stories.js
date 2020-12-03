import React from "react";
import Searchbar from "./Searchbar";

export default {
  title: "Component/Searchbar",
  component: Searchbar,
};

const Template = (args) => <Searchbar {...args} />;

export const Search = Template.bind({});
Search.args = {
  placeholder: "Suche",
};
