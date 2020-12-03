import React from "react";
import Header from "./Header";

export default {
  title: "Component/Header",
  component: Header,
};

const Template = (args) => <Header {...args} />;

export const HeaderHome = Template.bind({});
HeaderHome.args = {
  children: "Home",
};
