import React from "react";
import Button from "./Button";

export default {
  title: "Components/Button",
  component: Button,
};

const Template = (args) => <Button {...args} />;

export const Add = Template.bind({});
Add.args = {
  children: "Hinzufügen",
};

export const Order = Template.bind({});
Order.args = {
  children: "Bestellen",
};
