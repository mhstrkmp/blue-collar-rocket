import React from "react";
import { LoadingPage } from "./LoadingPage";

export default {
  title: "Pages/LoadingPage",
  component: LoadingPage,
};

export const Standard = (args: any) => <LoadingPage {...args} />;
