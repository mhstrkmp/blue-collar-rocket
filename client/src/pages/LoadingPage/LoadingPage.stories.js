import React from "react";
import { LoadingPage } from "./LoadingPage";

export default {
  title: "Pages/Loading",
  component: LoadingPage,
};

const Template = (args) => <LoadingPage {...args} />;
export const Loading = Template.bind({});
