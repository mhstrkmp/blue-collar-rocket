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
  customers: [
    {
      id: "203945",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "09345",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "0995774",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "07076074",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "0707634",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "0084678",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "849876",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "5677399",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "0374507",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "07906704",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "879346",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
    {
      id: "073465",
      name: "Max Mustermann",
      adress: ["Musterstraße 95", "48924 Musterstadt"],
    },
  ],
};
