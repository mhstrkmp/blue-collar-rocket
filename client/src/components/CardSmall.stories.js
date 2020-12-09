import React from "react";
import CardSmall from "./CardSmall";

export default {
  title: "Components/Cards/Small",
  component: CardSmall,
};

const Template = (args) => <CardSmall {...args} />;

export const Category = Template.bind({});
Category.args = {
  cardTitle: "Kategorie",
  cardText: ["Lorem ipsum dolor sit"],
};

export const Customer = Template.bind({});
Customer.args = {
  cardTitle: "Max Mustermann",
  cardText: ["Musterstraße 95", "48924 Musterstadt"],
};
