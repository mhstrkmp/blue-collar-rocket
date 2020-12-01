import React from "react";
import { CustomersOverviewPage } from "./CustomersOverviewPage";

export default {
  title: "Pages/CustomersOverviewPage",
  component: CustomersOverviewPage,
};

export const Standard = (args: any) => <CustomersOverviewPage {...args} />;
