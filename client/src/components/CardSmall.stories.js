import React from "react";
import CardSmall from "./CardSmall";

export default {
  title: "Components/Cards/Small",
  component: CardSmall,
};

const Template = (args) => <CardSmall {...args} />;

export const Category = Template.bind({});
Category.args = {
  title: "Kategorie",
  description: ["Lorem ipsum dolor sit"],
};

export const Customer = Template.bind({});
Customer.args = {
  title: "Max Mustermann",
  description: ["Musterstraße 95", "48924 Musterstadt"],
};
