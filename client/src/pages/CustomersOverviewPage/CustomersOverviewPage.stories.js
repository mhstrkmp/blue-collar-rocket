import React from "react";
import { CustomersOverviewPage } from "./CustomersOverviewPage";

export default {
  title: "Pages/Customers",
  component: CustomersOverviewPage,
};

const Template = (args) => <CustomersOverviewPage {...args} />;
export const Customers = Template.bind({});
Customers.args = {
  title: "kunden",
};
